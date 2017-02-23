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

interface Item {
    title: string;
    content: string;
}
@Component({
    template
})

export class HelloComponent extends MeteorComponent {
    items: Item [];

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
            });
        });

    }

    logout() {
        Accounts.onLogin(function () {
            Meteor.logoutOtherClients();
            this.toastService.show('登录已过期');
        });
    }
    modalToPage(){
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
}
