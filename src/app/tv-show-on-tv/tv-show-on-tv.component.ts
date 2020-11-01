import { Component, OnInit, ViewChild } from '@angular/core';
import { TvshowService } from '../tvshow.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tv-show-on-tv',
  templateUrl: './tv-show-on-tv.component.html',
  styleUrls: ['./tv-show-on-tv.component.scss']
})
export class TvShowOnTvComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public onTvShow: any;
  public array: any;
  public displayedColumns = ['', '', '', '', ''];
  public totalOnTvShow: number = 0;
  public pageSize = 20;
  public currentPage = 1;
  public IMAGE_BASE_PATH: string = "";

  constructor(private tvshowservice: TvshowService) {
    this.IMAGE_BASE_PATH = "https://image.tmdb.org/t/p/w220_and_h330_face";
  }

  ngOnInit(): void {
    this.getOnTvShow(this.currentPage);  
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private getOnTvShow(pageNo) {
    this.tvshowservice.getOnTvShow(pageNo)
      .subscribe((response: any) => {
        this.onTvShow = response.results;
        this.onTvShow.paginator = this.paginator;
        this.array = response;
        this.totalOnTvShow = this.array.total_results;
        this.iterator();
      });
  }  
  
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.results.slice(start, end);
    this.getOnTvShow(this.currentPage);
  }

}
