import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbookComponent } from './searchbook.component';

describe('SearchbookComponent', () => {
  let component: SearchbookComponent;
  let fixture: ComponentFixture<SearchbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
