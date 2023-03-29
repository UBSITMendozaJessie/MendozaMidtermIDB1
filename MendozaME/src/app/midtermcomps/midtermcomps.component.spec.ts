import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidtermcompsComponent } from './midtermcomps.component';

describe('MidtermcompsComponent', () => {
  let component: MidtermcompsComponent;
  let fixture: ComponentFixture<MidtermcompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidtermcompsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidtermcompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
