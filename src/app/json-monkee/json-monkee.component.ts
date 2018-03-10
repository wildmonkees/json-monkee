import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { JsonMonkeeConfig, ModeConfig } from '../common/models/config.model';
import { JsonMonkeeMode } from '../common/models/modes.model';
import { UpdatedContent } from '../common/models/updated-content.model';
import { ModeAbstractComponent } from '../modes/mode.abstract-component';

@Component({
    selector: 'json-monkee',
    templateUrl: './json-monkee.component.html',
    styleUrls: ['./json-monkee.component.scss']
})
export class JsonMonkeeComponent implements OnInit {

    @Input() config: JsonMonkeeConfig;
    @Input() json: any;
    @Output() configChange: EventEmitter<JsonMonkeeConfig> = new EventEmitter<JsonMonkeeConfig>();
    @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();
    @ViewChildren(ModeAbstractComponent) modeComponents: QueryList<ModeAbstractComponent>;

    public displayedMode: JsonMonkeeMode;
    private enabledConfigs: { mode: JsonMonkeeMode; config: ModeConfig }[];

    public display(mode: JsonMonkeeMode): void {
        this.displayedMode = mode;
    }

    public isDisplayed(mode: JsonMonkeeMode): boolean {
        return this.displayedMode === mode;
    }

    private getEnabledConfigs(): { mode: JsonMonkeeMode, config: ModeConfig }[] {
        return Object
            .getOwnPropertyNames(this.config)
            .map(key => key as JsonMonkeeMode)
            .filter(mode => this.config[mode] !== undefined && this.config[mode] !== null && this.config[mode].enabled !== false)
            .map(mode => {
                return { mode: mode, config: this.config[mode] };
            });
    }

    ngOnInit(): void {
        this.enabledConfigs = this.getEnabledConfigs();
        if (this.enabledConfigs.length > 0) {
            this.display(this.enabledConfigs[0].mode);
        }
    }

    public onJsonInternalUpdate(updatedContent: UpdatedContent) {
        this.jsonChange.emit(updatedContent.json);
        this.modeComponents
            .filter(component => component !== updatedContent.representationModeComponent)
            .forEach(component => {
                component.json = updatedContent.json;
                component.onJsonExternalUpdate(updatedContent.json);
            });
    }
}
