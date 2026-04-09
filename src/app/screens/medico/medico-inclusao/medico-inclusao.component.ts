import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { MedicoService } from '../../../services/medico.service';

@Component({
  selector: 'app-medico-inclusao',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective,],
  templateUrl: './medico-inclusao.component.html',
  styleUrl: './medico-inclusao.component.scss'
})
export class MedicoInclusaoComponent implements OnInit {
  formulario!: FormGroup;
  private serviceMedico = inject(MedicoService);

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: [null, Validators.required],
      cpf: [null],
      email: [null, Validators.email],
      telefone: [null],
    })
  }

  salvar() {
    if (this.formulario.valid) {
      console.log("Formulário:", this.formulario.value)
      this.serviceMedico.salvar(this.formulario.value).subscribe({
        next(value: any) {
          console.log("Valor", value)
        },
        error(err: any) {

        },
      });
    }
  }
}
