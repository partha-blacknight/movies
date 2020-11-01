import { Component, OnInit, ViewChild } from '@angular/core';
import { TvshowService } from '../tvshow.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tv-show-popular',
  templateUrl: './tv-show-popular.component.html',
  styleUrls: ['./tv-show-popular.component.scss']
})
export class TvShowPopularComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public popularTvShow: any;
  public array: any;
  public displayedColumns = ['', '', '', '', ''];
  public totalPopularTvShow: number = 0;
  public pageSize = 20;
  public currentPage = 1;
  public IMAGE_BASE_PATH: string = "";

  constructor(private tvshowservice: TvshowService) {
    this.IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w220_and_h330_face";
  }

  ngOnInit(): void {
    this.getPopularTvShow(this.currentPage);  
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private getPopularTvShow(pageNo) {
    this.tvshowservice.getPopularTvShow(pageNo)
      .subscribe((response: any) => {
        this.popularTvShow = response.results;
        this.popularTvShow.paginator = this.paginator;
        this.array = response;
        this.totalPopularTvShow = this.array.total_results;
        this.iterator();
      });
  }  
  
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.results.slice(start, end);
    this.getPopularTvShow(this.currentPage);
  }

}
