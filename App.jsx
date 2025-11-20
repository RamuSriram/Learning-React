import React from "react";
import ReactDOM from "react-dom/client";

// Time to build some random food ordering website's frontend with React

// We have the following components
// Header - Logo & Nav Bar (Home, About Us, Cart)
// Body
//  - Search Box
//  - Restaurants Container
//      - Restaurant Cards (Restaurant Food Image, Name, Rating)
// Footer
//  - Address, Copyright, Contact Us

const resList = [
  {
    id: 1,
    name: "Bawarchi",
    cuisines: "Biryani, Hyderabadi",
    rating: "4.9 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/3b26ee3b-4107-43a4-be89-af1a23c28277_414835.JPG"
  },
  {
    id: 2,
    name: "KFC",
    cuisines: "Burgers, American",
    rating: "4.2 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/3b26ee3b-4107-43a4-be89-af1a23c28277_414835.JPG"
  },
  {
    id: 3,
    name: "Dominos",
    cuisines: "Pizza, Italian",
    rating: "4.5 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/3b26ee3b-4107-43a4-be89-af1a23c28277_414835.JPG"
  },
   {
    id: 4,
    name: "McDonald's",
    cuisines: "Burgers, Fast Food",
    rating: "4.3 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/3b26ee3b-4107-43a4-be89-af1a23c28277_414835.JPG"
  },
  {
    id: 5,
    name: "Pizza Hut",
    cuisines: "Pizza, Fast Food",
    rating: "4.1 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/3b26ee3b-4107-43a4-be89-af1a23c28277_414835.JPG"
  },
  {
    id: 6,
    name: "Burger King",
    cuisines: "Burgers, American",
    rating: "4.4 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG"
  },
  {
    id: 7,
    name: "Burger King",
    cuisines: "Burgers, American",
    rating: "4.4 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG"
  },
  {
    id: 8,
    name: "Burger King",
    cuisines: "Burgers, American",
    rating: "4.4 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG"
  },
  {
    id: 9,
    name: "Burger King",
    cuisines: "Burgers, American",
    rating: "4.4 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG"
  },
  {
    id: 10,
    name: "Burger King",
    cuisines: "Burgers, American",
    rating: "4.4 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG"
  },
  {
    id: 11,
    name: "Burger King",
    cuisines: "Burgers, American",
    rating: "4.4 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG"
  },
  {
    id: 12,
    name: "Burger King",
    cuisines: "Burgers, American",
    rating: "4.4 Stars",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG"
  }
];

const HeaderComponent = () => {
  return (
    <div className="header">
      <img
        className="logo"
        alt="Food Delivery App Logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
      />
      <ul className="navBar">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, rating, image } = resData;
    return (
        <div className="resCard">
            <img src={image} alt={name} />
            <div className="name"> {name} </div>
            <div className="cuisines"> {cuisines} </div>
            <div className="rating"> {rating} </div>
        </div>
    );
};

const BodyComponent = () => (
    <div className="body">
        <div className="searchContainer">
            <input className="searchBox" type="text" placeholder="Search for the restaurants!"/>
        </div>
        <div className="resContainer">
            {resList.map((restaurant) => (
                <RestaurantCard key={restaurant.id} resData={restaurant} />
            ))}
        </div>
    </div>
);

const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="address">
                <h3>Address</h3>
                <p>123 Food Street, Flavor Town, India</p>
            </div>
            <div className="copyright">
                <h3>Copyright</h3>
                <p>© 2025 Food Delivery App. All rights reserved.</p>
            </div>
            <div className="contact">
                <h3>Contact Us</h3>
                <p>Email: support@foodapp.com</p>
                <p>Phone: +91 1234567890</p>
            </div>
        </div>
    );
};

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
