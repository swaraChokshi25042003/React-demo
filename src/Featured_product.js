import './featured_product.css';
import featured_img3 from './images/black_composter_single.webp';
import features_img1 from './images/white_gardner.png';
import features_img2 from './images/best_buy.png';
function Featured_product() {
    return ( 
        <div className='featured_main_container'>
           <div className='container1_featured'>
                <div>
                    <img src={features_img1} className='img1'></img>
                    <img src={features_img2} className='img2'></img>
                </div>
                <p className='fea_container1'>Voted the best 'BUDGET BUY'<br></br> in Gardeners' World<br></br> Magazine</p>
                <a href='' className='get_yours'>GET YOURS NOW
                </a>
            </div>
            
               <div className='parallax_container'>
                     <div class="parallax-image"></div>
            </div>

                
           
            <div className='con2'>
                <p className='fea_container_text1'>Blackwall 220 Litre Black Compost Converter.</p>
                <p className='fea_container_text2'>With 3+ million sold to date, this is the UK’s best<br></br>-selling compost bin, and for a reason. Expertly<br></br> designed for simple use, transform all organic waste<br></br> into nutritious, valuable feed to enrich your soil and<br></br> nurture your garden.</p>
                <a href=''>
                <input type='submit' value='SHOP PRODUCT' id='shop_product'></input>
            </a>
            </div> 

         
             
       
        </div>
     );
}

export default Featured_product;