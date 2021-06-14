import './card-icon.styles.scss'

const CartItem = ({ item: { imageUrl, price, name}}) => (
  <div className="cart-item">
  <img src={imageUrl} alt="item" />
  <div className="item-details">
    
  </div>
  </div>
)