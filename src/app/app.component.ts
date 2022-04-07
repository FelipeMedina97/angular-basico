import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1> {{saludo}} </h1> 
  `
})
export class AppComponent {
  
  saludo: string = "Hola";
}
