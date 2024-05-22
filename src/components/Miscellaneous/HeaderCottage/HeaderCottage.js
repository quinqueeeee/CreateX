import logo from "../../Main/header/img/logo.svg"
// import left from "./img/left.svg"
import imgSlide from "./img/image.jpg"
import './header.scss'
import './hero.scss'

export default function HeaderCottage() {
	return (
		<header id='header' class="header-10">
			<div class="header__container _container">
				<nav class="nav">
					<a href="index.html" target='_blank'><img class='nav__logo' src={logo}
						alt="img" /></a>
					<ul class="nav__list">
						<li class="nav__item">
							<a href="aboutus.html" class="nav__link">
								About Us
							</a>
						</li>
						<li class="nav__item">
							<a href="services.html" class="nav__link ">
								Services
							</a>
						</li>
						<li class="nav__item">
							<a href="#!" class="nav__link nav__link-active">
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
			<div class="hero-1">
				<div class="hero__container _container">
					<div class="hero-subtitle">
						<a href='index.html' target='_blank' class='hero-subitle'>Homepage</a><a target='_blank'
							href='work.html' class='hero-subitle'> /
							Work</a><span class='hero-subtitle-2'> / Modern Cottage</span>
					</div>
					<h1 class="hero-title">Modern Cottage</h1>
				</div>
			</div>
			<div class="modern__container _container">
				<div class="modern-slide">
					<div id='splide' class="splide" aria-label="Splide Basic HTML Example">
						<div class="splide__arrows splide__arrows--ltr">
							{/* <button class="splide__arrow arrow-left splide__arrow--prev" type="button"
								aria-label="Previous slide" aria-controls="splide01-track">
								<img src={left} alt="img"/>
							</button>
							<button class="splide__arrow splide__arrow--next" type="button" aria-label="Next slide"
								aria-controls="splide01-track">
								<svg width="18" height="12" viewBox="0 0 18 12" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z"
										fill="#424551" />
								</svg>
							</button> */}
						</div>
						<div class="splide__track">
							<ul class="splide__list">
								<li class="splide__slide"><img src={imgSlide} alt="img"/></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}