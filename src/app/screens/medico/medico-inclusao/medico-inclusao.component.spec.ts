import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoInclusaoComponent } from './medico-inclusao.component';

describe('MedicoInclusaoComponent', () => {
  let component: MedicoInclusaoComponent;
  let fixture: ComponentFixture<MedicoInclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoInclusaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoInclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
