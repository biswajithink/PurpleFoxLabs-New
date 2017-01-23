import { Component } from '@angular/core';
import * as JQuery from 'jquery';

@Component({
    moduleId:module.id,
    selector: 'home',
    templateUrl:'home.component.html'
})
export class HomeComponent  { }

$(document).ready(function () {
        $("#image").attr("src", "app/images/gifbanner.gif?" + Math.random());
    });