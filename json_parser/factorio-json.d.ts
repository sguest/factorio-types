interface ApiData {
    application: string;
    stage: 'runtime';
    application_version: string;
    api_version: number;
    classes: FactorioClass[];
    events: FactorioEvent[];
    defines: Define[];
    builtin_types: BuiltinType[];
    concepts: Concept[];
    global_objects: GlobalObject[];
    global_functions: Method[];
}

interface FactorioClass {
    name: string;
    order: number;
    description: string;
    notes?: string[];
    examples?: string[];
    see_also?: string[];
    methods?: Method[];
    attributes?: Attribute[];
    operators?: Array<Method | Attribute>;
    base_classes?: string[];
    // Currently ignored by the parser since factorio classes are being used as interfaces
    abstract?: boolean;
}

interface FactorioEvent {
    name: string;
    order: number;
    description: string;
    notes?: string[];
    examples?: string[];
    see_also?: string[];
    data: Parameter[];
}

interface Define {
    name: string;
    order: number;
    description: string;
    values?: BasicMember[];
    subkeys?: Define[];
}

interface BuiltinType {
    name: string;
    order: number;
    description: string;
}

interface Concept {
    name: string;
    order: number;
    description: string;
    notes?: string[];
    examples?: string[];
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

type FactorioType = string | UnionType | ArrayType | DictionaryType | FunctionType | LuaLazyLoadedValueType | TableType | LiteralType | TypeType | StructType;

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
    complex_type: 'struct';
    attributes: Attribute[];
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
    notes?: string[];
    examples?: string[];
    see_also?: string[];
    subclasses?: string[];
    parameters: Parameter[];
    variant_parameter_groups?: ParameterGroup[];
    variant_parameter_description?: string;
    variadic_type?: FactorioType;
    variadic_description?: string;
    takes_table: boolean;
    table_is_optional?: boolean;
    return_type?: FactorioType;
    return_description?: string;
}

interface Attribute {
    name: string;
    order: number;
    description: string;
    notes?: string[];
    examples?: string[];
    see_also?: string[];
    subclasses?: string[];
    type: FactorioType;
    read: boolean;
    write: boolean;
    optional: boolean;
}