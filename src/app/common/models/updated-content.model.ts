import { ModeAbstractComponent } from '../../modes/mode.abstract-component';

export class UpdatedContent {

    json: any;
    representationModeComponent: ModeAbstractComponent;

    constructor(json: any, representationModeComponent: ModeAbstractComponent) {
        this.json = json;
        this.representationModeComponent = representationModeComponent;
    }
}
