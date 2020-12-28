import { Component} from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  list: any=[];

  constructor(private router:Router, private ar:ActivatedRoute) {
    this.ar.queryParams.subscribe(() => {
      if(this.router.getCurrentNavigation().extras.state){
        this.list = this.router.getCurrentNavigation().extras.state.pedido;
        console.log(this.list)
      }
    })

  }


  ngOnInit(): void {
  }

  getDelect(item:any){
    this.list=this.list.filter(function(e){
      return e!=item;
    });
  }

  getSelectList(): any{
    let nav : NavigationExtras = {
      state: {pedido: this.list}
    }
    this.router.navigate(['/tabs/tab3'], nav)
    this.list = [];
  }
}
