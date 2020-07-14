import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: '../main.component.html',
  styleUrls: ['../app.component.css'],
})
export class App2020Component {
  title = 'bonitas-tu-festival';
  lat = 51.678418;
  lng = 7.809007;
  background = '../assets/Fondo2020.png';
  logo = '../assets/BonitasTuLogo2020.png';
  get video() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/BvQ7vIguDXk'
    );
  }
  date = '24 de julio - 26 de julio';
  schedule = '../assets/comingsoon.png';

  constructor(private readonly sanitizer: DomSanitizer) {}
}
