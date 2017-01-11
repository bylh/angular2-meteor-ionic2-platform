'use strict';

import {ToastController, Toast} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class R3TToastService {
    toast: Toast;

    constructor(private toastController: ToastController) {
    }

    //TODO 连续两次点击两次登录，出现toast叠加情况，理想效果：连续点击，只显示最后一次点击出现的toast
    show(message: string) {
        this.destroy();
        this.toast = this.toastController.create({
            message: message,
            duration: 1500,
            position: 'middle',
            // showCloseButton: true,
            // closeButtonText: '关闭',
        });
        this.toast.present();
    }

    private destroy() {
        if (this.toast)
            this.toast.dismiss();
    }
}