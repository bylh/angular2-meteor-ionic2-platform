'use strict';
'use strict';

import {Component, NgZone} from '@angular/core';
import {MeteorComponent} from "angular2-meteor";
import {Tracker} from "meteor/tracker";
//noinspection TypeScriptCheckImport
import template from './hello.html';
import {NavController} from 'ionic-angular';
import { Meteor } from 'meteor/meteor'
import {Accounts} from "meteor/accounts-base";
import {Component, OnInit} from "@angular/core";
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import {HelloComponent} from './views/hello/hello';
import {R3TToastService} from './services/service-test';
@Component({
    template: '<ion-nav [root]="root"></ion-nav>'
})

export class EntryComponent extends MeteorComponent{
    root = HelloComponent;

    // ngOnInit(): void {
    // }
    constructor(private zone: NgZone,
                private toastService: R3TToastService) {
        super();

        this.autorun(() => {
            // if(!Accounts.validateLoginAttempt)
            // {
            //     console.log("登录过期if");
            // }
            // let _logout = Meteor.logout;
            // if(_logout){
            //     console.log("登录过期if");
            //     this.toastService.show('登录已过期');
            // }Meteor.loggingIn()

            Accounts.onLogin(function () {
                Meteor.logoutOtherClients(function (){
                    console.log("登录过期autorun");
                });

             });
             // Accounts.onlogout(function () {
             //     console.log('登出');
             // });
            // Accounts.loggingIn()
            this.zone.run(() => {

                //this.toastService.show('登录已过期');
                console.log("登录过期zone");

            });
        });

    }
}