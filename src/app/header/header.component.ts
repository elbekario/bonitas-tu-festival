import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  open = false;
  options = ['home', 'promo', 'where', 'social', 'timetable', 'contact'];

  switchMenu() {
    this.open = !this.open;
  }

  closeMenu() {
    this.open = false;
  }
}
