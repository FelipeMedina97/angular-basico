import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman","Goku","Hulk","Saitama"]
  heroeBorrado: string = '';
  state: boolean = false;

  borrarHeroe(){
   this.heroeBorrado = this.heroes.pop() || '';
   this.state = true;
     
   //console.log(heroeMov);
 }

 

 agregarHeroe(){
   this.heroes.push("Nuevo")
 }
}

