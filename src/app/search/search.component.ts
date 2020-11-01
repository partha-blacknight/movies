import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchval: string = '';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  isDark = true;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onChangeEvent(event: any){
    console.log(event.target.value);
    this.searchval = event.target.value;
  }

  searchMovies(event: any){
    this.router.navigate(['search'], {
      state: { example: this.searchval }
    });
  }

}
