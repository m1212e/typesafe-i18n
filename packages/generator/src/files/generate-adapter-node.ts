import { writeFileIfContainsChanges } from '../file-utils'
import { GeneratorConfigWithDefaultValues } from '../generate-files'

const getNodeUtils = ({ utilFileName, loadLocalesAsync, banner }: GeneratorConfigWithDefaultValues) => {
	return `// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
${banner}

import { i18nString, i18nObject${loadLocalesAsync ? '' : ', i18n'} } from './${utilFileName}';
${loadLocalesAsync
			? ''
			: `
const L = i18n()
`
		}
export { i18nString, i18nObject${loadLocalesAsync ? '' : ', L'} }
${loadLocalesAsync
			? ''
			: `
export default L
`
		}`
}

export const generateNodeAdapter = async (config: GeneratorConfigWithDefaultValues): Promise<void> => {
	const { outputPath } = config

	const nodeUtils = getNodeUtils(config)

	const fileName = config.adapterFileName || 'i18n-node'
	await writeFileIfContainsChanges(outputPath, fileName, nodeUtils)
}