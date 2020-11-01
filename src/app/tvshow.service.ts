import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {
  private REST_API_SERVER = "https://api.themoviedb.org/3/tv/";
  private REST_API_KEY = "1331d781dabc774aa7a72136c2baf243";
  private REST_API_SERVER_TAIL = "&language=en-US&page=";
  private final_url = "";

  constructor(private httpClient: HttpClient) {}

  public getTopRatedTvShow(pageNo){
    this.final_url = this.REST_API_SERVER + "top_rated?api_key="+this.REST_API_KEY+this.REST_API_SERVER_TAIL+pageNo;
    return this.httpClient.get(this.final_url).pipe(retry(3), catchError(this.handleError));
  }

  public getOnTvShow(pageNo){
    this.final_url = this.REST_API_SERVER + "on_the_air?api_key="+this.REST_API_KEY+this.REST_API_SERVER_TAIL+pageNo;
    return this.httpClient.get(this.final_url).pipe(retry(3), catchError(this.handleError));
  }

  public getPopularTvShow(pageNo){
    this.final_url = this.REST_API_SERVER + "popular?api_key="+this.REST_API_KEY+this.REST_API_SERVER_TAIL+pageNo;
    return this.httpClient.get(this.final_url).pipe(retry(3), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
