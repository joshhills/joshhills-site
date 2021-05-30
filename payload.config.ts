import { buildConfig } from 'payload/config'
import dotenv from 'dotenv'
import Article from './collections/Article'
import Menu from './globals/Menu'
import SocialMedia from './globals/SocialMedia'
import { Page } from './collections/Page'
import Media from './collections/Media'
import Role from './collections/Role'
import Logo from './components/admin/graphics/Logo'
import Icon from './components/admin/graphics/Icon'

dotenv.config();



export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    components: {
      graphics: {
        Icon: Icon,
        Logo: Logo
      }
    }
  },
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    }
  },
  collections: [
    Page,
    Article,
    Role,
    Media
  ],
  globals: [
    Menu,
    SocialMedia
  ]
})