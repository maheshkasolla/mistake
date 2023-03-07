// Write your code here.
import './index.css'
const Banner = props => {
  const {bannerDetails} = props
  const {headerText, description} = bannerDetails
  return (
    <li>
      <h1 className="heading">{headerText}</h1>
      <p className="paragraph">{description}</p>
    </li>
  )
}
export default Banner
