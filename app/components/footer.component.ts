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
  validateEmail() {
              var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(this.loginForm.value.email);
      }

  constructor(public fb: FormBuilder) {}
  doLogin() {
    if(this.loginForm.value.email == undefined || this.loginForm.value.email == ""){
      console.log("this field can\'t be blank");
      document.getElementById('error').innerHTML="This field can\'t be blank";
    }
  else if(!this.validateEmail()){
   console.log("incorrect email format eg:'loremipsum@gmail.com'");
    document.getElementById('error').innerHTML="Incorrect email format eg:'loremipsum@gmail.com'";
  }
else{
    console.log(this.loginForm.value.email);
    document.getElementById('error').innerHTML="";
    }
        
   }
}