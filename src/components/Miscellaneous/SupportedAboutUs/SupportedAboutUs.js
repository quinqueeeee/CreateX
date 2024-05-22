import './supported.scss'
import img1 from "./img/1.svg"
import img2 from "./img/2.svg"
import img3 from "./img/3.svg"
import img4 from "./img/4.svg"
import img5 from "./img/5.svg"
import img6 from "./img/6.svg"
import img7 from "./img/7.svg"
import img8 from "./img/8.svg"
import img9 from "./img/9.svg"
import img10 from "./img/10.svg"
import img11 from "./img/11.svg"
import img12 from "./img/12.svg"

export default function SupportedAboutUs() {
	return (

		<>
			<section class="supported">
				<div class="supported__container _container">
					<h2 class="header-title supported-title">Our partners</h2>
					<p class="supported-text">We are supported by 12+ industry bodies and media partners</p>

					<ul class="supported-list">
						<li class="supported-item">
							<a href="">
								<img src={img1} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="">
								<img src={img2} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="">
								<img src={img3} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="">
								<img src={img4} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="">
								<img src={img5} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="">
								<img src={img6} alt="img"/>
							</a>
						</li>
					</ul>
					<ul class="supported-list">
						<li class="supported-item">
							<a href="">
								<img src={img7} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="">
								<img src={img8} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="">
								<img src={img9} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="">
								<img src={img10} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="">
								<img src={img11} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="">
								<img src={img12} alt="img"/>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}