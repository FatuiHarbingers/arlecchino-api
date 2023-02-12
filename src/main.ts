import type { APIChannel } from 'discord-api-types/v10'
import { s } from '@sapphire/shapeshift'
import { EmbedLimits, SnowflakeRegex } from '@sapphire/discord-utilities'

const InterwikiRegex = /^([a-z-]{2,5}\.)?[a-z0-9-]+$/

export const InterwikiValidator = s.string.regex( InterwikiRegex )

export const SnowflakeValidator = s.string.regex( SnowflakeRegex )

export const enum Routes {
	CHANNELS = 'channels/:guildId',
	CONFIGURATION = 'configurations/:guildId',
	CONFIGURATIONS = 'configurations',
	GUILD = 'guilds/:guildId'
}

export type MaybeError<T> = T | {
	error: string
}

export type ChannelsGETResponse = MaybeError<{
	channels: APIChannel[]
}>

export interface ConfigurationsDELETERequest {
	guild: string
	wiki: string
}

export type ConfigurationsDELETEResponse = never

export const ConfigurationsDELETEValidator = s.object<ConfigurationsDELETERequest>( {
	guild: SnowflakeValidator,
	wiki: InterwikiValidator
} ).strict

export type ConfigurationsGETResponse = MaybeError<Array<{
	avatar?: string
	channel: string
	color?: number
	guild: string
	name?: string
	wiki: string
}>>

export interface ConfigurationPOSTRequest {
	avatar?: string
	channel: string
	color?: number
	guild: string
	name?: string
	update?: boolean
	wiki: string
}

export type ConfigurationPOSTResponse = MaybeError<ConfigurationPOSTRequest>

export const ConfigurationPOSTValidator = s.object<ConfigurationPOSTRequest>( {
	avatar: s.string.url().optional,
	channel: SnowflakeValidator,
	color: s.number.greaterThanOrEqual( 0 ).lessThanOrEqual( 0xffffff ).optional,
	guild: SnowflakeValidator,
	name: s.string.lengthGreaterThan( 0 ).lengthLessThanOrEqual( EmbedLimits.MaximumAuthorNameLength ).optional,
	update: s.boolean.default( false ),
	wiki: InterwikiValidator
} )

export type GuildGETResponse = MaybeError<{
	exists: boolean
	limit: number
}>
