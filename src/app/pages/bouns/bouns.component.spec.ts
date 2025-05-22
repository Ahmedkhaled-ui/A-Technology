import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BounsComponent } from './bouns.component';

describe('BounsComponent', () => {
  let component: BounsComponent;
  let fixture: ComponentFixture<BounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BounsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
