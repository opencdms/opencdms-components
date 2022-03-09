import { Injectable } from '@angular/core';

/** 
 * Provide access to Components Api Endpoints 
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
export class ComponentsApiService {}
