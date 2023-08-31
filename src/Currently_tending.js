import './currently_trending.css';
import img1 from './images/women_gardening.jpg';
import img2 from './images/women_watering.jpeg';
import img3 from './images/flower.webp';


function Currently_trending() {
    return (  
        <>
         <div className="main_container">
            <div className='container1'>
                 <h2 className='container1_h2'>Currently Trending</h2>
                    Explore our brand-new gardening<br></br> accessories
                    <br></br>
                <input type='submit' id='shop_gardening' value="SHOP GARDENING"/>
                </div>
                <div className='container2'>
                <img src={img1} className='img_size'></img>
                    <div className='container2_div'>
                        Designed by Sophie Conran,the well-renowned British designer,this handmade Galvanized Trug is cra..
                        <hr className='hr_div'></hr>
                        <table className='container2_table'>
                            <tr>
                                <td className='container2_td'>CLASSIC DESIGN</td>
                                <td className='container2_td'>EASY GARDENING</td>
                                <td className='container2_td'>HANDMADE</td>
                            </tr>
                        </table>
                        <input type='submit' id='quickadd'
                        value='QUICK ADD'/>
                    </div>
                    
                    <div className='text_size'>Galvanized Tool Trug by Sophie Conran-Burgon & Ball<br></br><b>&#163;29.99</b></div>
                </div>
                <div className='container3'>
                <img src={img2} className='img_size1'></img>
                <div className='container3_div'>
                        The modern simple design of 0.7 liter recycled plastic mister in white by Elho is the key
                        <hr className='hr_div'></hr>
                        <table className='container2_table'>
                            <tr>
                                <td className='container2_td'>BEAUTIFUL GIFT</td>
                                <td className='container2_td'>MINIMALIST</td>
                                <td className='container2_td'>STYLISH</td>
                            </tr>
                        </table>
                        <input type='submit' id='quickadd'
                        value='QUICK ADD'/>
                    </div>
                    
                    <div className='text_size1'>Elho 0.7 Litre Mint Recycle Plastic Plant Mister<br></br><b>&#163;10.99</b><br></br>
                    <p className='con3'><a href='' className='con3_1'></a>
                    <a href='' className='con3_2'></a>
                    <a href='' className='con3_3'></a></p></div>
                </div>
                <div className='container4'>
                    <img src={img3} className='img_size2'></img>
                    <div className='container4_div'>
                    The Urbalive High Rise Beige Planter is the perfect addition to start or expand on your home garden...
      
                        <hr className='hr_div'></hr>
                        <table className='container2_table'>
                            <tr>
                                <td className='container2_td'>CONTEMPORY DESIGN</td>
                                <td className='container2_td'>EASY TO USE</td>
                                <td className='container2_td'>ECO-FRIENDLY</td>
                            </tr>
                        </table>
                        <input type='submit' id='quickadd'
                        value='QUICK ADD'/>
                    </div>
                    <div className='text_size2'>Unbalive High Rise Beige Planter<br></br><b>&#163;99.99</b><br></br>
                    <p className='con4'>
                    <a href='' className='con4_1'></a>
                    <a href='' className='con4_2'></a>
                    <a href='' className='con4_3'></a>
                    </p>
                    </div>
                </div>
                
            </div>
            
        </>
    );
}

export default Currently_trending;