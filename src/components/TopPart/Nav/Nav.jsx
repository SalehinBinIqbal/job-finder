import classes from './Nav.module.css';

function Nav(){
    return(
        <div className={classes.navBar}>
            <div className={classes.navTitle}>
                Job
            </div>
            <div className={classes.navLinks}>
                <a href="">Home</a>
                <a href="">Pages</a>
                <a href="">Jobs</a>
                <a href="">Employers</a>
                <a href="">Blog</a>
            </div>
            <div className={classes.navButtons}>
                <a href="">Register</a>
                <button>
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default Nav;