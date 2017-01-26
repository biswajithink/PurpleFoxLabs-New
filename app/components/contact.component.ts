import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId:module.id,
    selector: 'contact',
  templateUrl: 'contact.component.html',
})
export class ContactComponent  { 

  public contactForm = this.fb.group({
    
    email: "",
    name:"",
    message:'',
   
  });

  validateEmail() {
              var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(this.contactForm.value.email);
      }

  constructor(public fb: FormBuilder) {}

  contactIn() {
    if(this.contactForm.value.email == undefined || this.contactForm.value.email == ""){
      console.log("this field can\'t be blank");
      document.getElementById('error').innerHTML="This field can\'t be blank";
    }
  else if(!this.validateEmail()){
   console.log("Incorrect email format eg:'loremipsum@gmail.com'");
    document.getElementById('error').innerHTML="Incorrect email format eg:'loremipsum@gmail.com'";
  }
else{
    console.log(this.contactForm.value.email);
    document.getElementById('error').innerHTML="";
    }
  }
 }



 