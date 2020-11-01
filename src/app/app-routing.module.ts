import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './movielist/movielist.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PopularComponent } from './popular/popular.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { TvShowTopRatedComponent } from './tv-show-top-rated/tv-show-top-rated.component';
import { TvShowOnTvComponent } from './tv-show-on-tv/tv-show-on-tv.component';
import { TvShowPopularComponent } from './tv-show-popular/tv-show-popular.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/movielist', pathMatch: 'full' },
  { path: 'movielist', component: MovielistComponent },
  { path: 'top-rated', component: TopRatedComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'tvshowlist', component: TvShowListComponent },
  { path: 'top-rated-tvshow', component: TvShowTopRatedComponent },
  { path: 'on-tvshow', component: TvShowOnTvComponent },
  { path: 'popular-tvshow', component: TvShowPopularComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'detail/:movieId', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
