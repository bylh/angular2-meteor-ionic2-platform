'use strict'
import {Component} from "@angular/core";
import {HelloComponent} from "./hello/hello";
import {Tab2Component} from "./hello/tab2";
import {Tab3Component} from "./hello/tab3";


// enum  TabIndex{
//     tab1 = 0,
//     tab2 = 2,
//     tab3 = 3
// }
@Component({
    template: `<ion-tabs #myTabs>
    <ion-tab [root]="tab1" [rootParams]="chatParams" tabIcon="heart"></ion-tab>
    <ion-tab [root]="tab2" tabIcon="star"></ion-tab>
    <ion-tab [root]="tab3" tabIcon="water"></ion-tab>
        </ion-tabs>`
})
export class TabsComponent {
    tab1 = HelloComponent;
    tab2 = Tab2Component;
    tab3 = Tab3Component;
    chatParams = {
        data1: "data1",
        data2: "data2"
    };
    constructor(){
    }
}