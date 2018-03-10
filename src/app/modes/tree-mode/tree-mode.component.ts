import { Component, Input, ViewChild } from '@angular/core';
import { TreeModeConfig } from '../../common/models/config.model';
import { JsonEditorComponent } from '../../common/components/json-editor/json-editor.component';
import { ModeAbstractComponent } from '../mode.abstract-component';

@Component({
    selector: 'tree-mode',
    templateUrl: './tree-mode.component.html',
    styleUrls: ['./tree-mode.component.scss'],
    providers: [{ provide: ModeAbstractComponent, useExisting: TreeModeComponent, multi: true }]
})
export class TreeModeComponent extends ModeAbstractComponent {

    @Input() config: TreeModeConfig;
    @ViewChild('jsonEditor') jsonEditor: JsonEditorComponent;

    public editorConfig = { 'mode': 'tree', 'indentation': 2 };

    onJsonExternalUpdate(json: any): void {
        setTimeout(() => this.jsonEditor.expandAll());
    }
}
