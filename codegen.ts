import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: '<API ENDPOINT>',
  documents: 'graphql/**/*.graphql',
  generates: {
    'client.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        withHooks: true,
        dedupeFragments: true,
        fetcher: {
          endpoint: '<API ENDPOINT>',
          fetchParams: {
            headers: {
              'content-type': 'application/json',
            },
          },
        },
      },
    },
  },
}

export default config
