import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();

    public editorConfig = { 'mode': 'tree', 'indentation': 2 };
}
