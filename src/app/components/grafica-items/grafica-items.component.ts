import { Component, OnInit } from '@angular/core';
//Se importa el servicio ItemService para obtener los datos de los items
import { ItemService } from '../../services/item.service';
//Se importan los componentes necesarios para generar la gráfica
import { ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-items',
  templateUrl: './grafica-items.component.html',
  styleUrls: ['./grafica-items.component.css'],
  //Se agrega el servicio ItemService para realizar las peticiones a la api
  providers: [ItemService] 
})
export class GraficaItemsComponent implements OnInit {

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    //Se ejecutan los siguientes métodos al iniciar el componente
    this.getPromedio();
    this.generarGrafica();
  }

  //Llama a la función getItemsPromedio del servicio ItemService
  getPromedio(){
    this.itemService.getItemsPromedio()
    .subscribe((res: any) => {
      this.itemService.promedio = res;
    })
  }

  //Obtiene la información de los items y los utiliza para generar la gráfica
  generarGrafica(){
    this.itemService.getItems()
    .subscribe((res: any) => {
      
      //Se crea un array con los nombres y precios de los items
      let precios = res.map(res => res.price);
      let nombres = res.map(res => res.name);

      //Se asignan los nombres a los labels de la gráfica y los precios a los datos de la gráfica
      this.barChartLabels = nombres;
      this.barChartData = [
        { data: precios, label: 'Precio'}
      ]

    })
  }

  //Propiedades de la gráfica
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);

  }

}
