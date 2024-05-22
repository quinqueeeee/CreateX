import './cards.scss'
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from "./img/4.png"

export default function CardsServices() {
	return (
		<section class="cards">
			<div class="cards__container _container">
				<ul class="cards-list-l">
					<li class="card-item card-item-1">
						<img src={img1} alt="img" class="card-item__img"/>
							<div class="card-item__content">
								<h2 class="card-item__title">Construction</h2>
								<p class="card-item__text">Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius
									consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed
									ut
									ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam
									dignissim ut vestibulum. </p>
								<a href='interior-design.html' target='_blank' class="card-item__btn _butn">Learn more</a>
							</div>
					</li>
					<li class="card-item card-item-2">
						<img src={img2} alt="img" class="card-item__img"/>
							<div class="card-item__content">
								<h2 class="card-item__title">Project Development</h2>
								<p class="card-item__text">Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet
									viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum
									blandit massa vitae amet felis eget. </p>
								<a href='interior-design.html' target='_blank' class="card-item__btn _butn">Learn more</a>
							</div>
					</li>
					<li class="card-item card-item-1">
						<img src={img3} alt="img" class="card-item__img"/>
							<div class="card-item__content">
								<h2 class="card-item__title">Interior Design</h2>
								<p class="card-item__text">Eleifend orci massa et facilisis orci feugiat ac. Congue in ut
									lacus,
									turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas
									lorem
									eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque
									nulla
									duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. </p>
								<a href='interior-design.html' target='_blank' class="card-item__btn _butn">Learn more</a>
							</div>
					</li>
					<li class="card-item card-item-2">
						<img src={img4} alt="img" class="card-item__img"/>
							<div class="card-item__content">
								<h2 class="card-item__title">Repairs</h2>
								<p class="card-item__text">Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum
									commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id egestas mattis. Turpis
									viverra nec urna ultrices urna. </p>
								<a href='interior-design.html' target='_blank' class="card-item__btn _butn">Learn more</a>
							</div>
					</li>
				</ul>
			</div>
		</section>
	)
}