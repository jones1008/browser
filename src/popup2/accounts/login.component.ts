import * as template from './login.component.html';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToasterService } from 'angular2-toaster';
import { Angulartics2 } from 'angulartics2';

import { AuthService } from 'jslib/abstractions/auth.service';
import { I18nService } from 'jslib/abstractions/i18n.service';
import { SyncService } from 'jslib/abstractions/sync.service';

import { LoginComponent as BaseLoginComponent } from 'jslib/angular/components/login.component';

@Component({
    selector: 'app-login',
    template: template,
})
export class LoginComponent extends BaseLoginComponent {
    constructor(authService: AuthService, router: Router,
        analytics: Angulartics2, toasterService: ToasterService,
        i18nService: I18nService, syncService: SyncService) {
        super(authService, router, analytics, toasterService, i18nService, syncService);
    }

    settings() {
        this.router.navigate(['environment']);
    }
}