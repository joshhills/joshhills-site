import { createUseStyles } from "react-jss";
import { base } from "../../../css/base";
import colors from "../../../css/colors";
import { borderSize } from "../../../css/type";

export default createUseStyles({
    projectDetails: {
        margin: `${base(3)} ${base(2)} 0 ${base(2)}`,
        padding: base(2),
        border: `${borderSize}rem dashed ${colors.orange}`
    },
    title: {
        marginTop: base()
    }
})