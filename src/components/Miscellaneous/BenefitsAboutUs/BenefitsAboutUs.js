import './benefits.scss'
import img1 from "./img/1.svg"
import img2 from "./img/2.svg"
import img3 from "./img/3.svg" 

export default function BenefitsAboutUs() {
	return (
		<>
			<section class="benefits">
				<div class="benefits__container _container">
					<h2 class="header--title benefits-header-title">Our core values</h2>
					<p class="benefits-header-text">Our mission is to set the highest standards for construction sphere.</p>
					<ul class="benefits-list">
						<li class="benefits-item">
							<img src={img1} alt="img"/>
								<h2>Quality</h2>
								<p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.
								</p>
						</li>
						<li class="benefits-item">
							<img src={img2} alt="img"/>
								<h2>Safety</h2>
								<p>Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor
									est ea.</p>
						</li>
						<li class="benefits-item">
							<img src={img3} alt="img"/>
								<h2>Comfort</h2>
								<p>Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident
									ea ad.</p>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}