import image1 from './images/advt_percent.svg';
import image2 from './images/advt_house.svg';
import image3 from './images/advt_recycle.svg';
import './trustbar.css';
function Trust_bar() {
    return ( 
        <div className='trust_bar_container'>
          <div className='bar'>
            <img src={image1} className='trustbar_image_size'></img>
            <p className='bar1_p'>
              <h4 className='trust_bar_h4'>We Reward Loyal Customers</h4>
              Shop Now To Earn Discounts
            </p>
          </div>

          <div className='bar2'>
            <img src={image2} className='trustbar_image_size'></img>
            <p className='bar1_p'>
              <h4 className='trust_bar_h4'>Our Bestsellers</h4>
              Are made from recycled plastics
            </p>
          </div>

          <div className='bar'>
            <img src={image3} className='trustbar_image_size'></img>
            <p className='bar1_p'>
              <h4 className='trust_bar_h4'>We support circular economy</h4>
              By turning waste into products
            </p>
          </div>
        
        </div>
     );
}

export default Trust_bar;