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
  public release_date: string;
  public release_year: string;

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
        let release_date = this.movieDetail.release_date;
        this.release_year = release_date.split('-')[0];
        this.monthConvert(this.movieDetail.release_date);
      });
  }

  private monthConvert(dates){
    let dt = parseInt(dates.split('-')[1]);
    let yr = dates.split('-')[0];
    let dat = dates.split('-')[2];
    let name = '';
    if(dt === 0){
      name = 'Jan';
    }else if(dt === 1){
      name = 'Jan';
    }else if(dt === 2){
      name = 'Jan';
    }else if(dt === 3){
      name = 'Feb';
    }else if(dt === 4){
      name = 'Mar';
    }else if(dt === 5){
      name = 'Apr';
    }else if(dt === 6){
      name = 'Jun';
    }else if(dt === 7){
      name = 'Jul';
    }else if(dt === 8){
      name = 'Aug';
    }else if(dt === 9){
      name = 'Sep';
    }else if(dt === 10){
      name = 'Oct';
    }else if(dt === 11){
      name = 'Nov';
    }else if(dt === 12){
      name = 'Dec';
    }
    let final = name + ' ' + dat + ',' + yr;
    this.release_date = final;
  }

}
