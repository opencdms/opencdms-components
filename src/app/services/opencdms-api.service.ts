import { Injectable } from '@angular/core';
import { Fetcher, Middleware, ApiError } from 'openapi-typescript-fetch';
import { environment } from 'src/environments/environment';
import { OpenCDMSAPIModel } from 'src/models';
import { NotificationService } from './notification.service';

/** 
 * Provide access to OpenCDMS Api Endpoints 
 * @example
 * ```
 * const req = this.api.path('/api-endpoint').method('get').create();
 * const res = await req({param_key:param_value}).catch((err) => this.api.handleError(err));
 * if (res) {
 *  // do something with result
 * }
 *
 * ```

 * */
@Injectable({
  providedIn: 'root',
})
export class OpenCDMSApiService {
  /** Provide access to typed api path endpoints */
  public get path() {
    return this.fetcher.path;
  }

  private fetcher = Fetcher.for<OpenCDMSAPIModel.paths>();

  constructor(private notificationService: NotificationService) {
    this.addLoggerMiddleware();
  }

  /** Optional error handler can be provided to callbacks */
  public handleError(error: any) {
    console.group('[Error]');
    console.error(error);
    if (error && typeof error === 'object') {
      Object.keys(error).forEach((key) => {
        console.log(key, error[key]);
      });
    }
    console.groupEnd;
  }

  private addLoggerMiddleware() {
    // Add a type-safe fetch
    // Middleware
    const loggerMiddleware: Middleware = async (url, init, next) => {
      const id = this.generateTimestamp();
      console.log(`[Req] ${url}`);
      try {
        const response = await next(url, init);
        console.log(`[Res] ${url}`, response);
        return response;
      } catch (error) {
        const { url, data, status } = error as ApiError;
        const endpoint = url.replace(environment.opencdmsServerEndpoint, '');
        const text = data?.detail || data || 'An error occured, see console logs for details';
        const title = `[${status}] ${endpoint}`;
        this.notificationService.createNotification({ title, text, meta: error, type: 'error' });
        return null as any;
      }
    };
    // global configuration
    this.fetcher.configure({
      baseUrl: environment.opencdmsServerEndpoint,
      init: {
        headers: {},
      },
      use: [loggerMiddleware], // middlewares
    });
  }

  private generateTimestamp() {
    return new Date().getTime();
  }
}
