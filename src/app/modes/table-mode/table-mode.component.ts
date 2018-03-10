import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModeConfig } from '../../common/models/config.model';
import { ModeComponent } from '../mode.component';

declare const JSONPath: any;


@Component({
    selector: 'table-mode',
    templateUrl: './table-mode.component.html',
    styleUrls: ['./table-mode.component.scss']
})
export class TableModeComponent extends ModeComponent {

    @Input() config: TableModeConfig;
    @Input() json?: any;
    @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();

    public getValue(jsonPath): string {
        return JSONPath({ path: jsonPath, json: this.json });
    }
}
