import './shopcategory.css';
import category1_img from './images/black_composters.jpg';
import category2_img from './images/man_holding_green_tub.webp';
import category3_img from './images/water_butts.webp';
import category4_img from './images/composting_bins.jpg';

function Shop_category() {
    return ( 
        <div className="shop_category_main_container">
            <h2 className='category_heading'>Shop by category</h2>
            <div className="category_card_holder">
                <div className="card_holder1">
                    <a href=''>
                    <img src={category1_img} className='shop_category_images'></img>
                    <p className='category_p'>Bestselling compost Bins</p>
                    <p className='shop_now'>Shop Now</p>
                    </a>
                </div>
                <div className="card_holder2">
                    <a href=''>
                    <img src={category2_img} className='shop_category_images'></img>
                    <p className='category_p'>Composting Accessories</p>
                    <p className='shop_now'>Shop Now</p>
                    </a>
                </div>
                <div className="card_holder3">
                    <a href=''>
                     <img src={category3_img} className='shop_category_images'></img>
                     <p className='category_p'>Bestselling Water Butts</p>
                    <p className='shop_now'>Shop Now</p>
                     </a>
                </div>
                <div className="card_holder4">
                    <a href=''>
                    <img src={category4_img} className='shop_category_images'></img>
                    <p className='category_p'>Bokashi Composting Bins</p>
                    <p className='shop_now'>Shop Now</p>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Shop_category;