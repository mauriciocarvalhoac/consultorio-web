import { Component, inject, OnInit } from '@angular/core';
import { NgxMaskDirective } from "ngx-mask";
import { RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { MedicoService } from '../../../services/medico.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medico-listagem',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective, RouterLink, ɵInternalFormsSharedModule],
  templateUrl: './medico-listagem.component.html',
  styleUrl: './medico-listagem.component.scss'
})
export class MedicoListagemComponent implements OnInit {
  formulario!: FormGroup;
  fb = inject(FormBuilder);
  // service = inject(MedicoService);
  lista!: any[]

  constructor(private service: MedicoService) {

  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: [null],
      cpf: [null,]
    });
    this.listar();
  }

  listar() {
    this.service.listar().subscribe({
      next: (lista: any[]) => {
        this.lista = lista;
      },
      error: (e: any) => {

      },
    });
  }

  filtrar() {
    if (this.formulario.valid)

      this.service.filtrar(this.formulario.value).subscribe({
        next: (value: any[]) => {
          this.lista = value;
        },

        error(err: any) {

        },
      });
  }

}
