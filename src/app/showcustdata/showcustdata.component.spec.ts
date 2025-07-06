import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcustdataComponent } from './showcustdata.component';

describe('ShowcustdataComponent', () => {
  let component: ShowcustdataComponent;
  let fixture: ComponentFixture<ShowcustdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcustdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcustdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
