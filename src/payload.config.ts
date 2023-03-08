import formBuilder from '@payloadcms/plugin-form-builder'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import seo from '@payloadcms/plugin-seo'
import path from 'path'
import { buildConfig } from 'payload/config'

import { CaseStudies } from './collections/CaseStudies'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { ReusableContent } from './collections/ReusableContent'
import { Users } from './collections/Users'
import richText from './fields/richText'
import { Footer } from './globals/Footer'
import { MainMenu } from './globals/MainMenu'
import { Icon } from './graphics/Icon'
import { Logo } from './graphics/Logo'

export default buildConfig({
  collections: [CaseStudies, Media, Pages, Posts, ReusableContent, Users],
  globals: [Footer, MainMenu],
  graphQL: {
    disablePlaygroundInProduction: false,
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  plugins: [
    formBuilder({
      formOverrides: {
        fields: [
          richText({
            name: 'leader',
            label: 'Leader Text',
            admin: {
              elements: [],
            },
          }),
        ],
      },
    }),
    seo({
      collections: ['case-studies', 'pages', 'posts'],
      uploadsCollection: 'media',
    }),
    nestedDocs({
      collections: ['pages'],
      generateLabel: (_, doc) => doc.title as string,
      generateURL: docs => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
  ],
  cors: [
    process.env.PAYLOAD_PUBLIC_APP_URL,
    'https://techinverted.com',
    'https://cmw-dryice.com',
  ].filter(Boolean),
  admin: {
    meta: {
      titleSuffix: '- TechInverted CMS',
      favicon: '/assets/favicon.svg',
      ogImage: '/assets/logo.svg',
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
    webpack: config => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          react: path.resolve(__dirname, '../node_modules/react'),
          'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
          'react-router-dom': path.resolve(__dirname, '../node_modules/react-router-dom'),
        },
      },
    }),
  },
})
