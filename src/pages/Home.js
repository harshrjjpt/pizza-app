import '../index.css';
import Products from './Products'

const Home = () => {
    return (
        <div>
        <div className="home-box">
            <div className="home-box-left">
                <p className='home-text'>Are you hungry?</p>
                <h1 className='home-title'>Don't wait !</h1>
                <button>Order Now</button>

            </div>
            <div className="home-box-right">
                <img alt="home-image" src="/images/main-pizza.png" />
            </div>
        </div>

        <div>
            <Products />

        </div>

        </div>
    )
    
}

export default Home;