import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchval: string = '';
  themeColor: 'primary' | 'accent' | 'warn' = 'primary'; 
  isDark = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
