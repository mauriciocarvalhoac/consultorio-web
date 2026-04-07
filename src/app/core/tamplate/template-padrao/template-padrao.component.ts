import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgIf } from "../../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-template-padrao',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './template-padrao.component.html',
  styleUrl: './template-padrao.component.scss'
})
export class TemplatePadraoComponent {
  isMenuVisible = signal(false);

  toggleMenu() {
    this.isMenuVisible.update(v => !v);
    console.log("Visible", this.isMenuVisible()) // Alterna entre true e false
  }

}
