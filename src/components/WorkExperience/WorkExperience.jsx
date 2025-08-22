import { WORK_EXPERIENCE } from "../../utils/data";
import "./WorkExperience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard"; // Assuming you have an ExperienceCard component
import Slider from "react-slick";
import { useRef } from "react";

const WorkExperience = () => {

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1 ,
                },
            },
        ],
    };


    //logica boton right & left
    const slideRight = () => {
        sliderRef.current.slickNext()
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }




    return(
        <section className="experience-container">
            <h5>Work Experience</h5>

            <div className="experience-content">

                <div className="experience-content">

                    <div className="arrow-right" onClick={slideRight}>
                        <span className="material-symbols-outline">
                            right
                        </span>
                    </div>

                    <div className="arrow-left" onClick={slideLeft}>
                        <span className="material-symbols-outlined">
                            left
                        </span>
                    </div>

                    <Slider ref={sliderRef} {...settings}>
                        {WORK_EXPERIENCE.map((item) => (
                            <ExperienceCard key={item.title} details={item} />
                        ))}
                     </Slider>

                </div>
            </div>
        </section>

    )
}

export default WorkExperience;