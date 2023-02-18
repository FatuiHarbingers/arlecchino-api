import { EmbedLimits } from '@sapphire/discord-utilities'
import { s } from '@sapphire/shapeshift'
import { InterwikiValidator, type MaybeError, SnowflakeValidator } from '../utils'

export interface ConfigurationsDELETERequest {
	wiki: string
}

export type ConfigurationsDELETEResponse = MaybeError<never | null>

export const ConfigurationsDELETEValidator = s.object<ConfigurationsDELETERequest>( {
	wiki: InterwikiValidator
} ).strict

export type ConfigurationsGETResponse = MaybeError<Array<{
	channel: string
	wiki: string
}>>

export interface ConfigurationPOSTRequest {
	channel: string
	update?: boolean
	wiki: string
}

export type ConfigurationPOSTResponse = MaybeError<ConfigurationPOSTRequest>

export const ConfigurationPOSTValidator = s.object<ConfigurationPOSTRequest>( {
	channel: SnowflakeValidator,
	update: s.boolean.default( false ),
	wiki: InterwikiValidator
} )
