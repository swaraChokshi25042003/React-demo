import './as_seen.css';
import as_seen_img1 from'./images/bbc_image.png';
import as_seen_img2 from './images/gardner_world.png';
function As_seen() {
    return ( 
        <div className='as_seen_main_container'>
            <p>AS SEEN IN</p>
            <p><img src={as_seen_img1} className='ass_seen_img'></img></p>
            <p><img src={as_seen_img2} className='ass_seen_img'></img></p>
        </div>
     );
}

export default As_seen;