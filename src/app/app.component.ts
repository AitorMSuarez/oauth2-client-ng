import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'oauth2client-ng';

  @ViewChild('menu') menu: MenuComponent;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe({
        next: (data) => {
          this.menu.getLogged();
        },
        error: (error) => {
          console.error('Error en la suscripción:', error);
        },
      });
  }
}
