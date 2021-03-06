﻿import { Component, Input, EventEmitter, Output, QueryList, OnInit } from '@angular/core'

import { ButtonComponent } from '../button/button.component';
import { LockButtonComponent } from '../lockButton/lockButton.component';

@Component({
    selector: 'vgr-save-cancel',
    moduleId: module.id,
    templateUrl: './saveCancel.component.html'
})
export class SaveCancelComponent implements OnInit {
    @Input() unlocked: boolean;
    @Input() secondary: boolean;
    @Output() cancel = new EventEmitter();
    @Output() save = new EventEmitter();
    @Output() unlock = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onLockChanged(locked: boolean) {
        if (locked) {
            this.unlocked = false;
            this.save.emit();

        } else {
            this.unlocked = true;
            this.unlock.emit();
        }
    }

    onSave() {
        this.unlocked = false;
        this.save.emit();
    }

    onCancel() {
        this.unlocked = false;
        this.cancel.emit();
    }

}
