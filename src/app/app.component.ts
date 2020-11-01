import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movielookup';

  constructor(private router: Router){}

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

  navigateTvMenu(tag){
    console.log(tag);
    if(tag === 'top-rated-tvshow'){
      this.router.navigate(['/top-rated-tvshow']);
    }else if(tag === 'on-tvshow'){
      this.router.navigate(['/on-tvshow']);
    }else if(tag === 'popular-tvshow'){
      this.router.navigate(['/popular-tvshow']);
    }
  }
}
