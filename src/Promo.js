import './promo.css';
import promo_img1 from './images/carrot_lady.webp';
import promo_img2 from './images/yellow_lady_smiling.webp';
import promo_img3 from './images/man_watering.webp';
function Promo() {
    return ( 
        <div className='promo_container'>
            <div className='promo_individual'>
                <a href=''>
                <img src={promo_img1} className='promo_images'></img>
                <p className='overlay'>
                    <h3>Become an expert!</h3>
                    <p className='overlay1'>
                        WITH OUT INFORMATIVE ARTICLES & FREE GUIDES!
                    </p>
                </p>
                </a>
            </div>
            <div className='promo_individual'>
                <a href=''>
                <img src={promo_img2} className='promo_images'></img>
                <p className='overlay'>
                    <h3>Discover EvenGreener</h3>
                    <p className='overlay1'>
                        LEARN MORE
                    </p>
                </p>
                </a>
            </div>
            <div className='promo_individual'>
                <a href=''>
                <img src={promo_img3} className='promo_images'></img>
                <p className='overlay'>
                    <h3>We Reward Our Loyal Customers</h3>
                    <p className='overlay1'>
                       SHOP TO EARN REWARDS!
                    </p>
                </p>
                </a>
            </div>
        </div>
     );
}

export default Promo;



