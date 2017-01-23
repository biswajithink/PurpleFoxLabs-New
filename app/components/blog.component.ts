import { Component} from '@angular/core';

import { BlogitemComponent }  from './blogitem.component';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'blog',
    templateUrl: 'blog.component.html',    
})



export class BlogComponent { 
  private id: number;
  private router: Router;

 blogList:any = [
      {
      id: 1, 
      name: "Blog 1",
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      img:"app/images/home_item1.jpg",
      },
      {
        id: 2,
        name: 'Blog 2',
        desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        img:"app/images/home_item2.jpg",
      },
      {
        id: 3,
        name: 'Blog 3',
        desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        img:"app/images/home_item1.jpg",
      },
    ];

    
 }

 