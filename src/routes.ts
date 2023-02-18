export enum Routes {
	CHANNELS = 'channels/:guildId',
	CONFIGURATIONS = 'configurations/:guildId',
	GUILDS = 'guilds/:guildId',
	PROFILES = 'profiles/:guildId'
}

type Replacer<K extends string> = Record<K, string>

export function getRoute( route: Routes.CHANNELS | Routes.CONFIGURATIONS | Routes.GUILDS | Routes.PROFILES, replace: Replacer<'guildId'> ): string
export function getRoute( route: Routes, replace: Replacer<string> | undefined = undefined ): string {
	let result: string = route
	if ( replace ) {
		for ( const [ key, value ] of Object.entries( replace ) ) {
			result = result.replace( key, value )
		}
	}
	return result
}
