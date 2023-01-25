import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina  = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) { 

    this.cargarInfo();   
    this.cargarEquipo(); 
  
  }

  private cargarInfo() {
      //Leer el archivo JSON
      this.http.get('../../assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        // console.log(resp);

      });
  }

  private cargarEquipo() {
    //Llamar al servicio web y sacar su informacion
    this.http.get('https://angular-html-b6bea-default-rtdb.firebaseio.com/equipo.json')
    .subscribe ( (respEquipo : any) => {
        this.equipo = respEquipo;
        // console.log(this.equipo);

    });

  }
}
