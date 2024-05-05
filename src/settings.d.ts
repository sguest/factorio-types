declare namespace settings {
    type settingType =
        /** This kind of seting is available in the prototype stage, and cannot be changed runtime. They have to be set to the same values for all players on a server.*/
        'startup' |
        /** This kind of setting is global to an entire save game and can be changed runtime. On servers, only admins can change these settings. */
        'runtime-global' |
        /** This kind of setting is only available runtime in the control.lua stage and each player has their own intance of this setting. When a player joins a server their local setting of "keep mod settings per save" determines if the local settings they have set are synced to the loaded save or if the save's settings are used. */
        'runtime-per-user'

    /**
     * The base type for all settings. Defines common values
     */
    interface SettingBase extends prototype.PrototypeBase {
        /**
         * The hidden property can be used to hide mod settings from GUIs, so that they cannot be seen or changed by players.
         * However, other mods can still access hidden settings.
         */
        hidden?: boolean
        /**
         * Determines the stage of game at which the setting is available and which tab it is shown in the mod settings menu.
         */
        setting_type: settingType
    }

    /**
     * A true/false checkbox
     */
    interface BoolSetting extends SettingBase {
        /**
         * Defines the default value of the setting, in this case whether the checkbox is checked or not.
         */
        default_value: boolean
        /**
         * Only loadoed if `hidden = true`. This forces the setting to be of this value. This can be useful for mod compatibility.
         */
        forced_value?: boolean
    }

    /**
     * A signed 64 bit integer textfield (or selection dropdown)
     */
    interface IntSetting extends SettingBase {
        /**
         * Defines the value of the setting.
         */
        default_value: number

        /**
         * Defines the lowest possible number.
         */
        minimum_value?: number

        /**
         * Defines the highest possible number.
         */
        maximum_value?: number

        /**
         * Makes it possible to force the player to choose between the defined numbers, creates a dropdown instead of a textfield.
         * If only one allowed value is given, the setting is forced to be of that value.
         */
        allowed_values?: number[]
    }

    /**
     * A double precision floating point textfield (or selection dropdown)
     */
    interface DoubleSetting extends SettingBase {
        /**
         * Defines the value of the setting.
         */
        default_value: number

        /**
         * Defines the lowest possible number.
         */
        minimum_value?: number

        /**
         * Defines the highest possible number.
         */
        maximum_value?: number

        /**
         * Makes it possible to force the player to choose between the defined numbers, creates a dropdown instead of a textfield.
         * If only one allowed value is given, the setting is forced to be of that value.
         */
        allowed_values?: number[]
    }

    /**
     * A string textfield (or selection dropdown)
     */
    interface StringSetting extends SettingBase {
        /**
         * Defines the default value of the setting.
         */
        default_value: string

        /**
         * Defines whether it's possible for the user to set the textfield to empty and apply the setting.
         */
        allow_blank?: boolean

        /**
         * Whether values that are input by the user should have whitespace removed from both ends of the string.
         */
        auto_trim?: boolean

        /**
         * Makes it possible to force the player to choose between the defined strings, creates a dropdown instead of a textfield. The strings in the dropdown can be localized (translated) and can have a tooltip
         * If only one allowed value is given, the setting is forced to be of that value.
         */
        allowed_values?: string[]
    }

    /**
     * A color picker (sliders), with whole number textfields. Includes alpha.
     */
    interface ColorSetting extends SettingBase {
        /**
         * Defines the default value of the setting.
         */
        default_value: prototype.Color
    }

    type dataExtendType =
        ({ type: 'bool-setting' } & BoolSetting) |
        ({ type: 'int-setting' } & IntSetting) |
        ({ type: 'double-setting' } & DoubleSetting) |
        ({ type: 'string-setting' } & StringSetting) |
        ({ type: 'color-setting' } & ColorSetting)
}