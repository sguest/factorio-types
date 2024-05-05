/** @noSelfInFile */
/** @noResolution */
declare module "noise" {
    interface tileProps {
        x: prototype.NoiseVariable,
        y: prototype.NoiseVariable,
        distance: prototype.NoiseExpression,
        tier: prototype.NoiseExpression,
    }

    interface mapProps {
        seed: prototype.NoiseVariable
        width: prototype.NoiseVariable
        height: prototype.NoiseVariable
        starting_area_radius: prototype.NoiseVariable
        segmentation_multiplier: prototype.NoiseVariable
        terrace_elevation_offset: prototype.NoiseVariable
        terrace_elevation_interval: prototype.NoiseVariable
        /**
         * Add this to your (presumably centered around 0) elevation to correct water coverage
         */
        wlc_elevation_offset: prototype.NoiseVariable
        /**
         * minimum elevation to be applied to areas outside the starting lake *after* the offset
         */
        wlc_elevation_minimum: prototype.NoiseVariable
        water_level: prototype.NoiseVariable
        finite_water_level: prototype.NoiseVariable
    }

    type NoiseOperand = prototype.NoiseExpression | number;

    /**
     * Emitted as overloaded operator - `noise.add(x, y)` becomes `x + y`
     */
    const add: LuaAddition<NoiseOperand, NoiseOperand, prototype.NoiseFunctionAdd>;
    /**
     * Emitted as overloaded operator - `noise.sub(x, y)` becomes `x - y`
     */
    const sub: LuaSubtraction<NoiseOperand, NoiseOperand, prototype.NoiseFunctionSubtract>;
    /**
     * Emitted as overloaded operator - `noise.mul(x, y)` becomes `x * y`
     */
    const mul: LuaMultiplication<NoiseOperand, NoiseOperand, prototype.NoiseFunctionMultiply>;
    /**
     * Emitted as overloaded operator - `noise.div(x, y)` becomes `x / y`
     */
    const div: LuaDivision<NoiseOperand, NoiseOperand, prototype.NoiseFunctionDivide>;
    /**
     * Emitted as overloaded operator - `noise.unm(x)` becomes `-x`
     */
    const unm: LuaNegation<NoiseOperand, prototype.NoiseFunctionSubtract>;
    /**
     * Emitted as overloaded operator - `noise.pow(x, y)` becomes `x ^ y`
     */
    const pow: LuaPower<NoiseOperand, NoiseOperand, prototype.NoiseFunctionExponentiate>;

    type NoiseNumberLike = prototype.NoiseNumber | number;

    /**
     * @customName var
     * @noSelf
     * This is named "var" in lua and will compile as such thanks to annotations. However, var is a reserved word in typescript
     */
    function var_get(name: prototype.NoiseVariable['variable_name']): prototype.NoiseVariable

    /**
     * 
     * @param level number of levels up *from the caller* we want to take our location from, defaulting to 1.
     */
    function csloc(level: number): { filename: string, line_number: number }

    /**
     * 'to noise expression'
     * turns simple values into noise expressions and adds a metatable so you can do arithmetic operations on noise expresssions
     */
    function to_noise_expression(v: any, sloc: string): prototype.NoiseExpression

    /**
     * Call this to...define a noise function using lua syntax.
     * Your lua function will be passed x, y, tile properties, and map properties.
     * The arguments are 'noise expression' objects to which arithmetic operations may be applied.
     */
    function define_noise_function(callback: (x: prototype.NoiseVariable, y: prototype.NoiseVariable, tileProps: tileProps, mapProps: mapProps) => void): prototype.NoiseExpression

    function clamp(v: NoiseNumberLike, min: NoiseNumberLike, max: NoiseNumberLike, sloc: string): prototype.NoiseFunctionClamp

    function compile_time_log(...args: NoiseNumberLike[]): prototype.NoiseFunctionCompileTimeLog

    /**
     * Useful for preventing tail-calls
     * because we want to not lose part of the stacktrace
     * in order that csloc() gives the desired result
     */
    function ident(x: prototype.NoiseExpression): prototype.NoiseExpression

    function min(...args: NoiseNumberLike[]): prototype.NoiseNumber

    function max(...args: NoiseNumberLike[]): prototype.NoiseNumber

    function ridge(v: NoiseNumberLike, min: NoiseNumberLike, max: NoiseNumberLike, sloc: string): prototype.NoiseFunctionRidge

    function terrace(v: NoiseNumberLike, offset: prototype.ConstantNoiseNumber, width: prototype.ConstantNoiseNumber, strength: NoiseNumberLike): prototype.NoiseFunctionTerrace

    /**
     * Terrace at elevations at which the game will place cliffs
     * if change in elevation is steep enough.
     * strength = 0: no-op; strength = 1: vertical slopes between terrace elevations
     */
    function terrace_for_cliffs(
        v: NoiseNumberLike,
        strength: NoiseNumberLike,
        map: {
            terrace_elevation_offset: prototype.NoiseVariable,
            terrace_elevation_interval: prototype.NoiseVariable
        }): prototype.NoiseExpression

    function make_array(list: any[]): prototype.NoiseExpression

    function make_point_list(list: any[]): prototype.NoiseArrayConstruction

    function distance_from(
        maximum_distance: prototype.ConstantNoiseNumber | undefined,
        points: prototype.NoiseArrayConstruction,
        x: NoiseNumberLike,
        y: NoiseNumberLike): prototype.NoiseFunctionDistanceFromNearestPoint

    function get_control_setting(name: string): prototype.NoiseExpression

    function absolute_value(val: NoiseNumberLike): prototype.NoiseFunctionAbsoluteValue

    function autoplace_probabililty(autoplace: prototype.NoiseLiteralObject): prototype.NoiseFunctionAutoplaceProbability

    function autoplace_richness(autoplace: prototype.NoiseLiteralObject): prototype.NoiseFunctionAutoplaceRichness

    function fraction(num: NoiseNumberLike, den: NoiseNumberLike): prototype.NoiseNumber

    function function_application(name: string, arguments: prototype.NoiseExpression[], sloc: string): prototype.NoiseFunctionApplication

    function if_else_chain(...arugments: prototype.NoiseExpression[]): prototype.NoiseIfElseChain

    function literal_expression(x: prototype.NoiseExpression): prototype.NoiseLiteralExpression

    function literal_object(val: prototype.AutoplaceSpecification): prototype.NoiseLiteralObject

    function literal_string(str: string, sloc: string): prototype.NoiseLiteralString

    function noise_layer_name_to_id(name: prototype.NoiseLiteralString): prototype.NoiseFunctionNoiseLayerNameToID

    function random(amplitude: prototype.ConstantNoiseNumber): prototype.NoiseFunctionRandomPenalty

    function random_between(lower: NoiseNumberLike, upper: NoiseNumberLike): prototype.NoiseFunctionRandomPenalty

    function random_penalty(source: NoiseNumberLike, random_penalty_amplitude: prototype.ConstantNoiseNumber, opts: prototype.RandomPenaltyArguments): prototype.NoiseFunctionRandomPenalty

    function delimit_procedure(expression: prototype.NoiseExpression): prototype.NoiseProcedureDelimiter

    function log2(power: NoiseNumberLike): prototype.NoiseFunctionLog2

    function fmod(lhs: NoiseNumberLike, rhs: NoiseNumberLike): prototype.NoiseFunctionModulo

    function floor(value: NoiseNumberLike): prototype.NoiseFunctionFloor

    function ceil(value: NoiseNumberLike): prototype.NoiseFunctionCeil

    function band(...arguments: NoiseNumberLike[]): prototype.NoiseFunctionBitwiseAnd

    function bor(...arguments: NoiseNumberLike[]): prototype.NoiseFunctionBitwiseOr

    function bxor(...arguments: NoiseNumberLike[]): prototype.NoiseFunctionBitwiseXor

    function bnot(...arguments: NoiseNumberLike[]): prototype.NoiseFunctionBitwiseNot

    function sin(value: NoiseNumberLike): prototype.NoiseFunctionSin

    function cos(value: NoiseNumberLike): prototype.NoiseFunctionCos

    function atan2(value: NoiseNumberLike): prototype.NoiseFunctionAtan2

    /**
     * This results in a number that is '0' for 'false' or '1' for 'true'.
     */
    function less_than(lhs: NoiseNumberLike, rhs: NoiseNumberLike): prototype.NoiseFunctionLessThan

    /**
     * This results in a number that is '0' for 'false' or '1' for 'true'.
     */
    function less_or_equal(lhs: NoiseNumberLike, rhs: NoiseNumberLike): prototype.NoiseFunctionLessOrEqual

    /**
     * This results in a number that is '0' for 'false' or '1' for 'true'.
     */
    function equals(lhs: NoiseNumberLike, rhs: NoiseNumberLike): prototype.NoiseFunctionEquals
}