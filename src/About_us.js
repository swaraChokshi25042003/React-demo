import './about_us.css';
import aboutus_img1 from './images/earth.svg';
import aboutus_img2 from './images/advt_house.svg';
import aboutus_img3 from './images/about_us_cycle.svg';
import aboutus_img4 from './images/carbon_footprints.svg';

function About_us() {
    return ( 
        <div className='about_us_main_container'>
            <p className='aboutus_title'>WHY EVENGREENR?</p>
            <h3 className='aboutus_h3'>For over 20 years we have innovated to create premium products that minimise your environmental footprint and benefit our planet.</h3>
            <div className='item_container'>
                <div className='aboutus_container'>
                    <img src={aboutus_img1} className='aboutus_img_size'></img>
                    <p className='aboutus_text1'>Supporting circular economy</p>
                    <p className='aboutus_text2'>Transforming waste into useful produce</p>
                </div>
                <div className='aboutus_container'>
                <img src={aboutus_img2} className='aboutus_img_size'></img>
                    <p className='aboutus_text1'>Manufactured in the UK</p>
                    <p className='aboutus_text2'>100% locally sourced recycled plastic</p>
                </div>
                <div className='aboutus_container'>
                <img src={aboutus_img3} className='aboutus_img_size'></img>
                    <p className='aboutus_text1'>Market leader for 20+ years</p>
                    <p className='aboutus_text2'>First-rate service and expertise</p>
                </div>
                <div className='aboutus_container'>
                <img src={aboutus_img4} className='aboutus_img_size'></img>
                    <p className='aboutus_text1'>Minimising carbon footprints</p>
                    <p className='aboutus_text2'>In the fight against climate change</p>
                </div>
            </div>
            <form>
                <input type='submit' id='about_us' value='ABOUT US'></input>
            </form>
        </div>
     );
}

export default About_us;