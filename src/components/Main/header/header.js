import img1 from "./img/logo.svg"
// import img2 from "./img/arrow-left.svg"
// import img3 from "./img/arrow-right.svg"
import './styles/main.css'


export default function Header() {
	return (
		<>
			<header id='header' class="header">
				<div class="header__container _container">
					<nav class="nav">
						<a href="#!"><img class='nav__logo' src={img1} alt='img'/></a>
						<ul class="nav__list">
							<li class="nav__item">
								<a href="aboutus.html" class="nav__link">
									About Us
								</a>
							</li>
							<li class="nav__item">
								<a href="services.html" class="nav__link">
									Services
								</a>
							</li>
							<li class="nav__item">
								<a href="work.html" class="nav__link">
									Work
								</a>
							</li>
							<li class="nav__item">
								<a href="news.html" class="nav__link">
									News
								</a>
							</li>
							<li class="nav__item">
								<a href="contacts.html" class="nav__link">
									Contacts
								</a>
							</li>
						</ul>
						<ul class="nav__cards">
							<li class="nav__card">
								<h2 class="nav__card-title">Call us</h2>
								<a href='tel:+4055550128' class="nav__card-text">(405) 555-0128</a>
							</li>
							<li class="nav__card nav__card-two">
								<h2 class="nav__card-title">Talk to us</h2>
								<a href='mailto:hello@createx.com' class="nav__card-text">hello@createx.com</a>
							</li>
						</ul>

						<div class="header__burger">
							<span class='header__burger-span'></span>
							<span class='header__burger-span'></span>
						</div>
					</nav>
				</div>


				<div class="header-main">
					<div class="header-main__swiper">

					</div>
					{/* <div class="header-main__arrows">
						<div class="header-main__left header-main__arrow">
							<button><img src={img2} alt='img'/></button>
						</div>
						<div class="header-main__right header-main__arrow">
							<button><img src={img3} alt='img'/></button>
						</div>
					</div> */}


					<div class="_container">
						<div class="header-content">
							<h1 class="header-content__title">CREATE<span>X</span><br />
								CONSTRUCTION</h1>
							<p class="header-content__text">Cras ultrices leo vitae non viverra. Fringilla nisi quisque
								consequat,
								dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum
								elementum felis. </p>
							<div class="header-content__buttons">
								<button class="header-content__button header-content__button-one _butn">Learn more about
									us</button>
								<button class="header-content__button header-content__button-two _butn">SUBMIT REQUEST</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}