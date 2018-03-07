import { Component } from '@angular/core';
import { JsonMonkeeConfig } from '../../common/models/config.model';

@Component({
    selector: 'demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

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
                { title: 'firstname', jsonPath: '$.firstName' },
                { title: 'lastName', jsonPath: '$.lastName' },
                { title: 'mobile phone', jsonPath: '$.phones.mobile' }
            ]
        }
    };

    public loadedJson: any;
    public json: any = {
        firstName: 'Elian',
        lastName: 'ORIOU',
        address: '225 Rue de la fraternité',
        zipCode: '75000',
        city: 'PARIS',
        country: 'FRANCE',
        phones: {
            mobile: '06 56 55 55 22'
        }
    };

    public load(config, json) {
        this.loadedConfig = config;
        this.loadedJson = json;
    }
}

