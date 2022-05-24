import "../index.css";
import Productscomponent from "../components/Productscomponent";

const Home = () => {
  return (
    <div>
      <div className="home-box">
        <div className="home-box-left">
          <p className="home-text">Are you hungry?</p>
          <h1 className="home-title">Don't wait !</h1>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dictum scelerisque tincidunt. Cras ullamcorper ultrices dolor, vitae
            porttitor nunc consectetur ut. Donec ut est vitae lorem dignissim
            fringilla. Vestibulum vel massa rutrum diam commodo finibus.
          </p>
          <button>Order Now</button>
        </div>
        <div className="home-box-right">
          <img alt="home-image" src="/images/main-pizza.png" />
        </div>
      </div>

      <div>
        <Productscomponent />
      </div>
    </div>
  );
};

export default Home;
