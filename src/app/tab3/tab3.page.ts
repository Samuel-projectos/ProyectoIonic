import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  list: any=[];

  constructor(private router:Router, private ar:ActivatedRoute) {

    this.ar.queryParams.subscribe(() => {
      if(this.router.getCurrentNavigation().extras.state){
        this.list = this.router.getCurrentNavigation().extras.state.pedido;
        console.log(this.list)
      }
    })

  }

}
