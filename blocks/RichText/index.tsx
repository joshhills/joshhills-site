import React from 'react'
import serialize from './serialize'
import { Block } from 'payload/types'
import backgroundColor, { Type as BackgroundColorType } from "../../fields/backgroundColor"
import GridContainer from '../../components/layout/GridContainer'
import { Grid, Cell } from '@faceless-ui/css-grid'
import useStyles from './css'

export type Type = {
    blockType: 'richText'
    blockName?: string,
    backgroundColor?: BackgroundColorType
    content: unknown
}

export const RichText: Block = {
    slug: 'richText',
    labels: {
        singular: 'Rich Text',
        plural: 'Rich Text Blocks'
    },
    fields: [
        backgroundColor,
        {
            name: 'content',
            type: 'richText',
            label: 'Content',
            required: true
        }
    ]
}

export const Component: React.FC<Type> = ( { content } ) => {
  if (!content) {
    return null
  }

  const classes = useStyles()

  return (
    <GridContainer>
      <Grid>
        <Cell cols={12}>
          <div className={classes.richText}>
            {serialize(content)}
          </div>
        </Cell>
      </Grid>
    </GridContainer>
  )
}