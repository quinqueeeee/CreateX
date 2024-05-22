import img1 from "./img/1.svg"
import img2 from "./img/2.svg"
import img3 from "./img/3.svg"

import './benefits.scss'

export default function BenefitsPositions() {
	return (
		<section class="benefits benefits-1">
			<div class="benefits__container _container">
				<h2 class="header--title benefits-header-title">Employee benefits</h2>
				<p class="benefits-header-text">There’s always room for talent.</p>
				<ul class="benefits-list">
					<li class="benefits-item">
						<img src={img1} alt="img"/>
							<h2>Training</h2>
							<p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.
							</p>
					</li>
					<li class="benefits-item">
						<img src={img2} alt="img"/>
							<h2>Professional Growth</h2>
							<p>Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor
								est ea.</p>
					</li>
					<li class="benefits-item">
						<img src={img3} alt="img"/>
							<h2>Growing Salary</h2>
							<p>Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident
								ea ad.</p>
					</li>
				</ul>
			</div>
		</section>
	)
}