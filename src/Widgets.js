import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

const Widgets = () => {
    const newArticle = (heading, subTitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subTitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newArticle("Violence flares in Haiti again", "Top news - 9078 readers")}
            {newArticle("Celebrities who used an app to find love", "Top news - 6335 readers")}
            {newArticle("Mars rover prepares to drill first rock sample", "science - 3129 readers")}
            {newArticle("North Korea's capital swelters in heatwave", "Weather - 1541 readers")}
            {newArticle("Tips for growing your hair out long", "Beauty - 2253 readers")}
        </div>
    )
}

export default Widgets
