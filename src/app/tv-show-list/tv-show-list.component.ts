import { Component, OnInit, ViewChild } from '@angular/core';
import { TvshowService } from '../tvshow.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.scss']
})
export class TvShowListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public topRatedTvShow: any;
  public array: any;
  public displayedColumns = ['', '', '', '', ''];
  public totalTopRateTvShow: number = 0;
  public pageSize = 20;
  public currentPage = 1;
  public IMAGE_BASE_PATH: string = "";

  constructor(private tvshowservice: TvshowService) {
    this.IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w220_and_h330_face";
  }

  ngOnInit(): void {
    this.getTopRatedTvShow(this.currentPage);  
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private getTopRatedTvShow(pageNo) {
    this.tvshowservice.getTopRatedTvShow(pageNo)
      .subscribe((response: any) => {
        this.topRatedTvShow = response.results;
        this.topRatedTvShow.paginator = this.paginator;
        this.array = response;
        this.totalTopRateTvShow = this.array.total_results;
        this.iterator();
      });
  }  
  
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.results.slice(start, end);
    this.getTopRatedTvShow(this.currentPage);
  }

}
