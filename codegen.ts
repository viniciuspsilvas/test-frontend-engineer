import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: 'http://localhost:3000/api/graphql',
   documents: ['src/**/*.ts'],
   generates: {
    './src/gql/': {
        preset: 'client',
        presetConfig: {
          fragmentMasking: false
    }
    }
 }
}
export default config