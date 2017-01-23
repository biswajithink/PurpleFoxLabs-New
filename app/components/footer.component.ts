import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId:module.id,
  selector: 'footer',
  //template: `<p>Copyright All Reserved 2017</p>`,
  templateUrl:'footer.component.html'
})
export class FooterComponent  {
  public loginForm = this.fb.group({
    
    email: "",
   
  });

  constructor(public fb: FormBuilder) {}
  doLogin() {
    if(this.loginForm.value.email == undefined || this.loginForm.value.email == ""){
      console.log("this field cant be blank");
    }

else{
    console.log(this.loginForm.value.email);
    }
        
   }
}