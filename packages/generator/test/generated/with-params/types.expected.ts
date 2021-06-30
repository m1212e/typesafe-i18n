// This types were auto-generated. Any manual changes will be overwritten.
/* eslint-disable */

import type { LocalizedString } from 'typesafe-i18n'

export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = {
	/**
	 * {0} apple{{s}}
	 * @param {string | number | boolean} 0
	 */
	'PARAM': RequiredParams1<'0'>
	/**
	 * {0} apple{{s}} and {1} banana{{s}}
	 * @param {string | number | boolean} 0
	 * @param {string | number | boolean} 1
	 */
	'PARAMS': RequiredParams2<'0', '1'>
}

export type TranslationFunctions = {
	/**
	 * {0} apple{{s}}
	 */
	'PARAM': (arg0: string | number | boolean) => LocalizedString
	/**
	 * {0} apple{{s}} and {1} banana{{s}}
	 */
	'PARAMS': (arg0: string | number | boolean, arg1: string | number | boolean) => LocalizedString
}

export type Formatters = {}


type Param<P extends string> = `{${P}}`

type Params1<P1 extends string> =
	`${string}${Param<P1>}${string}`

type Params2<P1 extends string, P2 extends string> =
	`${string}${Param<P1>}${string}${Param<P2>}${string}`

type RequiredParams1<P1 extends string> =
	| Params1<P1>

type RequiredParams2<P1 extends string, P2 extends string> =
	| Params2<P1, P2>
	| Params2<P2, P1>