import { s } from '@sapphire/shapeshift'
import { SnowflakeRegex } from '@sapphire/discord-utilities'

const InterwikiRegex = /^([a-z-]{2,5}\.)?[a-z0-9-]+$/

export const InterwikiValidator = s.string.regex( InterwikiRegex )

export const SnowflakeValidator = s.string.regex( SnowflakeRegex )

export type MaybeError<T> = T | {
	error: string
}

export enum ProfileType {
	DEFAULT,
	DISCUSSIONS,
	LOGEVENTS,
	RECENTCHANGES
}

export const ProfileTypeValidator = s.enum<ProfileType>( ProfileType.DEFAULT, ProfileType.DISCUSSIONS, ProfileType.LOGEVENTS, ProfileType.RECENTCHANGES )
