'use strict';

import {Component, NgZone} from '@angular/core';
import {MeteorComponent} from "angular2-meteor";
import {Tracker} from "meteor/tracker";
//noinspection TypeScriptCheckImport

import template from './hello.html';
//noinspection TypeScriptCheckImport
import { AccountsCommon } from 'meteor/accounts-base'
import {NavController} from 'ionic-angular';
import { Meteor } from 'meteor/meteor'
import {Accounts} from "meteor/accounts-base";

import {R3TToastService} from "../../services/service-test";
interface Item {
    title: string;
    content: string;
}
@Component({
    template
})

export class HelloComponent extends MeteorComponent {
    items: Item [];
    test: any;


    //noinspection JSAnnotator
    constructor(private navController: NavController,
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

        // this.autorun(() => {
        //
        //     this.zone.run(() => {
        //         // if(!Meteor.user())
        //         //     console.log("登录过期if");
        //         Accounts.onLogin(function () {
        //             Meteor.logoutOtherClients(function (){
        //                 console.log("登录过期");
        //                 //this.toastService.show('登录已过期');
        //             });
        //         });
        //         //this.toastService.show('登录已过期');
        //
        //     });
        // });
    }

    logout() {
        AccountsCommon.onLogout(function () {
        });
        // Accounts.logout(function () {
        //     console.log('登出');
        // });
        //
        // this.toastService.show('登录已过期');
        // Accounts.onLogin(function () {
        //     Meteor.logoutOtherClients();
        // });
        //  Meteor.logoutOtherClients();
         Accounts.logoutOtherClients(function () {
             console.log('-------------');
             console.log(Accounts.logoutOtherClients());
             console.log('-------------');
         });

    }
}