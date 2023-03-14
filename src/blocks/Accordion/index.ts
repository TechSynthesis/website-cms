import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import link from '../../fields/link'
import richText from '../../fields/richText'

export const Accordion: Block = {
  slug: 'accordion',
  fields: [
    blockFields({
      name: 'accordionFields',
      fields: [
        richText(),
        {
          name: 'tabs',
          type: 'array',
          fields: [
            {
              name: 'tabTitle',
              type: 'text',
              required: true,
            },
            {
              name: 'accordion',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'answer',
                  type: 'richText',
                  required: true,
                },
                {
                  name: 'enableLink',
                  type: 'checkbox',
                },
                link({
                  disableLabel: true,
                  appearances: false,
                  overrides: {
                    admin: {
                      condition: (_, { enableLink }) => enableLink,
                    },
                  },
                }),
              ],
            },
          ],
        },
      ],
    }),
  ],
}
