import { Component, OnInit } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { Router } from '@angular/router';
import { Ripple } from 'primeng/ripple';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-front-navbar',
  imports: [Ripple,RouterLink,Menubar,CommonModule,AvatarModule],
  templateUrl: './front-navbar.component.html',
  styleUrl: './front-navbar.component.scss'
})
export class FrontNavbarComponent  implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            route: '/home'
        },
        {
            label: 'Vendre',
            icon: 'pi pi-search',
            route: '/homeChild'
        },
        {
          label: 'Acheter',
          icon: 'pi pi-search',
        },
        {
          label: 'contact',
          icon: 'pi pi-search',
          route: '/home'
      },        
    ];
}
}
