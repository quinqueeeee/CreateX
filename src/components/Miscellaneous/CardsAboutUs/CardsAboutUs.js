import './cards.scss'
import img1 from "./img/1.png"
import img2 from "./img/2.svg"
import img3 from "./img/3.svg"
import img4 from "./img/4.svg"

export default function CardsAboutUs() {
	return (
		<>
			<section class="cards">
				<div class="cards__container _container">
					<ul class="cards-list">
						<li class="cards-item">
							<img src={img1} alt="img"/>
								<h2>60%</h2>
								<p>Clients on the recommendation of friends</p>
						</li>
						<li class="cards-item">
							<img src={img2} alt="img"/>
								<h2>2400+</h2>
								<p>Apartments renovated</p>
						</li>
						<li class="cards-item">
							<img src={img3} alt="img"/>
								<h2>670</h2>
								<p>Qualified specialists</p>
						</li>
						<li class="cards-item cards-item-style">
							<img src={img4} alt="img"/>
								<h2>150000+ m2</h2>
								<p>Finishing work was carried out</p>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}