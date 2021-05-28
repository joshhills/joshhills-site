import React from "react"
import { Type as BackgroundColorType } from '../../../fields/backgroundColor'
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
            <div className={classes.grid}>
                <div>
                    {contentLeft}
                </div>
                <div>
                    {contentRight}
                </div>
            </div>
        </div>
    )
}

export default InsetC