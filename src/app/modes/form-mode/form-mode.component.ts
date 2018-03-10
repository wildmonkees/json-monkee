import { Component, Input } from '@angular/core';
import { FormModeConfig } from '../../common/models/config.model';
import { ModeAbstractComponent } from '../mode.abstract-component';

@Component({
    selector: 'form-mode',
    templateUrl: './form-mode.component.html',
    styleUrls: ['./form-mode.component.scss'],
    providers: [{ provide: ModeAbstractComponent, useExisting: FormModeComponent, multi: true }]
})
export class FormModeComponent extends ModeAbstractComponent {

    @Input() config: FormModeConfig;

}
