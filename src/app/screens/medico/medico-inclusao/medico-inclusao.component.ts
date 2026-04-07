import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-medico-inclusao',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './medico-inclusao.component.html',
  styleUrl: './medico-inclusao.component.scss'
})
export class MedicoInclusaoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: [null, Validators.required],
      cpf: [null],
      email: [null],
      telefone: [null],
    })
  }

}
