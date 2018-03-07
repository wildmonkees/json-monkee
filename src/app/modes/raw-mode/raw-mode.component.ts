import { Component, Input } from '@angular/core';
import { RawModeConfig } from '../../common/models/config.model';
import { ModeComponent } from '../mode.component';

@Component({
    selector: 'raw-mode',
    templateUrl: './raw-mode.component.html',
    styleUrls: ['./raw-mode.component.scss']
})
export class RawModeComponent extends ModeComponent {

    @Input() config: RawModeConfig;
    @Input() json?: any;

    public editorConfig = { 'mode': 'code', 'indentation': 2 };

    public onJsonChanged() {
        // TODO
    }
}
