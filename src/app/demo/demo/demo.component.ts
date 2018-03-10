import { Component } from '@angular/core';
import { JsonMonkeeConfig } from '../../common/models/config.model';

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

    public active: boolean;
    public loadedConfig: JsonMonkeeConfig;
    public config: JsonMonkeeConfig = {
        raw: {
            configReadonly: true,
            contentReadonly: false
        },
        tree: {
            configReadonly: true,
            contentReadonly: false
        },
        table: {
            configReadonly: true,
            contentReadonly: false,
            columnConfigs: [
                { title: 'first name', jsonPath: '$.firstName' },
                { title: 'last name', jsonPath: '$.lastName' },
                { title: 'mobile phone', jsonPath: '$.phones.mobile' }
            ]
        }
    };

    public loadedJson: any;
    public json: any = [
        {
            firstName: 'Jean',
            lastName: 'Dupond',
            address: '225 Rue de la fraternité',
            zipCode: '75000',
            city: 'PARIS',
            country: 'FRANCE',
            phones: {
                mobile: '06 56 55 55 22'
            }
        },
        {
            firstName: 'Paul',
            lastName: 'Aster',
            address: '82 Avenue de Rome',
            zipCode: '75000',
            city: 'PARIS',
            country: 'FRANCE',
            phones: {
                mobile: '06 12 22 19 18'
            }
        }];

    public load(config, json) {
        this.active = false;
        setTimeout(() => {
            this.loadedConfig = config;
            this.loadedJson = json;
            this.active = true;
        });
    }
}

