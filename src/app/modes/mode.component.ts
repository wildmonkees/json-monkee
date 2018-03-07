import { ModeConfig } from '../common/models/config.model';
import { OnChanges, SimpleChanges } from '@angular/core';

export abstract class ModeComponent implements OnChanges {

    config: ModeConfig;
    json?: any;

    public abstract onJsonChanged();

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['json'] && changes['json'].currentValue) {
            setTimeout(() => this.onJsonChanged());
        }
    }
}
