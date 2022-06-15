import { createUseStyles } from "react-jss";
import { base } from "../../css/base";
import queries from "../../css/queries";

export default createUseStyles({
    page: {
        background: 'url(/images/backgrounds/minimap.svg) no-repeat center top'
    },
    cover: {
        padding: base(2),
        [queries.s]: {
            paddingLeft: base(0.5),
            paddingRight: base(0.5)
        }
    },
    grid: {
        display: 'grid',
        maxWidth: '1200px',
        margin: '0 auto',
        gridGap: base(),
        gridTemplateColumns: '1fr'
    },
    notFound: {
        padding: base(2),
        [queries.s]: {
            paddingLeft: base(0.5),
            paddingRight: base(0.5)
        },
        marginBottom: base(2)
    }
})