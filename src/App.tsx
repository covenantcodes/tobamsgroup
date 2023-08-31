import "./App.css";

function App() {
  return (
    <div>
      <div className="nav_bar">
        <div className="logo_container">
          <img src="../public/img/Logo.png" alt="" />
        </div>

        <ul className="nav_links_container">
          <li className="nav_links">Store</li>
          <li className="nav_links">About</li>
          <li className="nav_links">Contact</li>
          <li className="nav_links">Blog</li>
        </ul>

        <div className="search_bar">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" className="search_input" />
        </div>

        <div className="left_nav_items">
          <img src="../public/img/uk.png" alt="" className="uk_logo" />
          <img
            src="../public/img/shopping-cart.png"
            alt=""
            className="cart_icon"
          />

          <div className="user_box">
            <img src="../public/img/user.png" alt="" className="user_icon" />
          <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>

      <div className="contact_body">
          <div className="contact_container">
            
          </div>
      </div>
    </div>
  ); 
}

export default App;
