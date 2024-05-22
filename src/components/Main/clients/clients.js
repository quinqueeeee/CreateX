import './clients.scss'
import logo from "./img/logo.svg"
import left from "./img/left.svg"
import right from "./img/right.svg"
import img from "./img/image.png"

export default function Clients() {
	return (
		<section class="clients">
			<div class="clients__container _container">
				<h2 class="header-title clients-title">What our clients are saying</h2>
				<div class="clients-contents">

					<div id='mySlider2' class="splide" aria-label="Splide Basic HTML Example">
						<div class="splide__track">
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
										<div class="clients-content-bot-right">
											<button class="clients-conent-bot__swip-left">
												<img src={left} alt="img" />
											</button>
											<button class="clients-conent-bot__swip-right">
												<img src={right} alt="img" />
											</button>
										</div>
									</div>
								</li>
								{/* <li class="clients-content-left splide__slide">
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
								</li> */}

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