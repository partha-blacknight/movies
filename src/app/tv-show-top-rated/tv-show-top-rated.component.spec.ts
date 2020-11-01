import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowTopRatedComponent } from './tv-show-top-rated.component';

describe('TvShowTopRatedComponent', () => {
  let component: TvShowTopRatedComponent;
  let fixture: ComponentFixture<TvShowTopRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowTopRatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
