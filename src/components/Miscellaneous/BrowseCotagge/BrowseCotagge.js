import './browse.scss'
// import img3 from "./img/3.png"
// import img9 from "./img/9.png"
// import img8 from "./img/8.png"


export default function BrowseCottage() {
	return (
		<section class="browse">
			<div class="browse__container _container">
				<h2 class="browse-title">Similar projects</h2>




			<div id='mySlider1' class="splide" aria-label="Splide Basic HTML Example">
				<div class="splide__track">
					<ul class="browse-cards splide__list">
						{/* <li class="browse-card splide__slide">
								<img src={img3} alt="img" class="browse-card__img"/>
									<h2 class="browse-card__title">Luxury Beach House</h2>
									<p class="browse-card__text">Private Houses</p>
									<button class="browse-card__btn _butn">View Project</button>
							</li>
							<li class="browse-card splide__slide">
								<img src={img9} alt="img" class="browse-card__img"/>
									<h2 class="browse-card__title">Brown and Gray Painted House</h2>
									<p class="browse-card__text">Private Houses</p>
									<button class="browse-card__btn _butn">View Project</button>
							</li>
							<li class="browse-card splide__slide">
								<img src={img8} alt="img" class="browse-card__img"/>
									<h2 class="browse-card__title">Scandinavian Style Interior</h2>
									<p class="browse-card__text">Private houses</p>
									<button class="browse-card__btn _butn">View Project</button>
							</li> */}
					</ul>
				</div>
			</div>



			<div class="bottom-block browse-bottom-block">
				<h2 class="bottom-block__title">Explore all our works</h2>
				<button class="bottom-block__btn _butn">View portfolio</button>
			</div>
		</div>
		</section >
	)
}