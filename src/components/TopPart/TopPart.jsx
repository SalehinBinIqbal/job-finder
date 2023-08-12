import Nav from './Nav/Nav';
import Hero from './Hero/Hero';

import classes from './TopPart.module.css';

function TopPart(){
    return(
        <div className={classes.topSection}>
            <Nav/>
            <Hero/>
        </div>
    );
}
export default TopPart;