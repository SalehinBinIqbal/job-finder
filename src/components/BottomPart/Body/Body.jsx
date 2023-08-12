import rgb from "../../../assets/rgb.png"
import socialMedia from "../../../assets/social-media.png"
import app from "../../../assets/app.png"
import data from "../../../assets/data-science.png"
import computer from "../../../assets/computer-science.png"
import pr from "../../../assets/header.png"

import classes from "./Body.module.css";

function Body(){
    return(
        <>
        <div className={classes.containerText}>
            <div className={classes.categoryText}>
                Browse by Job Categories
            </div>
            <div className={classes.categoryBtn}>
                <button>Browse All Jobs</button>
            </div>
        </div>
        <div className={classes.jobCardContainer}>
            <div className={classes.jobCard}>
                <img src={rgb} alt="" />
                <div className={classes.bigText}>
                    UI/UX Design
                </div>
                <div className={classes.smallText}>
                    75+ Available Vacancy
                </div>
            </div>
            <div className={classes.jobCard}>
                <img src={socialMedia} alt="" />
                <div className={classes.bigText}>
                    UI/UX Design
                </div>
                <div className={classes.smallText}>
                    75+ Available Vacancy
                </div>
            </div>
            <div className={classes.jobCard}>
                <img src={app} alt="" />
                <div className={classes.bigText}>
                    UI/UX Design
                </div>
                <div className={classes.smallText}>
                    75+ Available Vacancy
                </div>
            </div>
            <div className={classes.jobCard}>
                <img src={data} alt="" />
                <div className={classes.bigText}>
                    UI/UX Design
                </div>
                <div className={classes.smallText}>
                    75+ Available Vacancy
                </div>
            </div>
            <div className={classes.jobCard}>
                <img src={computer} alt="" />
                <div className={classes.bigText}>
                    UI/UX Design
                </div>
                <div className={classes.smallText}>
                    75+ Available Vacancy
                </div>
            </div>
            <div className={classes.jobCard}>
                <img src={rgb} alt="" />
                <div className={classes.bigText}>
                    UI/UX Design
                </div>
                <div className={classes.smallText}>
                    75+ Available Vacancy
                </div>
            </div>
            <div className={classes.jobCard}>
                <img src={pr} alt="" />
                <div className={classes.bigText}>
                    UI/UX Design
                </div>
                <div className={classes.smallText}>
                    75+ Available Vacancy
                </div>
            </div>
            <div className={classes.jobCard}>
                <div className={classes.bigText}>
                    18,300+
                </div>
                <div className={classes.smallText}>
                    Job's are waiting for you
                </div>
                <button>Explore More</button>
            </div>
        </div>
        </>
    );
}

export default Body;