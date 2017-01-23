import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { FormsModule } from '@angular/forms';


//import { HomeComponent }  from './components/home.component';
//import { HeaderComponent }  from './components/header.component';
//import { FooterComponent }  from './components/footer.component';

@Component({
  selector: 'my-app',
  template: `<div class="container-fluid header_fluid"><header></header></div>
  <div class="container-fluid body_fluid"><router-outlet></router-outlet></div>
  <div class="container-fluid footer_fluid"><footer></footer></div>
  `,
})
export class AppComponent  { 
  
  private router: Router;
  itemdesc(id:number){
     console.log("itemdesc");
     
    this.router.navigate(['/BlogitemComponent', id]);
    }

 }
