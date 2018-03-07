import { Component, Input } from '@angular/core';
import { TreeModeConfig } from '../../common/models/config.model';
import { ModeComponent } from 'app/modes/mode.component';

@Component({
    selector: 'tree-mode',
    templateUrl: './tree-mode.component.html',
    styleUrls: ['./tree-mode.component.scss']
})
export class TreeModeComponent extends ModeComponent {

    @Input() config: TreeModeConfig;
    @Input() json?: any;

    public editorConfig = { 'mode': 'tree', 'indentation': 2 };

    public onJsonChanged() {
        // TODO
    }
}
