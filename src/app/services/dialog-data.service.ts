import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { saveAs } from 'file-saver';
import { TypedFetch } from 'openapi-typescript-fetch';
import { OpenCDMSApiService } from './opencdms-api.service';

export interface IDialogSubmission {
  status?: 'pending' | 'success' | 'error';
  request: {
    _raw?: any;
    params?: any;
  };
  response: {
    _raw?: any;
    status?: number;
    imageData?: SafeUrl;
    type?: 'image' | 'csv';
  };
}

const SUBMISSION_DEFAULT: IDialogSubmission = { status: undefined, request: {}, response: {} };

@Injectable({
  providedIn: 'root',
})
export class DialogDataService {
  submission: IDialogSubmission = SUBMISSION_DEFAULT;
  constructor(public apiService: OpenCDMSApiService, private sanitizer: DomSanitizer) {}

  public get endpoint() {
    return this.apiService.pathComponents;
  }

  async submitDialog<T>(req: TypedFetch<any>, params: T) {
    this.submission.request.params = params;
    this.submission.status = 'pending';
    this.submission.request._raw = req;
    const res = await req(params).catch((err) => {
      console.error(err);
      this.submission.response._raw = err;
      this.submission.status = 'error';
      return;
    });
    this.submission.response._raw = res;
    if (res) {
      this.submission.status = 'success';

      const responseData = res.data as any;
      if (responseData && responseData.mimetype) {
        // convert base64 data for use in image
        const { data, mimetype } = responseData;
        if (responseData.mimetype.includes('image')) {
          const imageData = `data:${mimetype};base64,${data}`;
          this.submission.response.imageData = this.sanitizer.bypassSecurityTrustUrl(imageData);
        }
      }
      return;
    }
  }

  async saveResponse() {
    const { data, mimetype } = this.submission.response._raw.data as any;
    const imageData = `data:${mimetype};base64,${data}`;
    return saveAs(imageData, 'output.jpeg');
  }
}
