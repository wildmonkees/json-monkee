import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RawModeComponent } from './modes/raw-mode/raw-mode.component';
import { TreeModeComponent } from './modes/tree-mode/tree-mode.component';
import { TableModeComponent } from './modes/table-mode/table-mode.component';
import { FormModeComponent } from './modes/form-mode/form-mode.component';
import { JsonMonkeeComponent } from './json-monkee/json-monkee.component';
import { BrowserModule } from '@angular/platform-browser';
import { JsonEditorComponent } from './common/components/json-editor/json-editor.component';
import { OrArrayPipe } from './common/or-array.pipe';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        JsonMonkeeComponent,
        RawModeComponent,
        TreeModeComponent,
        TableModeComponent,
        FormModeComponent,
        JsonEditorComponent,
        OrArrayPipe
    ],
    exports: [
        JsonMonkeeComponent,
        JsonEditorComponent
    ],
    providers: []
})
export class JsonMonkeeModule {
}
