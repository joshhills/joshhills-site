import { buildConfig } from 'payload/config';
import Media from './collections/Media';
import TodoLists from './collections/TodoLists';
import Users from './collections/Users';

console.log(process.cwd());
console.log(process.env['SITE_URL']);
console.log('ah');
require('dotenv').config();
console.log(process.env['SITE_URL']);

export default buildConfig({
  serverURL: process.env.SITE_URL,
  admin: {
    user: Users.slug,
  },
  routes: {
    admin: '/cms/admin',
    api: '/cms/api',
    graphQL: '/cms/api/graphql',
    graphQLPlayground: '/cms/api/graphql-playground'
  },
  collections: [
    TodoLists,
    Users,
    Media
  ],
});
