import logo from '../../Main/clients/img/logo.svg'
import img from '../../Main/clients/img/image.png'
import './clients.scss'

export default function ClientsWork() {
	return (
		<section class="clients">
			<div class="clients__container _container">

				<div class="clients-contents">

					<div id='mySlider1' class="splide" aria-label="Basic Structure Example">
						<div class="splide__track clients-main">
							<h2 class="header-title clients-title">What our clients are saying</h2>
							<ul class="splide__list">
								<li class="clients-content-left splide__slide">
									<img src={logo} alt="img" class="clients-content__logo" />
									<p class="clients-content__text">Ipsum aute sunt aliquip aute et occaecat. Anim
										minim do
										cillum
										eiusmod enim. Consectetur magna cillum consequat minim laboris cillum laboris
										voluptate
										minim
										proident exercitation ullamco. </p>
									<div class="clients-content-bot">
										<p class="clients-content-bot__left">Shawn Edwards <br /> <span>Position, Company
											name</span>
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>




					<div class="clients-content-right">
						<img src={img} alt="img" />
					</div>
				</div>
			</div>
		</section>
	)
}