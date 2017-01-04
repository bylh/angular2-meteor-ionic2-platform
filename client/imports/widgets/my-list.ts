import {Component, Input, OnInit} from "@angular/core";
//noinspection TypeScriptCheckImport
import template from './my-list.html'

interface Item {
    title: string;
    content: string;
}

@Component({
    selector: 'my-list',
    template: template
})

export class MyListComponent implements OnInit{
    @Input() items: Item[];
    constructor(){

    }
    ngOnInit() {
        if (this.items.length == 0)
            console.log('MyList: no item inside list');
        if (this.items.length >= 5)
            console.log('MyList: too many items inside list');
    }
}