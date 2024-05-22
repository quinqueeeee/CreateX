import './relactes.scss'
// import img1 from "./img/1.png"
// import img2 from "./img/2.png"
// import img3 from "./img/3.png"

export default function RelactesInterior() {
	return (
		<>
		<section class="relacted">
			<div class="relacted__container _container">
				<h2 class="header--title">Related projects</h2>




				<div id='mySlider1' class="splide" aria-label="Splide Basic HTML Example">
					<div class="splide__track">
						<ul class="browse-cards splide__list">
							{/* <li class="browse-card splide__slide">
								<img src={img1} alt="img" class="browse-card__img"/>
								<h2 class="browse-card__title">Kids Bedroom With Decorations</h2>
								<p class="browse-card__text">Apartments & flats</p>
								<button class="browse-card__btn _butn">View Project</button>
							</li>
							<li class="browse-card splide__slide">
								<img src={img2} alt="img" class="browse-card__img"/>
								<h2 class="browse-card__title">Modern Double Bedroom</h2>
								<p class="browse-card__text">Apartments & flats</p>
								<button class="browse-card__btn _butn">View Project</button>
							</li>
							<li class="browse-card splide__slide">
								<img src={img3} alt="img" class="browse-card__img"/>
								<h2 class="browse-card__title">Private houses</h2>
								<p class="browse-card__text">Stores & Malls</p>
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
		</section>
		</>
	)
}