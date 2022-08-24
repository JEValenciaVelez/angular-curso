import { Component } from "@angular/core"; //importo el componente de angular







@Component({                          //decorador para la clase, me vincula los archivos
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})
export class heroeComponent {        //creo la clase de typescript y le doy atributo de exportacion para vincularla a los modulos.ts
nombre: string = 'Iron man';
edad  : number =  45;
                                     //dentro la clase van todas la propiedades y funciones q voy a ligar al component.html
get nombreCapitalizado (): string {
return this.nombre.toUpperCase();
}

obtenerNombre (): string {
return ` ${this.nombre} - ${this.edad}`;
}

cambiarNombre():void {  //defino un metodo cambiarNombre,void significa q no regresa nada la funcion
this.nombre = ' Spiderman ';
}

cambiarEdad(): void {
this.edad = 30;
}

}