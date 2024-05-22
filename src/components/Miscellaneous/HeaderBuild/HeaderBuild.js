import './header.scss'
import './hero.scss'
import logo from "../../Main/header/img/logo.svg"
import img1 from "./img/1.svg"
import img2 from "./img/2.svg"
import img3 from "./img/3.svg"


export default function HeaderBuild() {
	return (
		<>
			<header id='header' class="header00">
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
								<a href="work.html" class="nav__link ">
									Work
								</a>
							</li>
							<li class="nav__item">
								<a href="#!" class="nav__link nav__link-active">
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
				<div class="hero">
					<div class="hero__container _container">
						<div class="hero-subtitle">
							<a href='index.html' target='_blank' class='hero-subitle'>Homepage</a><a href='news.html'
								class='hero-subitle'> /
								News</a><span class=' hero-subtitle-2'> / How to Build Climate Change-Resilient
									Infrastructure</span>
						</div>
						<h1 class="hero-title hero___title">How to Build Climate Change-Resilient <br /> Infrastructure</h1>
						<div class="news-toop">
							<div class="news-item-inner">
								<p class="news-item-inner__name">Industry News</p>
								<p class="news-item-inner__name">June 24, 2020</p>
								<p class="news-item-inner__name news-item-inner-last">4 comments
								</p>
							</div>
							<div class="news-toop-l">
								<a href="#!"><img src={img1} alt="img"/></a>
								<a href="#!"><img src={img2} alt="img"/></a>
								<a href="#!"><img src={img3} alt="img"/></a>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}