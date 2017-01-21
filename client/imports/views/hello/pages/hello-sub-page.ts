import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";

@Component({
    template:`<ion-header>
  <ion-navbar>
    <ion-title>
     {{value}}
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content><button ion-button (click)="dismiss()">dismiss</button></ion-content> 
`
})
export class HelloSubPageComponent{
    subValue: string;
    //value: string;
    subData: string;
//     let items: Array<any> = [];
//     for (let imgInfo of imgInfos)
//     items.push({
//     src: imgInfo.photo,
//     w: imgInfo.w,
//     h: imgInfo.h,
//     loop: true,
// });
    constructor(public params: NavParams, public viewCtrl:ViewController){
        this.subValue = this.params.get('suValue');
        this.subData = this.params.get('subData');
    }
    dismiss() {
    }
}