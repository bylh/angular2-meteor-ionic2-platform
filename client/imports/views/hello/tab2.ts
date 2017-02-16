import {Component, ViewChild, AfterViewInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import template from './tab2.html';

@Component({
    template
})
export class Tab2Component implements AfterViewInit {
    @ViewChild('myTest') testP: any;
    isTruncated: boolean = false;
    buttonExist: boolean = false;

    constructor( public params: NavParams ) {
    }

    switchTruncatedState() {
        this.isTruncated = !this.isTruncated;
    }
    ionViewDidLoad() {
        if (this.testP.nativeElement.offsetHeight / 20 > 3) {
            this.isTruncated = true;
            this.buttonExist = true;
        }
        console.log('view' + this.testP.nativeElement.offsetHeight + " +++ " + this.testP.nativeElement.style.lineHeight);
    }

    ngAfterViewInit(): void {
        //this.testP.nativeElement.height;
        console.log(this.testP.nativeElement.offsetHeight + " +++ " + this.testP.nativeElement.style.lineHeight);
    }

    ngAfterViewChecked(): void {

    }

    ngAfterContentChecked(): void {
    }
}
