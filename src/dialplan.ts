import { compileFile } from 'pug';

export interface IDialplanExtension {
    name: string;
    conds: IDialplanCondition[];
}
export interface IDialplanCondition {
    field: string;
    exp: string;
    apps: IDialplanApp[];
}

export interface IDialplanContext {
    name: string;
    exts: IDialplanExtension[];
}

export interface IDialplanApp {
    app: string;
    data: string;
}

export interface IDialplanConf {
    ctxs: IDialplanContext[];
}

const template = compileFile('./views/dp.pug');

export function generateDialplanXml(conf: IDialplanConf) {
    return template(conf);
}