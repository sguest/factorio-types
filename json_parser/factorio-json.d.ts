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

interface BaseConcept {
    name: string;
    order: number;
    description: string;
    notes?: string[];
    examples?: string[];
    see_also?: string[];
}

interface TableConcept extends BaseConcept {
    category: 'table';
    parameters: Parameter[];
    variant_parameter_groups?: ParameterGroup[];
    variant_parameter_description?: string;
}

interface TableOrArrayConcept extends BaseConcept {
    category: 'table_or_array';
    parameters: Parameter[];
}

interface EnumConcept extends BaseConcept {
    category: 'enum';
    options: BasicMember[];
}

interface FlagConcept extends BaseConcept {
    category: 'flag';
    options: BasicMember[];
}

interface UnionConcept extends BaseConcept {
    category: 'union';
    options: Array<{
        type: FactorioType,
        order: number,
        description: string,
    }>;
}

interface FilterConcept extends BaseConcept {
    category: 'filter';
    parameters: Parameter[];
    variant_parameter_groups?: ParameterGroup[];
    variant_parameter_description?: string;
}

interface StructConcept extends BaseConcept {
    category: 'struct';
    attributes: Attribute[];
}

interface UntypedConcept extends BaseConcept {
    category: 'concept';
}

type Concept = TableConcept | TableOrArrayConcept | EnumConcept | FlagConcept | UnionConcept | FilterConcept | StructConcept | UntypedConcept;

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

type FactorioType = string | VariantType | ArrayType | DictionaryType | FunctionType | LuaLazyLoadedValueType | TableType;

interface VariantType {
    complex_type: 'variant';
    options: FactorioType[];
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
    complex_type: 'table';
    parameters: Parameter[];
    variant_parameter_groups?: ParameterGroup[];
    variant_parameter_description?: string;
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
}