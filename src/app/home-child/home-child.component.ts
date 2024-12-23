import { Component, OnInit } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { Ripple } from 'primeng/ripple';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

import {FicheBienComponent} from '../biens/fiche-bien/fiche-bien.component';

@Component({
  selector: 'app-home-child',

  imports: [FicheBienComponent,ButtonModule,StepperModule,Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, FieldsetModule,CommonModule,TabsModule],
  templateUrl: './home-child.component.html',
  styleUrl: './home-child.component.scss'
})
export class HomeChildComponent implements OnInit{
  items: MenuItem[] | undefined;
  activeStep: number = 1;


  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
          },
          {
              label: 'Projects',
              icon: 'pi pi-search',
              badge: '3',
              items: [
                  {
                      label: 'Core',
                      icon: 'pi pi-bolt',
                      shortcut: '⌘+S',
                  },
                  {
                      label: 'Blocks',
                      icon: 'pi pi-server',
                      shortcut: '⌘+B',
                  },
                  {
                      separator: true,
                  },
                  {
                      label: 'UI Kit',
                      icon: 'pi pi-pencil',
                      shortcut: '⌘+U',
                  },
              ],
          },
      ];
  }
}
