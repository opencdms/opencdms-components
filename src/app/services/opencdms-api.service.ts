import { Injectable } from '@angular/core';
import { Fetcher, Middleware } from 'openapi-typescript-fetch';
import { OpenCDMSAPIModel } from 'src/models';

// Add a type-safe fetch
const fetcher = Fetcher.for<OpenCDMSAPIModel.paths>();

// Middleware
const loggerMiddleware: Middleware = async (url, init, next) => {
  console.log(`[Req] ${url}`);
  const response = await next(url, init);
  console.log(`[Res] ${url}`, response);
  return response;
};

// global configuration
fetcher.configure({
  baseUrl: 'https://api.opencdms.org/climsoft',
  init: {
    headers: {},
  },
  use: [loggerMiddleware], // middlewares
});

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
  public path = fetcher.path;

  /** Optional error handler can be provided to callbacks */
  public handleError(error: any) {
    console.error(error);
  }
}
