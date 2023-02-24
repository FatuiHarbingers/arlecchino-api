import { s } from '@sapphire/shapeshift'
import { type MaybeError, SnowflakeValidator } from '../utils'

export interface FollowPOSTRequest {
	channel: string
}

export type FollowPOSTResponse = MaybeError<null | never>

export const FollowPOSTValidator = s.object<FollowPOSTRequest>( {
	channel: SnowflakeValidator
} )
