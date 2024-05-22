import './browse.scss'
import card1 from "./img/1.png"
import card2 from "./img/2.png"
import card3 from "./img/3.png"
import card4 from "./img/4.png"
import card5 from "./img/5.png"
import card6 from "./img/6.png"
import card7 from "./img/7.png"
import card8 from "./img/8.png"
import card9 from "./img/9.png"

export default function BrowseWork() {
	return (
		<section class="browse">
			<div class="browse__container _container">
				<ul class="browse-cards work-cards">
					<a target='_blank' href='modern-cottage.html' class="browse-card">
						<img src={card1} alt="img" class="browse-card__img"/>
						<h2 class="browse-card__title">Cubes Building</h2>
						<p class="browse-card__text">Business Centers</p>
						<button href='modern-cottage.html' target='_blank' class="browse-card__btn _butn">View Project</button>
					</a>
					<a target='_blank' href='modern-cottage.html' class="browse-card">
						<img src={card2} alt="img" class="browse-card__img"/>
						<h2 class="browse-card__title">Modern Cottage</h2>
						<p class="browse-card__text">Private houses</p>
						<button href='modern-cottage.html' target='_blank' class="browse-card__btn _butn">View
							Project</button>
					</a>
					<a target='_blank' href='modern-cottage.html' class="browse-card">
						<img src={card3} alt="img" class="browse-card__img"/>
						<h2 class="browse-card__title">Luxury Beach House</h2>
						<p class="browse-card__text">Private houses</p>
						<button href='modern-cottage.html' target='_blank' class="browse-card__btn _butn">View Project</button>
					</a>
					<a target='_blank' href='modern-cottage.html' class="browse-card">
						<img src={card4} alt="img" class="browse-card__img"/>
						<h2 class="browse-card__title">Modern Double Bedroom</h2>
						<p class="browse-card__text">Apartments & flats</p>
						<button href='modern-cottage.html' target='_blank' class="browse-card__btn _butn">View Project</button>
					</a>
					<a target='_blank' href='modern-cottage.html' class="browse-card">
						<img src={card5} alt="img" class="browse-card__img"/>
						<h2 class="browse-card__title">Kids Bedroom With Decorations</h2>
						<p class="browse-card__text">Apartments & flats</p>
						<button href='modern-cottage.html' target='_blank' class="browse-card__btn _butn">View Project</button>
					</a>
					<a target='_blank' href='modern-cottage.html' class="browse-card">
						<img src={card6} alt="img" class="browse-card__img"/>
						<h2 class="browse-card__title">The Pencil Building</h2>
						<p class="browse-card__text">Stores & Malls</p>
						<button href='modern-cottage.html' target='_blank' class="browse-card__btn _butn">View Project</button>
					</a>
					<a target='_blank' href='modern-cottage.html' class="browse-card">
						<img src={card7} alt="img" class="browse-card__img"/>
						<h2 class="browse-card__title">Red Finger Building</h2>
						<p class="browse-card__text">Business Centers</p>
						<button href='modern-cottage.html' target='_blank' class="browse-card__btn _butn">View Project</button>
					</a>
					<a target='_blank' href='modern-cottage.html' class="browse-card">
						<img src={card8} alt="img" class="browse-card__img"/>
						<h2 class="browse-card__title">Scandinavian Style Interior</h2>
						<p class="browse-card__text">Private houses</p>
						<button href='modern-cottage.html' target='_blank' class="browse-card__btn _butn">View Project</button>
					</a>
					<a target='_blank' href='modern-cottage.html' class="browse-card">
						<img src={card9} alt="img" class="browse-card__img"/>
						<h2 class="browse-card__title">Brown and Gray Painted House</h2>
						<p class="browse-card__text">Private houses</p>
						<button href='modern-cottage.html' target='_blank' class="browse-card__btn _butn">View Project</button>
					</a>
				</ul>
				<div class="browse-p">
					Load more
				</div>
			</div>
		</section>
	)
}