import './facts.scss'
import img1 from "./img/1.svg"
import img2 from "./img/2.svg"
import img3 from "./img/3.svg"
import img4 from "./img/4.svg"

export default function facts () {
	return (
		<section class="facts">
            <div class="facts__container _container">
                <h2 class="header-title header-title-facts">Some facts and figures</h2>

                <div class="facts-container">
                    <ul class="facts-inner-list">
                        <li class="fatcs-item">
                            <a href="#!">
                                <img src={img1} alt="img"/>
                            </a>
                            <p class="facts-item__text">Totally satisfied clients</p>
                        </li>
                        <li class="fatcs-item">
                            <a href="#!">
                                <img src={img2} alt="img"/>
                            </a>
                            <p class="facts-item__text">Years of experience</p>
                        </li>
                        <li class="fatcs-item">
                            <a href="#!">
                                <img src={img3} alt="img"/>
                            </a>
                            <p class="facts-item__text">Working hours spent</p>
                        </li>
                        <li class="fatcs-item">
                            <a href="#!">
                                <img src={img4} alt="img"/>
                            </a>
                            <p class="facts-item__text">Succeeded projects</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
	)
}