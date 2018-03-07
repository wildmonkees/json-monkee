export interface JsonMonkeeConfig {

    raw?: RawModeConfig;
    tree?: TreeModeConfig;
    form?: FormModeConfig;
    table?: TableModeConfig;
}

export interface ModeConfig {
    enabled?: boolean;
    /**
     * indicates that the provided config can be altered or not
     */
    configReadonly: boolean;
    /**
     * indicates that the provided json content can be updated or not
     */
    contentReadonly: boolean;
}

export interface RawModeConfig extends ModeConfig {

}

export interface TreeModeConfig extends ModeConfig {

}

export interface FormModeConfig extends ModeConfig {

}

export interface ColumnConfig {
    title: string;
    jsonPath: string;
}

export interface TableModeConfig extends ModeConfig {
    columnConfigs: ColumnConfig[];
}
