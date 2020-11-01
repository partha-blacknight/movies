import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private REST_API_SERVER = "https://api.themoviedb.org/3/movie/";
  private REST_API_KEY = "1331d781dabc774aa7a72136c2baf243";
  private REST_API_SERVER_TAIL = "&language=en-US";
  private final_url = "";

  constructor(private httpClient: HttpClient) { }

  public loadDetailOfMovie(movieId){
    this.final_url = this.REST_API_SERVER +movieId+"?api_key="+this.REST_API_KEY+this.REST_API_SERVER_TAIL;
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
