import logo1 from './images/icon-logo.svg';
import './index.css';

function Footer() {
    return ( 
        <div className="footer">
            <img src={logo1} id='whitelogo' height='auto' width='8%'></img>
            
                <table align='center'>
                    <tr>
                        <td>SHOP</td>
                        <td>SUPPORT</td>
                        <td>GOOD TO KNOW</td>
                        <td>POLICIES</td>
                        <td>ACCOUNT</td>
                        <td>CONNECT</td>
                        <td>GET IN TOUCH</td>

                        </tr>
                    <tr>
                        <td><a href=''>BestSellers</a></td>
                        <td><a href=''>Contact Us</a></td>
                        <td><a href=''>📢Join Us! We are hiring</a></td>
                        <td><a href=''>T&Cs</a></td>
                        <td><a href=''>Manage Account</a></td>
                        <td><a href=''>Facebook</a></td>
                        <td><a href=''><b>Email</b></a></td>

                    </tr>
                    <tr>
                    <td><a href=''>Composters</a></td>
                    <td><a href=''>Delievery & Returns</a></td>
                    <td><a href=''>About Us</a></td>
                    <td><a href=''>T&Cs Contests</a></td>
                    <td><a href=''>Orders and Returns</a></td>
                    <td><a href=''>Instagram</a></td>
                    <td><a href=''>customer.care@avengreener.com</a></td>


                    </tr>
                    <tr>
                    <td><a href=''>Water Butts</a></td>
                    <td><a href=''>FAQs</a></td>
                    <td><a href=''>Blogs</a></td>
                    <td><a href=''>Cookie Policy</a></td>
                    <td><a href=''>Loyalty & Rewards</a></td>
                    <td><a href=''>Twitter</a></td>
                    <td><a href=''><b>Phone</b></a></td>
                        
                    </tr>
                    <tr>
                    <td><a href=''>Wheelie Bins</a></td>
                    <td><a href=''>Blogs & Guides</a></td>
                    <td><a href=''>Sustainbility</a></td>
                    <td><a href=''>Privacy Policy</a></td>
                    <td><a href=''>-REFER A FRIEND!-</a></td>
                    <td><a href=''>YouTube</a></td>
                    <td><a href=''>0800 316 4454(Freephone)</a></td>
                    
                    </tr>
                </table>
                <hr></hr>
                <p className='text4'>
                &#169;2023 EverGreener. All Rights Reserved
                </p>
                <p>
                </p>
            
        </div>
     );
}

export default Footer;