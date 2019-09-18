import { compileFile } from 'pug';
import { IFsVar } from '.';

//<!--<X-PRE-PROCESS cmd="exec" data="wget T 10 -qO - http://localhost:3300/dir" />-->

export interface IFsDomain {
    name: string;
    users: IFsDomainUser[];
    params: IFsVar[];
    vars: IFsVar[];
}
export interface IFsDomainUser {
    id: string;
    params: IFsVar[];
    vars: IFsVar[];
}
export interface IDirectoryConf {
    domains: IFsDomain[];
}

const template = compileFile('./views/dir.pug');

export function generateDirectoryXml(conf: IDirectoryConf) {
    return template(conf);
}
