import {Component, ViewChild, AfterViewInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import template from './tab2.html';
//import Rx from 'meteor-rxjs';
// import { Observable} from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';
// import 'rxjs/add/operator/map'; // for example to add a specific operator
//
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import { of } from 'rxjs/observable/of';
// import { map } from 'rxjs/operator/map'
import {of} from 'rxjs/observable/of'
import {map} from 'rxjs/operator/map'
import {Observable, Observer, Subject} from 'rxjs'

@Component({
    template
})
export class Tab2Component implements AfterViewInit {
    @ViewChild('myTest') testP: any;
    constructor( public params: NavParams ) {
        // console.log(this.params.get('data1'));
        // var observable1 = Observable.interval(400);
        // var observable2 = Observable.interval(300);
        //
        // var subscription = observable1.subscribe(x => console.log('first: ' + x));
        // var childSubscription = observable2.subscribe(x => console.log('second: ' + x));
        //
        // subscription.add(childSubscription);
        //
        // setTimeout(() => {
        //     // 终止所有嵌套的Subscription
        //     subscription.unsubscribe();
        // }, 1000);
        //
        // var subject = new Subject();
        // subject.subscribe({
        //     next: (v) => console.log('observerA: ' + v)
        // });
        // subject.subscribe({
        //     next: (v) => console.log('observerB: ' + v)
        // });
        //
        // subject.next(1);
        // subject.next(2);
        // console.log('hello');

    }
    ngAfterViewInit(): void {
        //this.testP.nativeElement.height;
        console.log(this.testP.nativeElement.offsetHeight + " +++ " + this.testP.nativeElement.style.lineHeight);
    }
    test() {
        // let observable = Observable.create(function ( observer: any ) {
        //     observer.next(1);
        //     observer.next(2);
        //     observer.next(3);
        //     setTimeout(() => {
        //         observer.next(4);
        //         observer.complete();
        //     }, 1000);
        // });
        // console.log('just before subscribe');
        // observable.subscribe({
        //     next: x => console.log('got value ' + x),
        //     error: err => console.error('something wrong occurred: ' + err),
        //     complete: () => console.log('done'),
        // });
        // console.log('just after subscribe');
    }
}
