import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DetailService} from '../detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  data$: any;
  public IMAGE_BASE_PATH: string = "";
  public movieDetail: any;

  constructor(public router: Router, public route: ActivatedRoute,
    private detailservice: DetailService) {
    this.IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w220_and_h330_face";
  }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('movieId');
    this.getMovieDetail(movieId);
  }

  private getMovieDetail(movieID) {
    this.detailservice.loadDetailOfMovie(movieID)
      .subscribe((response: any) => {
        this.movieDetail = response;
        console.log(this.movieDetail);
      });
  }

}
