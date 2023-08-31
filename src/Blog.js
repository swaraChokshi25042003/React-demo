import './blog.css';
import blog_img1 from './images/instaliing_water_butts.jpeg';
import blog_img2 from './images/working_of_compost.jpeg';
function Blog() {
    return (
        <div className='blog_main_container'>
            <div className='from_blog'>
                <p className='title'>FROM THE BLOG</p>
                <h3 className='blog_h3'>Helping you lead an EvenGreener <br></br>lifestyle</h3>
                <form>
                    <input type='submit' value='VIEW BLOG' id='view_blog'></input>
                </form>
            </div>
            <div className='installing_water_butts'>
                <img src={blog_img1} className='blog_img_size'></img>
                <p className='container'>Save Money and the Environment: How to fit a<br></br> Water Butt</p>
                <p className='minute_read'>4 minute read</p>
            </div>
            <div className='compost_bin_working'>
                <img src={blog_img2} className='blog_img_size'></img>
                <p className='container'>What are Compost Bins & How they work.?</p>
                <p className='minute_read'>4 minute read</p>
            </div>
        </div>
      );
}

export default Blog;