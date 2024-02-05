import './index.css'

const ThumbnailItems = props => {
  const {eachThumbnailDetails, isMathThumbnailItem} = props
  const {imageUrl, id} = eachThumbnailDetails
  const onClickThumbnailItem = () => {
    isMathThumbnailItem(id)
  }
  return (
    <li>
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnailItem}
      >
        <img src={imageUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailItems
