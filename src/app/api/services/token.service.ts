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
import { UserLogin } from '../models/user-login';

@Injectable({
  providedIn: 'root',
})
export class TokenService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation authentication
   */
  static readonly AuthenticationPath = '/Token';

  /**
   * Retrieve Image Name.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authentication$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authentication$Plain$Response(params?: {

    /**
     * Filters to apply
     */
    body?: UserLogin
  }): Observable<StrictHttpResponse<StringApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TokenService.AuthenticationPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
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
   * To access the full response (for headers, for example), `authentication$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authentication$Plain(params?: {

    /**
     * Filters to apply
     */
    body?: UserLogin
  }): Observable<StringApiResponse> {

    return this.authentication$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<StringApiResponse>) => r.body as StringApiResponse)
    );
  }

  /**
   * Retrieve Image Name.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authentication$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authentication$Json$Response(params?: {

    /**
     * Filters to apply
     */
    body?: UserLogin
  }): Observable<StrictHttpResponse<StringApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TokenService.AuthenticationPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
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
   * To access the full response (for headers, for example), `authentication$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authentication$Json(params?: {

    /**
     * Filters to apply
     */
    body?: UserLogin
  }): Observable<StringApiResponse> {

    return this.authentication$Json$Response(params).pipe(
      map((r: StrictHttpResponse<StringApiResponse>) => r.body as StringApiResponse)
    );
  }

}
