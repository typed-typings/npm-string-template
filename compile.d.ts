declare function compile (template: string, inline?: boolean): (...args: any[]) => string;

export = compile;
