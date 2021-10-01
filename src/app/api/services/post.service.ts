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

import { PostDto } from '../models/post-dto';
import { PostDtoIEnumerableApiResponse } from '../models/post-dto-i-enumerable-api-response';

@Injectable({
  providedIn: 'root',
})
export class PostService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getPosts
   */
  static readonly GetPostsPath = '/api/Post';

  /**
   * Retrieve all posts.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts$Response(params?: {
    UserId?: number;
    Date?: string;
    Description?: string;
    PageSize?: number;
    PageNumber?: number;
  }): Observable<StrictHttpResponse<PostDtoIEnumerableApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, PostService.GetPostsPath, 'get');
    if (params) {
      rb.query('UserId', params.UserId, {});
      rb.query('Date', params.Date, {});
      rb.query('Description', params.Description, {});
      rb.query('PageSize', params.PageSize, {});
      rb.query('PageNumber', params.PageNumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PostDtoIEnumerableApiResponse>;
      })
    );
  }

  /**
   * Retrieve all posts.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosts(params?: {
    UserId?: number;
    Date?: string;
    Description?: string;
    PageSize?: number;
    PageNumber?: number;
  }): Observable<PostDtoIEnumerableApiResponse> {

    return this.getPosts$Response(params).pipe(
      map((r: StrictHttpResponse<PostDtoIEnumerableApiResponse>) => r.body as PostDtoIEnumerableApiResponse)
    );
  }

  /**
   * Path part for operation apiPostPut
   */
  static readonly ApiPostPutPath = '/api/Post';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPostPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPostPut$Response(params?: {
    id?: number;
    body?: PostDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostService.ApiPostPutPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiPostPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPostPut(params?: {
    id?: number;
    body?: PostDto
  }): Observable<void> {

    return this.apiPostPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPostPost
   */
  static readonly ApiPostPostPath = '/api/Post';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPostPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPostPost$Response(params?: {
    body?: PostDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostService.ApiPostPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiPostPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPostPost(params?: {
    body?: PostDto
  }): Observable<void> {

    return this.apiPostPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPostIdGet
   */
  static readonly ApiPostIdGetPath = '/api/Post/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPostIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPostIdGet$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostService.ApiPostIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiPostIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPostIdGet(params: {
    id: number;
  }): Observable<void> {

    return this.apiPostIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPostIdDelete
   */
  static readonly ApiPostIdDeletePath = '/api/Post/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPostIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPostIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostService.ApiPostIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiPostIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPostIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiPostIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
