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

        </div>
      </div>
    </div>
  );
}

export default App;
