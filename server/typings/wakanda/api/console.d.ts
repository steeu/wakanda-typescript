interface Console {
    /**
     * writes message to the log file and the active debugger's console with the visual "ERROR" label
     */
    error(message?: any, ...optionalParams: any[]): void;
    /**
     * is identical to log( )
     */
    info(message?: any, ...optionalParams: any[]): void;
    /**
     * writes message to the log file and to the current debugger's console
     */
    log(message?: any, ...optionalParams: any[]): void;
    /**
     * writes message to the log file and the active debugger's console with the visual "WARNING" label
     */
    warn(message?: any, ...optionalParams: any[]): void;
}

declare var Console: {
    prototype: Console;
    new(): Console;
}