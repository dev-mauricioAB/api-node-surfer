import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isExpanded = true;

  showSubmenu = false;

  isShowing = false;

  showSubSubMenu = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        const valor = url.substring(url.indexOf('/app/') + '/app/'.length);

        if (valor === '') {
          this.router.navigateByUrl('app/beach-list');
        } else {
          // Ação caso exista algum valor após '/app/'
        }
      }
    });
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
