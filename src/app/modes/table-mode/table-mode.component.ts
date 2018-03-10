import { Component, Input } from '@angular/core';
import { TableModeConfig } from '../../common/models/config.model';
import * as _ from 'lodash';
import { ModeAbstractComponent } from '../mode.abstract-component';

declare const JSONPath: any;

@Component({
    selector: 'table-mode',
    templateUrl: './table-mode.component.html',
    styleUrls: ['./table-mode.component.scss'],
    providers: [{ provide: ModeAbstractComponent, useExisting: TableModeComponent, multi: true }]
})
export class TableModeComponent extends ModeAbstractComponent {

    @Input() config: TableModeConfig;

    tableConfig: any;
    data: any;

    onJsonExternalUpdate(json: any): void {
        this.data = this.computeData(json, this.config);
    }

    onConfigExternalUpdate(config: TableModeConfig): void {
        this.tableConfig = this.buildTableConfig();
        this.data = this.computeData(this.json, config);
    }

    private buildTableConfig(): any {
        const tableConfig = { columns: {} };
        let columnId = 0;
        this.config.columnConfigs.forEach(columnConfig => {
            tableConfig.columns[columnId++] = { title: columnConfig.title };
        });
        return tableConfig;
    }

    private computeData(rawData: any, config: TableModeConfig) {
        if (!_.isArray(rawData)) {
            rawData = [rawData];
        }
        return rawData.map(row => {
            const rowData = {};
            let columnId = 0;
            config.columnConfigs.forEach(columnConfig => {
                rowData[columnId++] = this.getValue(row, columnConfig.jsonPath);
            });
            return rowData;
        });
    }

    private getValue(row: any, jsonPath: string): string {
        return JSONPath({ json: row, path: jsonPath });
    }
}
