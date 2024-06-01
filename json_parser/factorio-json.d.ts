interface ApiData {
    application: string;
    stage: string;
    api_version: number;
    application_version: string;
}

interface PrototypeData extends ApiData {
    stage: 'prototype';
    prototypes: FactorioPrototype[];
    types: FactorioPrototypeType[];
}

interface FactorioPrototype {
    name: string;
    order: number;
    description: string;
    examples: string[];
    parent: string;
    abstract: boolean;
    typename: string;
    deprecated: boolean;
    properties: Attribute[];
}

interface FactorioPrototypeType {
    name: string;
    order: number;
    description: string;
    examples: string[];
    parent: string;
    abstract: boolean;
    inline: boolean;
    type: FactorioType;
    properties: Attribute[];
}

interface RuntimeData extends ApiData{
    stage: 'runtime';
    classes: FactorioClass[];
    events: FactorioEvent[];
    defines: Define[];
    concepts: Concept[];
    global_objects: GlobalObject[];
    global_functions: Method[];
}

interface FactorioClass {
    name: string;
    order: number;
    description: string;
    examples?: string[];
    methods?: Method[];
    attributes?: Attribute[];
    operators?: Array<Method | Attribute>;
    parent?: string;
    // Currently ignored by the parser since factorio classes are being used as interfaces
    abstract?: boolean;
}

interface FactorioEvent {
    name: string;
    order: number;
    description: string;
    examples?: string[];
    data: Parameter[];
}

interface Define {
    name: string;
    order: number;
    description: string;
    values?: BasicMember[];
    subkeys?: Define[];
}

interface Concept {
    name: string;
    order: number;
    description: string;
    examples?: string[];
    lists?: string[];
    type: FactorioType;
}

interface GlobalObject {
    name: string;
    order: number;
    description: string;
    type: string;
}

interface BasicMember {
    name: string;
    order: number;
    description: string;
}

type FactorioType = string | UnionType | ArrayType | DictionaryType | FunctionType | LuaLazyLoadedValueType | TableType | LiteralType | TypeType | StructType | StructParentType | TupleType | BuiltinType;

interface UnionType {
    complex_type: 'union';
    options: Array<string | FactorioType>;
}

interface ArrayType {
    complex_type: 'array';
    value: FactorioType;
}

interface DictionaryType {
    complex_type: 'dictionary' | 'LuaCustomTable';
    key: FactorioType;
    value: FactorioType;
}

interface FunctionType {
    complex_type: 'function';
    parameters: FactorioType[];
}

interface LuaLazyLoadedValueType {
    complex_type: 'LuaLazyLoadedValue';
    value: FactorioType;
}

interface TableType {
    complex_type: 'table' | 'tuple';
    parameters: Parameter[];
    variant_parameter_groups?: ParameterGroup[];
    variant_parameter_description?: string;
}

interface TupleType {
    complex_type: 'tuple';
    values: FactorioType[];
}

interface StructParentType {
    complex_type: 'struct';
}

interface LiteralType {
    complex_type: 'literal';
    value: string | number | boolean;
    description?: string;
}

interface TypeType {
    complex_type: 'type';
    value: FactorioType;
    description: string;
}

interface StructType {
    complex_type: 'LuaStruct';
    attributes: Attribute[];
}

interface BuiltinType {
    complex_type: 'builtin';
}

interface Parameter {
    name: string;
    order: number;
    description: string;
    type: FactorioType;
    optional: boolean;
}

interface ParameterGroup {
    name: string;
    order: number;
    description: string;
    parameters: Parameter[];
}

interface Method {
    name: string;
    order: number;
    description: string;
    examples?: string[];
    lists?: string[];
    subclasses?: string[];
    parameters: Parameter[];
    variant_parameter_groups?: ParameterGroup[];
    variant_parameter_description?: string;
    variadic_parameter?: MethodVariadicParameter;
    format: MethodFormat;
    return_values: MethodReturnValue[];
}

interface MethodVariadicParameter {
    type: FactorioType;
    description?: string;
}

interface MethodFormat {
    takes_table: boolean;
}

interface MethodReturnValue {
    order: number;
    description: string;
    type: FactorioType;
    optional: boolean;
}

interface Attribute {
    name: string;
    order: number;
    description: string;
    examples?: string[];
    lists?: string[];
    subclasses?: string[];
    type: FactorioType;
    read: boolean;
    write: boolean;
    optional: boolean;
}