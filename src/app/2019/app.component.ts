import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: '../main.component.html',
  styleUrls: ['../app.component.css'],
})
export class App2019Component {
  title = 'bonitas-tu-festival';
  lat = 51.678418;
  lng = 7.809007;
  background = '../assets/FondoBonitasTu.png';
  logo = '../assets/BonitasTuLogo2019.png';
  get video() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/O4zfnY1jp4w'
    );
  }
  date = '2 de ago - 4 de ago';
  schedule = '../assets/BonitasTuHorario.png';

  constructor(private readonly sanitizer: DomSanitizer) {}
}
