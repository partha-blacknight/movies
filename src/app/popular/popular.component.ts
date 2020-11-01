import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { MovieserviceService } from '../movieservice.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public popularMovie: any;
  public array: any;
  public displayedColumns = ['', '', '', '', ''];
  public totalPopularMovie: number = 0;
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
    this.getPopularMovie(this.currentPage);
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iteratorPopular();
  }

  private getPopularMovie(pageNo) {
    this.movieservice.getPopularMovie(pageNo)
      .subscribe((response: any) => {
        this.popularMovie = response.results;
        this.popularMovie.paginator = this.paginator;
        this.array = response;
        this.totalPopularMovie = this.array.total_results;
        this.iteratorPopular();
      });
  }  

  private iteratorPopular() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.results.slice(start, end);
    this.getPopularMovie(this.currentPage);
  }

}
