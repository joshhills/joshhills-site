import { buildConfig } from 'payload/config'
import dotenv from 'dotenv'
import Article from './collections/Article'
import Menu from './globals/Menu'
import SocialMedia from './globals/SocialMedia'
import { Page } from './collections/Page'
import Media from './collections/Media'
import Role from './collections/Role'

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
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