import { Component, Input } from '@angular/core';
import { FormModeConfig } from '../../common/models/config.model';
import { ModeComponent } from '../mode.component';

@Component({
    selector: 'form-mode',
    templateUrl: './form-mode.component.html',
    styleUrls: ['./form-mode.component.scss']
})
export class FormModeComponent extends ModeComponent {

    @Input() config: FormModeConfig;
    @Input() json?: any;

    public onJsonChanged() {
        // TODO
    }
}
