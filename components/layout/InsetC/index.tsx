import { Grid, Cell } from "@faceless-ui/css-grid"
import React from "react"
import { Type as BackgroundColorType } from '../../../fields/backgroundColor'
import GridContainer from "../GridContainer"
import useStyles from './css'

export type Props = {
    insetTop: boolean
    insetBottom: boolean
    backgroundColor: BackgroundColorType
    contentLeft: JSX.Element
    contentRight?: JSX.Element
}

const InsetC: React.FC<Props> = ({ insetTop, insetBottom, contentLeft, contentRight, backgroundColor }) => {
    
    const classes = useStyles()

    return (
        <div className={`${classes.inset} ${insetTop && classes.insetTop} ${insetBottom && classes.insetBottom} ${backgroundColor === 'light' && classes.light} ${backgroundColor === 'dark' && classes.dark}`}>
            <GridContainer>
                <Grid>
                    <Cell cols={8}>
                        {contentLeft}
                    </Cell>
                    <Cell cols={4}>
                        {contentRight}
                    </Cell>
                </Grid>
            </GridContainer>
        </div>
    )
}

export default InsetC