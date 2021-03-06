import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public topRatedMovie: any;
  public array: any;
  public displayedColumns = ['', '', '', '', ''];
  public totalTopRateMovie: number = 0;
  public pageSize = 20;
  public currentPage = 1;
  public IMAGE_BASE_PATH: string = "";

  constructor(private movieservice: MovieserviceService) {
    this.IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w220_and_h330_face";
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
