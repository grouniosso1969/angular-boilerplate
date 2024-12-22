import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDial } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import {CommonModule} from '@angular/common';
import {FrontNavbarComponent} from './navbar/front-navbar/front-navbar.component'

import { DrawerModule } from 'primeng/drawer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,CardModule,DrawerModule,CommonModule,FrontNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proj20';
  visible: boolean = false;
}
