import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowPopularComponent } from './tv-show-popular.component';

describe('TvShowPopularComponent', () => {
  let component: TvShowPopularComponent;
  let fixture: ComponentFixture<TvShowPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowPopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
