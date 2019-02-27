import { cdmAttributeContextType , ICdmObjectDef , ICdmObjectRef , resolveOptions } from '../internal';

export interface ICdmAttributeContext extends ICdmObjectDef {
    type: cdmAttributeContextType;
    parent?: ICdmObjectRef;
    definition?: ICdmObjectRef;
    getRelativePath(resOpt: resolveOptions): string;
    getContentRefs(): (ICdmObjectRef | ICdmAttributeContext)[];
}
