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
export class HelloPageComponent{
    values: Array<any> = [];
    //value: string;
    data: Array<any> = [];
    constructor(public params: NavParams, public viewCtrl:ViewController){
        this.values = this.params.get('values');
        this.data = this.params.get('data');
    }
    dismiss() {
        for(let value of this.values){
            console.log(value);
        }
        for(let data of this.data){
            console.log('data:'+data);
        }

        let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    }
}