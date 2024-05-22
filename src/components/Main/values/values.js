import './values.scss'
import img1 from "./img/like.svg"
import img2 from "./img/sefevy.svg"
import img3 from "./img/comfort.svg" 

export default function Values() {
	return (
		<>
			<section class="values">
				<div class="values__container _container">
					<div class="header-block headear-block-values">
						<h2 class="header-block__title">Our core values</h2>
						<p class="header-block__text">Our mission is to set the highest standards for construction sphere.
						</p>
					</div>

					<ul class="values-cards">
						<li class="values-card">
							<div class="values-card__content">
								<img src={img1} alt="img" class="values-card__img"/>
									<h2 class="values-card__title">Quality</h2>
									<p class="values-card__text">Culpa nostrud commodo ea consequat aliquip reprehenderit.
										Veniam velit nostrud aliquip sunt.</p>
							</div>
						</li>
						<li class="values-card">
							<div class="values-card__content">
								<img src={img2} alt="img"/>
									<h2 class="values-card__title">Safety</h2>
									<p class="values-card__text">Anim reprehenderit sint voluptate exercitation adipisicing
										laborum adipisicing. Minim empor est ea.</p>
							</div>
						</li>
						<li class="values-card">
							<div class="values-card__content">
								<img src={img3} alt="img" class="values-card__img"/>
									<h2 class="values-card__title">Comfort</h2>
									<p class="values-card__text">Sit veniam aute dolore adipisicing nulla sit culpa. Minim
										mollit voluptate ullamco proident ea ad.</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}