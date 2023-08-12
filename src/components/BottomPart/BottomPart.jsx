import Body from './Body/Body';

import classes from './BottomPart.module.css';

function BottomPart(){
    return(
        <div className={classes.bottomSection}>
            <Body/>
        </div>
    );
}
export default BottomPart;