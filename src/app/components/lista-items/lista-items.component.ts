import { Component, OnInit } from '@angular/core';
//Se importa el Servicio ItemService 
import { ItemService } from '../../services/item.service'

//Se importa el modelo Item para poder guardar los datos en un arreglo Item[]
import { Item } from '../../models/item'

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css'],
  //Se agrega el servicio ItemService para realizar las peticiones correspondientes a la api
  providers: [ItemService] 
})
export class ListaItemsComponent implements OnInit {

  constructor(public itemService: ItemService) { 
  }

  ngOnInit(): void {
    //Se ejecutan los métodos al iniciar el componente
    this.getItems();
    this.getTotal();
  }

  //Se llama al método getItems del servicio ItemService para obtener la lista de items
  getItems(){
    this.itemService.getItems()
    .subscribe((res: any) => {
      this.itemService.items = res as Item[];
      console.log(res)
    })
  }
  //Se llama al método getItems del servicio ItemService para obtener el total de cantidades de los items
  getTotal(){
    this.itemService.getItemsTotal()
    .subscribe((res: any) => {
      this.itemService.total = res;
    })
  }

}
