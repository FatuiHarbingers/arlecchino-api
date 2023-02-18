import { EmbedLimits } from '@sapphire/discord-utilities'
import { s } from '@sapphire/shapeshift'
import { InterwikiValidator, type MaybeError, type ProfileType, ProfileTypeValidator } from '../utils'

export interface ProfilesDELETERequest {
	type: ProfileType
	wiki: string
}

export type ProfilesDELETEResponse = MaybeError<never | null>

export const ProfilesDELETEValidator = s.object<ProfilesDELETERequest>( {
	type: ProfileTypeValidator,
	wiki: InterwikiValidator
} )

export interface ProfilesGETRequest {
	type?: ProfileType
	wiki?: string
}

export type ProfilesGETResponse = MaybeError<Array<{
	avatar?: string
	color?: number
	name?: string
	type: ProfileType
}>>

export const ProfilesGETValidator = s.object<ProfilesGETRequest>( {
	type: ProfileTypeValidator,
	wiki: InterwikiValidator
} )

export interface ProfilesPOSTRequest {
	avatar?: string
	color?: number
	name?: string
	type: ProfileType
	wiki: string
}

export type ProfilesPOSTResponse = MaybeError<ProfilesPOSTRequest>

export const ProfilesPOSTValidator = s.object<ProfilesPOSTRequest>( {
	avatar: s.string.url().optional,
	color: s.number.greaterThanOrEqual( 0 ).lessThanOrEqual( 0xffffff ).optional,
	name: s.string.lengthGreaterThan( 0 ).lengthLessThanOrEqual( EmbedLimits.MaximumAuthorNameLength ).optional,
	type: ProfileTypeValidator,
	wiki: InterwikiValidator
} )
