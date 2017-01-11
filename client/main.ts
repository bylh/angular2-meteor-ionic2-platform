'use strict';

// setup main bootstrap module
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule} from 'ionic-angular';
import { AccountsModule } from 'angular2-meteor-accounts-ui';

import Pipes from './imports/pipes/pipes';
import Widgets from './imports/widgets/widgets';
import Views from './imports/views/views';
import Services from './imports/services/services';
import {EntryComponent} from './imports/entry';

@NgModule({
    declarations: [
        ...Views,
        ...Widgets,
        ...Pipes,
        EntryComponent
    ],
    entryComponents: [...Views],
    imports: [
        AccountsModule,
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(EntryComponent, {
            tabsHideOnSubPages: 'true'
        })
    ],
    providers: [...Services],
    bootstrap: [IonicApp]
})
class AppModule {
}

// bootstrap
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {appReady} from './imports/extensions/utils'
appReady().then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
});
