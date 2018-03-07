import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { DemoRootComponent } from './demo-root.component';
import { JsonMonkeeModule } from '../json-monkee.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '**',
                component: DemoComponent
            }
        ]),
        JsonMonkeeModule
    ],
    declarations: [
        DemoRootComponent,
        DemoComponent
    ],
    bootstrap: [
        DemoRootComponent
    ]
})
export class DemoModule {
}
