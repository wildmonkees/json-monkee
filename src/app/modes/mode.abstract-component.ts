import { EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { UpdatedContent } from '../common/models/updated-content.model';
import { TableModeConfig } from '../common/models/config.model';

export abstract class ModeAbstractComponent implements OnChanges {

    @Input() public json?: any;
    @Output() public jsonChange: EventEmitter<UpdatedContent> = new EventEmitter<UpdatedContent>();

    public onJsonExternalUpdate(json: any): void {
        // nothing to do
    }

    public onConfigExternalUpdate(config: TableModeConfig): void {
        // nothing to do
    }

    public onJsonInternalUpdate(json: any): void {
        this.jsonChange.emit(new UpdatedContent(json, this));
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['json'] && changes['json'].currentValue) {
            setTimeout(() => this.onJsonExternalUpdate(changes['json'].currentValue));
        }
        if (changes['config'] && changes['config'].currentValue) {
            setTimeout(() => this.onConfigExternalUpdate(changes['config'].currentValue));
        }
    }
}
