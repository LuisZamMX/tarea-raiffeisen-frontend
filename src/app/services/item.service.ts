/*
Servicio ItemService: Para hacer las peticiones correspondientes a la api (backend)
*/
import { Injectable } from '@angular/core';
//Se importa el módulo HttpCLient necesario para realizar las peticiones mediante el protocolo http
import { HttpClient } from '@angular/common/http'
import { Item } from '../models//item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  //Se crea un arreglo del objeto Item para guardar los datos al llamar la lsita de items
  items: Item[];
  //Variable para guardar el valor del total de cantidades de los items
  total = '';
  //Variable para guardar el valor del promedio de los precios de los items
  promedio = 0;
  //Se guarda la URL de la api en una constante
  readonly URL_API = 'https://raiffeisen-web-back.herokuapp.com/api'

  constructor(private http: HttpClient) {
  }

  //Se llama al método para listar los items de la api
  getItems(){
    return this.http.get(`${this.URL_API}/items`);
  }

  //Se llama al método para obtener el total de las cantidades de la api
  getItemsTotal(){
    return this.http.get(`${this.URL_API}/total`);
  }

  //Se llama al método para obtener el promedio de precios de la api
  getItemsPromedio(){
    return this.http.get(`${this.URL_API}/promedio`);
  }

}
