import "./App.css";
import CustomButton from "./components/Button";

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
            <div className="header_text">
              Get in touch
              <br />
              <div className="header_text_description">
                Your Questions and Feedback Matter to Us - Reach Out, Let's
                Connect, and Explore Together to Ensure Your Rare Eat Fresh
                Experience Is Exceptional and Delightful.
              </div>
            </div>
          </div>

          <div className="textinput_container">
            <div className="name_input_box">
              <input
                type="text"
                placeholder="First Name"
                className="input_name"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input_name"
              />
            </div>

            <div className="name_input_box">
              <input
                type="text"
                placeholder="Email Address"
                className="input_email"
              />
            </div>
            <div className="name_input_box">
              {/* <input
                type="text"
                placeholder="Email Address"
                className="input_email"
              /> */}

              <textarea
                className="input_problem"
                placeholder="Describe your issues"
              />
            </div>
          </div>

          <CustomButton
            text="Send"
            backgroundColor="#F36F00"
            textColor="white"
            width="100%"
            borderRadius="32px"
            // textAlign="center"
          />
        </div>
      </div>

      <div className="newsletter_container">
        <div className="newsletter_container_header">
          Join Our Newsletter: Stay Connected, Savor Exclusives!
        </div>
        <div className="newsletter_container_description">
          Subscribe to our newsletter and be a part of the vibrant Rare Eat
          Fresh community. Stay connected with the latest updates, exclusive
          offers, and exciting promotions on rare West African food ingredients.
        </div>
        <div className="email_sub_container">
          <input
            type="text"
            placeholder="Email Address"
            className="sub_input"
          />
          <CustomButton
            text="Subscribe"
            backgroundColor="#F36F00"
            textColor="white"
            width="20%"
            borderRadius="32px"
          />
        </div>
      </div>

      <div className="footer">
        <div className="logo_box">
          <img src="../public/img/Logo.png" alt="" />
        </div>

        <div className="footer_box_container">
          <div className="footer_box">
            <div className="footer_head">Company</div>

            <div className="footer_items">About Us</div>

            <div className="footer_items">Store</div>

            <div className="footer_items">Blog</div>
          </div>

          <div className="footer_box">
            <div className="footer_head">Legal</div>

            <div className="footer_items">Term and Conditions</div>

            <div className="footer_items">Privacy Policy</div>

            <div className="footer_items">Shipping Policy</div>
            <div className="footer_items">Returns & Refunds</div>
            <div className="footer_items">Cookies</div>
          </div>

          <div className="footer_box">
            <div className="footer_head">Need Help?</div>

            <div className="footer_items">Track Order</div>

            <div className="footer_items">FAQ's</div>
          </div>

          <div className="footer_box">
            <div className="footer_head">Contact Us</div>

            <div className="footer_items">
              support@rareeatfresh.com <br /> 020 7205 4031 <br />International House,
              64 Nile Street, London, N1 7SR, United Kingdom
            </div>
            <div className="footer_social_container">
              <div className="footer_social_box">
                <i className="fa-brands fa-facebook-f footer_social_icon"></i>
              </div>

              <div className="footer_social_box">
                <i className="fa-brands fa-instagram footer_social_icon"></i>
              </div>

              <div className="footer_social_box">
                <i className="fa-brands fa-twitter footer_social_icon"></i>
              </div>

              <div className="footer_social_box">
                <i className="fa-brands fa-linkedin-in footer_social_icon"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="rights">
            Copyright © 2023 Rare Eat Fresh. All rights reserved.
        </div>

      </div>
    </div>
  );
}

export default App;
