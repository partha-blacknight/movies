import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { MovieserviceService } from '../movieservice.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public upcomingMovie: any;
  public array: any;
  public displayedColumns = ['', '', '', '', ''];
  public totalUpcomingMovie: number = 0;
  public pageSize = 20;
  public currentPage = 1;
  public IMAGE_BASE_PATH: string = "";

  constructor(private router: Router,
    private movieservice: MovieserviceService) {
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
    this.getUpcomingMovie(this.currentPage);
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iteratorUpcoming();
  }

  private getUpcomingMovie(pageNo) {
    this.movieservice.getUpcomingMovie(pageNo)
      .subscribe((response: any) => {
        this.upcomingMovie = response.results;
        this.upcomingMovie.paginator = this.paginator;
        this.array = response;
        this.totalUpcomingMovie = this.array.total_results;
        this.iteratorUpcoming();
      });
  }  

  private iteratorUpcoming() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.results.slice(start, end);
    this.getUpcomingMovie(this.currentPage);
  }

}
