import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { MovieserviceService } from '../movieservice.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public topRatedMovie: any;
  public array: any;
  public displayedColumns = ['', '', '', '', ''];
  public totalTopRateMovie: number = 0;
  public pageSize = 20;
  public currentPage = 1;
  public IMAGE_BASE_PATH: string = "";

  constructor(private router: Router,
    private movieservice: MovieserviceService){
      this.IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w220_and_h330_face";
    }

  navigateMenu(tag){
    console.log(tag);
    if(tag === 'top-rated'){
          this.router.navigate(['/top-rated']);
    }else if(tag === 'upcoming'){
      this.router.navigate(['/upcoming']);
    }else if(tag === 'popular'){
      this.router.navigate(['/popular']);
    }
  }

  ngOnInit(): void {
    this.getTopRatedMovie(this.currentPage); 
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private getTopRatedMovie(pageNo) {
    this.movieservice.getTopRatedMovie(pageNo)
      .subscribe((response: any) => {
        this.topRatedMovie = response.results;
        this.topRatedMovie.paginator = this.paginator;
        this.array = response;
        this.totalTopRateMovie = this.array.total_results;
        this.iterator();
      });
  }  

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.results.slice(start, end);
    this.getTopRatedMovie(this.currentPage);
  }

}
