'use strict';

import {Component, NgZone} from '@angular/core';

//noinspection TypeScriptCheckImport
import template from './hello.html';
import {NavController} from 'ionic-angular';
interface Item {
    title: string;
    content: string;
}
@Component({
    template
})

export class HelloComponent {
    items: Item [];

   //noinspection JSAnnotator
    constructor(private navController: NavController, private zone: NgZone){
        this.items = [
            {title: '1',
                content:'123'},
            {title: '2',
                content:'123'},
            {title: '3',
                content:'123'},
            {title: '4',
                content:'123'},
            {title: '5',
                content:'123'},
        ];
    }
}