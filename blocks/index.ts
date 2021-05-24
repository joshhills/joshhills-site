import { RichText, Component as richText } from './RichText'
import { Image, Component as image } from './Image'
import { Hero, Component as hero } from './Hero'
import { Button, Component as button } from './Button'
import { ArticleList, Component as articleList } from './ArticleList'
import { RoleList, Component as roleList } from './RoleList'
import { Inset, Component as inset } from './Inset'
import { ImageCarousel, Component as imageCarousel } from './ImageCarousel'

export const blocks = {
  Hero,
  RichText,
  Image,
  ImageCarousel,
  Button,
  ArticleList,
  RoleList,
  Inset
}

export const components = {
  hero,
  richText,
  image,
  imageCarousel,
  button,
  articleList,
  roleList,
  inset
}