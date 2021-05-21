import { createUseStyles } from 'react-jss'
import { base } from '../../css/base'

export default createUseStyles({
    richText: {
        padding: base(2),
        '& :last-child': {
            paddingBottom: 0,
            marginBottom: 0
        }
    }
})