import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogComponent }  from './blog.component';

@Component({
    moduleId:module.id,
    selector: 'blogitem',
  /*template: ` <p>Blog id is {{blog_id}}</p> `,*/
  templateUrl:'blogitem.component.html',

    
})

export class BlogitemComponent  { 
  constructor(private route:ActivatedRoute){}
  blog_id:any;

  ngOnInit(){
      this.blog_id = this.route.snapshot.params['id'];      
  }

}  