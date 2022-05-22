import './index.css'

const Header = () => (
  <>
    <div className="header-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="header-items">
        <ul className="header-navigating-items">
          <li className="header-item">Home</li>
          <li className="header-item">Products</li>
          <li className="header-item">Cart</li>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
        <button type="button" className="nav-button-icon-mobile-view">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-icon"
          />
        </button>
      </div>
    </div>
    <div className="header-navigating-items-mobile-view">
      <button type="button" className="nav-button-icon-mobile-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-icon"
        />
      </button>
      <button type="button" className="nav-button-icon-mobile-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-icon"
        />
      </button>

      <button type="button" className="nav-button-icon-mobile-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-icon"
        />
      </button>
    </div>
  </>
)

export default Header
