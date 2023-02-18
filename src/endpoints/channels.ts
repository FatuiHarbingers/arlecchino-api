import type { APIChannel } from 'discord-api-types/v10'
import type { MaybeError } from '../utils'

export type ChannelsGETResponse = MaybeError<{
	channels: APIChannel[]
}>
