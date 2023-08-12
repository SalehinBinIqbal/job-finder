import image from '../../../assets/job.jpg'
import {PiBriefcase} from "react-icons/pi";
import {SlLocationPin} from "react-icons/sl"
import {BsListTask} from "react-icons/bs"
import {HiOutlineChevronDown} from "react-icons/hi"
import {FiSearch} from "react-icons/fi"
import classes from './Hero.module.css';

function Hero(){
    return(
        <>
        <div className={classes.heroSection}>
            <div className={classes.textSection}>
                <div className={classes.topText}>
                    Find Your Dream
                </div>
                <div className={classes.midText}>
                    <span>Job And Career </span>To Build a Life
                </div>
                <div className={classes.bottomText}>
                    Lorem ipsum dolor sit amet consectetur. Vestibulum cursus semper odio, sit amet varius est. Integer auctor vehicula felis tempus venenatis.
                </div>
            </div>
            <div className={classes.imageSection}>
                <img src={image} alt="" />
            </div>
        </div>
        <div className={classes.searchBar}>
            <PiBriefcase className={classes.Icon}/>
            <input type="text" placeholder='Job Title' />
            <SlLocationPin className={classes.Icon2}/>
            <input type="text" placeholder='Location' />
            <BsListTask className={classes.Icon3}/>
            <input type="text" placeholder='Category' />
            <HiOutlineChevronDown className={classes.Icon4}/>
            <button>Search</button>
            
        </div>
        <div className={classes.popSearch}>
            Popular Searches: &nbsp; &nbsp;
            <span>
                WordPress
            </span>
            <span>
                HTML5
            </span>
            <span>
                Marketing
            </span>
            <span>
                Finance
            </span>
            <span>
                UX UI Designer
            </span>
        </div>
        </>
    );
}

export default Hero;