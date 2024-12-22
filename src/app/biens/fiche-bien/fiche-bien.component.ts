import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fluid } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-fiche-bien',
  imports: [Fluid, CommonModule,InputTextModule],
  templateUrl: './fiche-bien.component.html',
  styleUrl: './fiche-bien.component.scss'
})
export class FicheBienComponent {

}
