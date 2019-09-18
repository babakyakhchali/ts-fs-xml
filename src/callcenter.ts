import { compileFile } from "pug";
/**
 * add this to callcenter.conf.xml
 * <X-PRE-PROCESS cmd="exec" data="wget T 10 -qO - http://localhost:3300/cc" />
 */

export interface ICallcenterTier {
    agent: string;
    queue: string;
}

export interface ICallcenterAgent {
    name: string;
}

export interface ICallcenterConf {
    settings: { name: string, value: string }[];
    queues: {
        name: string,
        params: { name: string, value: string }[];
    }[];
    agents: ICallcenterAgent[];
    tiers: ICallcenterTier[];
}
const template = compileFile('./views/cc.pug');
export function generateCallcenterConfigXml(data: ICallcenterConf) {
    return template(data);
}