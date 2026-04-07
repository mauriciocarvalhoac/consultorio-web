import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoListagemComponent } from './medico-listagem.component';

describe('MedicoListagemComponent', () => {
  let component: MedicoListagemComponent;
  let fixture: ComponentFixture<MedicoListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoListagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
