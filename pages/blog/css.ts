import { createUseStyles } from "react-jss";
import { base } from "../../css/base";

export default createUseStyles({
    page: {
        background: 'url(/images/backgrounds/minimap.svg) no-repeat center top'
    },
    cover: {
        padding: base(2)
    },
    grid: {
        display: 'grid',
        maxWidth: '1200px',
        margin: '0 auto',
        gridGap: base(),
        gridTemplateColumns: '1fr'
    }
})