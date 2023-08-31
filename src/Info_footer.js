import './index';
import pic1 from './images/facebook.png';
import pic2 from './images/insta.png';
import pic3 from './images/twitter.png';
import pic4 from './images/pintrest.png';

function Info_Footer() {
    return ( 
        <div className="footer1">
            <div className='heading1'>
                <h2>Join our EvenGreener<br></br> ecosystem</h2>
                <p className='text1'>Sign up for discounts, product updates, climate<br></br> positivity, sustainable lifestyle advice, and much more.</p>
                <form id='formemail'>
                    <input type='text'name="email" id='email' placeholder='Email Address'></input>
                    <input type='submit' name='subs' id='subscribe' value='SUBSCRIBE'></input>
                </form>
                <p><img src={pic1} id='facebook' />
                <img src={pic2} id='insta' />
                <img src={pic3} id='twitter'/>
                <img src={pic4} id='pintrest'/>

                </p>
                
            </div>
            <div className='heading2'>
                <h4>Become part of the climate solution</h4>
                <p className='text2'>We manufacture the UK's favourite composters,<br></br> recycling bins and water butts, making sustainable<br></br> living easier and more accessible than ever. Our<br></br> premium range of products crucially lower your<br></br> environmental footprint and are priceless in the fight<br></br> against climate change. Together we can make a<br></br> difference.</p>
                <a id='impact_link' href=''>OUR IMPACT</a>
            </div>
            
        </div>
     );
}

export default Info_Footer;