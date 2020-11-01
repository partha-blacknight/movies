import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowOnTvComponent } from './tv-show-on-tv.component';

describe('TvShowOnTvComponent', () => {
  let component: TvShowOnTvComponent;
  let fixture: ComponentFixture<TvShowOnTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowOnTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowOnTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
