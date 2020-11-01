import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  data$: any;
  public IMAGE_BASE_PATH: string = "";
  public movielist: any;

  constructor(public router: Router,
    private searchservice: SearchService) {
    this.IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w220_and_h330_face";
    this.data$ = this.router.getCurrentNavigation().extras.state;
    console.log(this.data$);
  }

  ngOnInit(): void {
    console.log(this.data$);
    this.searchMoviesByKeyword(this.data$.example);
  }

  private searchMoviesByKeyword(searchValue) {
    this.searchservice.searchMovies(searchValue)
      .subscribe((response: any) => {
        this.movielist = response.results;
        console.log(this.movielist);
      });
  }

  private getDetailMovie(movie){
    this.router.navigate(['/detail', { movieId: movie.id }]);
  }

}
