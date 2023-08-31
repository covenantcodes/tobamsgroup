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
        <div className="about_us">
          <img src="../public/img/Logo.png" alt="" className="logo_about" />
          <div className="about_text">
            RARE EAT FRESH represents a range of unique ingredients and the
            vibrancy of different Cultures, every product in the Rare Eat range
            has a story inspired by different Cultures
            <br />
            <span>020 7205 4031</span>
            <br />
            <span>support@rareeatfresh.com</span>
          </div>

          <div className="social_container">
            <div className="social_box">
              <i className="fa-brands fa-facebook-f social_icon"></i>
            </div>

            <div className="social_box">
              <i className="fa-brands fa-instagram social_icon"></i>
            </div>

            <div className="social_box">
              <i className="fa-brands fa-twitter social_icon"></i>
            </div>

            <div className="social_box">
              <i className="fa-brands fa-linkedin-in social_icon"></i>
            </div>
          </div>
        </div>
        <div className="contact_container">
          <div className="contact_header">
            <div className="header_text">Get in touch</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
