import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { MenuDescription } from '../blocks/MenuDescription'
import { MenuFeature } from '../blocks/MenuFeature'
import { MenuLink } from '../blocks/MenuLink'
import { MenuTitle } from '../blocks/MenuTitle'
import link from '../fields/link'

const menuColumnBlocks = [MenuTitle, MenuLink, MenuDescription, MenuFeature]

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        // {
        //   name: 'type',
        //   type: 'radio',
        //   defaultValue: 'link',
        //   admin: {
        //     layout: 'horizontal',
        //   },
        //   options: [
        //     {
        //       label: 'Link',
        //       value: 'link',
        //     },
        //     {
        //       label: 'Sub-menu',
        //       value: 'subMenu',
        //     },
        //   ],
        // },
        // {
        //   name: 'label',
        //   type: 'text',
        //   required: true,
        // },
        // {
        //   name: 'subMenu',
        //   label: false,
        //   type: 'group',
        //   admin: {
        //     condition: (_, { type } = {}) => type === 'subMenu',
        //   },
        //   fields: [
        //     {
        //       name: 'blocks',
        //       label: 'Menu Blocks',
        //       labels: {
        //         singular: 'Menu Block',
        //         plural: 'Menu Blocks',
        //       },
        //       type: 'blocks',
        //       blocks: menuColumnBlocks,
        //     },
        //   ],
        // },
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
// Might have to add the following to link
// link({
//   appearances: false,
//   disableLabel: true,
//   overrides: {
//     admin: {
//       condition: (_, { type }) => type === 'link',
//     },
//   },
// }),
