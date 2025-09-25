import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Roles } from './components/roles/roles';
import { Master } from './components/roles/master/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_tutorial');
}
