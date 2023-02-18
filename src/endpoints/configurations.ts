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
	avatar?: string
	channel: string
	color?: number
	name?: string
	update?: boolean
	wiki: string
}

export type ConfigurationPOSTResponse = MaybeError<ConfigurationPOSTRequest>

export const ConfigurationPOSTValidator = s.object<ConfigurationPOSTRequest>( {
	avatar: s.string.url().optional,
	channel: SnowflakeValidator,
	color: s.number.greaterThanOrEqual( 0 ).lessThanOrEqual( 0xffffff ).optional,
	name: s.string.lengthGreaterThan( 0 ).lengthLessThanOrEqual( EmbedLimits.MaximumAuthorNameLength ).optional,
	update: s.boolean.default( false ),
	wiki: InterwikiValidator
} )
