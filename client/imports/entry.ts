'use strict';

import {Component, OnInit} from "@angular/core";
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import {HelloComponent} from './views/hello/hello';
import {TabsComponent} from "./views/tabs";

@Component({
    template: '<ion-nav [root]="root"></ion-nav>'
})

export class EntryComponent implements OnInit {
    root = TabsComponent;

    ngOnInit(): void {
    }
}