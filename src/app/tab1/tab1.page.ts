import { Component} from '@angular/core';
import { ServiceService } from '../services/menu.service';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  initPlate: any=[];
  drinks: any=[];
  plateHouse: any=[];
  montadito: any=[];
  select: any=[]

  constructor(private menuService: ServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.getEntrantes();
    this.getBebidas();
    this.getMontaditos();
    this.getPlatos();
  }

  getEntrantes(): void{
    this.menuService.entrantes()
    .subscribe( response => {
      this.initPlate = response;
    },
    error => {
      console.log(error);
    }
    )
  }

  getBebidas(): void{
    this.menuService.bebidas()
    .subscribe( response => {
      this.drinks = response;
    },
    error => {
      console.log(error);
    }
    )
  }

  getPlatos(): void{
    this.menuService.platosDeLaCasa()
    .subscribe( response => {
      this.plateHouse = response;
    },
    error => {
      console.log(error);
    }
    )  }

  getMontaditos(): void{
    this.menuService.montaditos()
    .subscribe( response => {
      this.montadito = response;
    },
    error => {
      console.log(error);
    }
    )  }

    getSelect(item: any): void {
      this.select.push(item);
      console.log(this.select);
    }

    getSelectList(): any{
      let nav : NavigationExtras = {
        state: {pedido: this.select}
      }
      this.router.navigate(['/tabs/tab2'], nav)
      this.select = [];
    }
}
