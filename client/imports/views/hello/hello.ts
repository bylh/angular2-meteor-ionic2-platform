'use strict';

import {Component, NgZone} from '@angular/core';
import {MeteorComponent} from "angular2-meteor";
//noinspection TypeScriptCheckImport
import template from './hello.html';
import {NavController, ModalController} from 'ionic-angular';
import { Meteor } from 'meteor/meteor'
import {Accounts} from "meteor/accounts-base";
import {R3TToastService} from "../../services/service-test";
import {HelloPageComponent} from "./pages/hello-page";
import {HelloSubPageComponent} from "./pages/hello-sub-page";
import Rx from 'rxjs/Rx';
import {Observable, Observer, Subject} from 'rxjs'
interface Item {
    title: string;
    content: string;
}
@Component({
    template
})

export class HelloComponent extends MeteorComponent {
    items: Item [];


    //noinspection JSAnnotator
    constructor(private navController: NavController,
                private modalCtrl: ModalController,
                private zone: NgZone,
                private toastService: R3TToastService) {
        super();
        this.items = [
            {
                title: '1',
                content: '123'
            },
            {
                title: '2',
                content: '123'
            },
            {
                title: '3',
                content: '123'
            },
            {
                title: '4',
                content: '123'
            },
            {
                title: '5',
                content: '123'
            },
        ];

        this.autorun(() => {

            this.zone.run(() => {

                Accounts.onLogin(function () {
                    Meteor.logoutOtherClients(function (){

                        //this.toastService.show('登录已过期');
                    });
                });
                //this.toastService.show('登录已过期');

            });
        });

    }

    logout() {
        this.toastService.show('登录已过期');
        Accounts.onLogin(function () {
            Meteor.logoutOtherClients();
        });
        //Meteor.logoutOtherClients();
    }
    pushToHelloPage(){
        //this.navController.push(HelloPageComponent);
        let values: Array<any> = [];
        values.push('first--');
        values.push('second--');
        let profileModal = this.modalCtrl.create(HelloPageComponent, { values: values, data: values });
        profileModal.present();
    }
    pushToSubPage(){
        this.navController.push(HelloSubPageComponent);
    }
    changeTab(){
        this.navController.parent.select(1);
    }
    testrxjs(){
        // console.log('取消subscription的订阅');
        // subscription.unsubscribe();
        let x = document.getElementById("myHeader");
        console.log(x);
        let clickStream$: any;
        clickStream$ = Observable.create(function ( observer ) {
            x.addEventListener('click', function ( event ) {
                observer.next(event);
            }, false);
        });
        clickStream$.subscribe(ev => console.log(ev));

    }
}
/*--------------------merge------------------*/
// var observable1 = Observable.interval(1000);
// var observable2 = Observable.interval(500);
// var merged = Observable.merge(observable1, observable2);
// merged.subscribe(x => console.log(x));
/*--------------------merge------------------*/
/*----------------------------------------------------------*/
// setTimeout(() => {
//     let x = document.getElementById("myHeader");
//     console.log(x);
//     let clickStream$: any;
//     clickStream$ = Observable.create(function ( observer ) {
//         x.addEventListener('click', function ( event ) {
//             observer.next(event);
//         }, false);
//     });
//     clickStream$.subscribe(ev => console.log(ev));
//
// },3000);
/*----------------------------Operator------------------------------*/
    // //自定义函数
    // function multiplyByTen(input: any){
    //     var output = Observable.create(function ( observer: any ) {
    //         input.subscribe({
    //             next: (v: any) => observer.next(10*v),
    //             error: (err: any) => observer.error(err),
    //             complete: () => observer.complete()
    //         });
    //         });
    //     return output;
    // }
    // let input = Observable.from([1,2,3,4]);
    // let output = multiplyByTen(input);
    // output.subscribe((x: any) => console.log(x));


/*----------------------------Operator------------------------------*/
// setTimeout(() => {
//     let x = document.getElementById("myHeader");
//     console.log(x);
//     let clickStream$: any;
//     clickStream$ = Observable.create(function ( observer ) {
//         x.addEventListener('click', function ( event ) {
//             observer.next(event);
//         }, false);
//     });
//     clickStream$.subscribe(ev => console.log(ev));
//
// },3000);
/*----------------------------鼠标点击事件------------------------------*/

/*----------------------------Buffer----------------------------------
var clicks = Observable.fromEvent(document, 'click');
var interval = Observable.interval(1000);
var buffered = interval.buffer(clicks);
buffered.subscribe(x => console.log(x));
----------------------------Buffer----------------------------------*/


//----------------------------------
// var clicks = Observable.fromEvent(document, 'click');
// clicks.subscribe(x => console.log(x));
//--------------------------------
// var observable1 = Observable.interval(400);
// var observable2 = Observable.interval(300);
// var subscription = observable1.subscribe(x => console.log('first: ' + x));
// var childSubscription = observable2.subscribe(x => console.log('second: ' + x));
// subscription.add(childSubscription);
// setTimeout(() => {
//     subscription.remove(childSubscription);
// },5000);
// setTimeout(() => {
// // Unsubscribes BOTH subscription and childSubscription
//     subscription.unsubscribe();
// }, 10000);

//0~infinite------------------------------
// var observable = Observable.interval(1000);
// var subscription = observable.subscribe(x => console.log(x));
// -------------------------------
// var myObservable = Observable.create(function subscribe ( observe ) {
//     observe.next(1);
//     observe.next(2);
//     observe.next(3);
//     var id = setInterval(() => {
//         observe.next(4)
//      }, 1000);
//     return function unsubscribe() {
//         clearInterval(id);
//     }
// });
//var subscription = myObservable.subscribe(x => console.log(++x));

//----------------------------------
// var observable = Observable.create(function subscribe( observer ) {
//     var id = setInterval(() => {
//         observer.next('hi')
//     }, 1000);
// });

// observable.subscribe(x => console.log(x));
// console.log('hello');
//-------------------------------------------------------

// var button = document.querySelector('button');
// Observable.fromEvent(button, 'click')
//     .throttleTime(1000)
//     .scan(count => count, 0)
//     .subscribe(count => console.log(`Clicked ${count} times`));