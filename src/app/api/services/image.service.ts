/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { StringApiResponse } from '../models/string-api-response';

@Injectable({
  providedIn: 'root',
})
export class ImageService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation insertImage
   */
  static readonly InsertImagePath = '/api/Image';

  /**
   * Retrieve Image Name.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insertImage()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  insertImage$Response(params?: {
    body?: { 'Image'?: Blob | null }
  }): Observable<StrictHttpResponse<StringApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ImageService.InsertImagePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringApiResponse>;
      })
    );
  }

  /**
   * Retrieve Image Name.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `insertImage$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  insertImage(params?: {
    body?: { 'Image'?: Blob | null }
  }): Observable<StringApiResponse> {

    return this.insertImage$Response(params).pipe(
      map((r: StrictHttpResponse<StringApiResponse>) => r.body as StringApiResponse)
    );
  }

  /**
   * Path part for operation apiImageFileNameGet
   */
  static readonly ApiImageFileNameGetPath = '/api/Image/{fileName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiImageFileNameGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImageFileNameGet$Response(params: {
    fileName: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ImageService.ApiImageFileNameGetPath, 'get');
    if (params) {
      rb.path('fileName', params.fileName, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiImageFileNameGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiImageFileNameGet(params: {
    fileName: string;
  }): Observable<void> {

    return this.apiImageFileNameGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
