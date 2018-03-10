import { Component, Input } from '@angular/core';
import { RawModeConfig } from '../../common/models/config.model';
import { ModeAbstractComponent } from '../mode.abstract-component';

@Component({
    selector: 'raw-mode',
    templateUrl: './raw-mode.component.html',
    styleUrls: ['./raw-mode.component.scss'],
    providers: [{ provide: ModeAbstractComponent, useExisting: RawModeComponent, multi: true }]
})
export class RawModeComponent extends ModeAbstractComponent {

    @Input() config: RawModeConfig;

    public editorConfig = { 'mode': 'code', 'indentation': 2 };
}
