import type { MaybeError } from '../utils'

export type GuildsGETResponse = MaybeError<{
	exists: boolean
	limit: number
}>
