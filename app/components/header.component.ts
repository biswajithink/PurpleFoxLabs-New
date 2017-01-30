import { Component } from '@angular/core';
import * as JQuery from 'jquery';
@Component({
    moduleId:module.id,
  selector: 'header',
  /*template: `
    <a class="logo" routerLink="/"><img src="app/images/logo.png" alt="logo"></a>
    <!--<ul class="menuItem">
        <li *ngFor="let menu of menuItem" (click)="setMenu(menu)"><a routerLink="/{{Routes.path}}">{{menu}}</a></li>
    </ul>-->
   <!-- <input type="checkbox" id="checkbox-toggle">-->
    <label for="checkbox-toggle" class="toggle_menu">
        <span></span>
        <span></span>
        <span></span>
    </label>
    
    <ul class="menuItem" >
        <li routerLinkActive="active"><a routerLink="/home">Home</a></li>
        <li routerLinkActive="active"><a routerLink="/about">About</a></li>
        <li routerLinkActive="active"><a routerLink="/games">Games</a></li>
        <li routerLinkActive="active"><a routerLink="/blog">Blog</a></li>
        <li routerLinkActive="active"><a routerLink="/contact">Contact</a></li>
        <li class="fb_bg"><a href="https://www.facebook.com/purplefoxlabs/" target="_blank"><img src="app/images/menuFb.png"></a></li>
        <li class="tw_bg"><a href="https://twitter.com/purplefoxlabs" target="_blank"><img src="app/images/menuTwt.png"></a></li>
        <li class="yt_bg"><a href="#"><img src="app/images/menuYtb.png"></a></li>
    </ul>
    <div class="clear"></div>    
  `,*/
  templateUrl:'header.component.html'
})
export class HeaderComponent  {
    menuItem =['Home', 'About', 'Games', 'Blog', 'Contact'];
    /*public currentMenu;

    public setMenu = (menu) => {  
    if (this.currentMenu === menu) return;
    this.currcurrentMenuentPerson = menu;
    }*/
    
 
 }
 /*$(document).ready(function(){
    $(".toggle_menu").click(function(){
        //$("ul.menuItem").toggle(1000);
        $("ul.menuItem").slideToggle();
       //alert("k");
    });
    $("ul.menuItem:li").click(function(){
        $("ul.menuItem").slideToggle();
    })
});*/
