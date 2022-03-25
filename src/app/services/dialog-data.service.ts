import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { saveAs } from 'file-saver';
import { TypedFetch } from 'openapi-typescript-fetch';
import { unparse as jsonToCsv } from 'papaparse';
import { OpenCDMSApiService } from './opencdms-api.service';

type IDialogResponseType = 'image' | 'table';

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
    tableData?: any[];
    tableHeaders?: string[];
    type?: IDialogResponseType;
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
    this.submission.response = {};
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
      // Handle different response types
      // TODO - should include more info in request or response to make clear what to expect (possibly linked to request ID)
      if (responseData && responseData.mimetype) {
        // convert base64 data for use in image
        const { data, mimetype } = responseData;
        if (responseData.mimetype.includes('image')) {
          const imageData = `data:${mimetype};base64,${data}`;
          this.submission.response.type = 'image';
          this.submission.response.imageData = this.sanitizer.bypassSecurityTrustUrl(imageData);
        }
      }
      if (responseData && responseData.result) {
        this.submission.response.type = 'table';
        this.submission.response.tableHeaders = Object.keys(responseData[0]);
        this.submission.response.tableData = responseData.result;
      }

      return;
    }
  }

  async saveResponse() {
    const saveMethods: { [key in IDialogResponseType]: () => void } = {
      table: () => {
        const csvData = jsonToCsv(this.submission.response.tableData as any[]);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
        console.log('saving csv data', csvData);
        return saveAs(blob, 'output.csv');
      },
      image: () => {
        const { data, mimetype } = this.submission.response._raw.data as any;
        const imageData = `data:${mimetype};base64,${data}`;
        return saveAs(imageData, 'output.jpeg');
      },
    };

    if (this.submission.response.type) {
      return saveMethods[this.submission.response.type]();
    }
    return;
  }
}

function testData() {
  return [
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 1,
      mean_obsValue: 24.282258064516128,
      max_obsValue: 31.4,
      min_obsValue: 18.5,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 2,
      mean_obsValue: 23.239655172413794,
      max_obsValue: 28.7,
      min_obsValue: 18.5,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 3,
      mean_obsValue: 23.60483870967742,
      max_obsValue: 28.4,
      min_obsValue: 18.7,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 4,
      mean_obsValue: 22.231666666666666,
      max_obsValue: 28,
      min_obsValue: 16,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 5,
      mean_obsValue: 19.536666666666665,
      max_obsValue: 25.7,
      min_obsValue: 11.9,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 6,
      mean_obsValue: 17.97,
      max_obsValue: 23.6,
      min_obsValue: 12.9,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 7,
      mean_obsValue: 17.490322580645163,
      max_obsValue: 26.1,
      min_obsValue: 11.7,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 8,
      mean_obsValue: 19.047540983606556,
      max_obsValue: 28.1,
      min_obsValue: 12.4,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 9,
      mean_obsValue: 24.60754716981132,
      max_obsValue: 30.5,
      min_obsValue: 17.2,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 10,
      mean_obsValue: 26.24642857142857,
      max_obsValue: 32.4,
      min_obsValue: 19.7,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 11,
      mean_obsValue: 24.329310344827586,
      max_obsValue: 31.2,
      min_obsValue: 18.4,
    },
    {
      recordedFrom: '67774010',
      year: 2000,
      month: 12,
      mean_obsValue: 24.175862068965518,
      max_obsValue: 31,
      min_obsValue: 16.3,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 1,
      mean_obsValue: 27.438709677419354,
      max_obsValue: 30.7,
      min_obsValue: 22.4,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 2,
      mean_obsValue: 25.97586206896552,
      max_obsValue: 30.3,
      min_obsValue: 20.6,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 3,
      mean_obsValue: 26.861290322580643,
      max_obsValue: 29.3,
      min_obsValue: 24,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 4,
      mean_obsValue: 25.393333333333334,
      max_obsValue: 27.6,
      min_obsValue: 21.5,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 5,
      mean_obsValue: 22.296774193548387,
      max_obsValue: 25.4,
      min_obsValue: 14.5,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 6,
      mean_obsValue: 20.236666666666668,
      max_obsValue: 22.4,
      min_obsValue: 16,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 7,
      mean_obsValue: 20.01290322580645,
      max_obsValue: 25.1,
      min_obsValue: 15.6,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 8,
      mean_obsValue: 21.664516129032258,
      max_obsValue: 26.6,
      min_obsValue: 16.7,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 9,
      mean_obsValue: 26.75,
      max_obsValue: 29.7,
      min_obsValue: 22.5,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 10,
      mean_obsValue: 28.087096774193547,
      max_obsValue: 31.7,
      min_obsValue: 19.7,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 11,
      mean_obsValue: 27.426666666666666,
      max_obsValue: 31.6,
      min_obsValue: 22.3,
    },
    {
      recordedFrom: '67775050',
      year: 2000,
      month: 12,
      mean_obsValue: 27.532258064516128,
      max_obsValue: 31.7,
      min_obsValue: 18.7,
    },
  ];
}
