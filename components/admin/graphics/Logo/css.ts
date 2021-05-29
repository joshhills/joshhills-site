import { createUseStyles } from "react-jss";
import { base } from "../../../../css/base";

export default createUseStyles({
    logoWrapper: {
        textAlign: 'center',
        '& img': {
            margin: `0 auto ${base(2)} auto`
        }
    }
})