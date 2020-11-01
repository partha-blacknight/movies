import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MovielistComponent } from './movielist/movielist.component'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import {MatListModule} from '@angular/material/list'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { GridColsDirective } from './grid-cols.directive'; 
import {MatBadgeModule} from '@angular/material/badge';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PopularComponent } from './popular/popular.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { TvShowTopRatedComponent } from './tv-show-top-rated/tv-show-top-rated.component';
import { TvShowPopularComponent } from './tv-show-popular/tv-show-popular.component';
import { TvShowOnTvComponent } from './tv-show-on-tv/tv-show-on-tv.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailComponent } from './detail/detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovielistComponent,
    GridColsDirective,
    TopRatedComponent,
    UpcomingComponent,
    PopularComponent,
    TvShowListComponent,
    TvShowTopRatedComponent,
    TvShowPopularComponent,
    TvShowOnTvComponent,
    SearchResultComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
