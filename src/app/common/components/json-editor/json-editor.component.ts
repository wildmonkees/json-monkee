import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

declare const JSONEditor: any;

@Component({
    selector: 'json-editor',
    templateUrl: './json-editor.component.html',
    styleUrls: ['./json-editor.component.scss']
})
export class JsonEditorComponent implements OnInit, OnChanges {

    @Input() config: any;
    @Input() json: any;
    @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();

    private editor: any;

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        this.initEditor();
    }

    private initEditor() {
        this.config.onChange = () => {
            try {
                this.jsonChange.emit(this.editor.get());
            } catch (e) {}
        };
        this.editor = new JSONEditor(this.elementRef.nativeElement, this.config);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['json'] && changes['json'].currentValue) {
            setTimeout(() => this.editor.set(this.json));
        }
    }

    public expandAll() {
        if (this.editor.expandAll) {
            setTimeout(() => this.editor.expandAll());
        }
    }
}
