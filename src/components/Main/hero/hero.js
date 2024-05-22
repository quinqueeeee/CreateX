import './hero.scss'

export default function Hero() {
	return (
		<>
			<section class="hero">
				<div class="hero__container _container">
					<div class="hero-header-block header-block">
						<h2 class="header-block__title">We are Createx Construction Bureau </h2>
						<p class="header-block__text">We are rightfully considered to be the best construction company in
							the USA.</p>
					</div>
					<div class="hero__video">
						<iframe width="100%" height="400" class='iframe'
							src="https://www.youtube.com/embed/_lfT8Q-FA60?si=qDjhLbM2NtTO2Uex" title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen></iframe>
					</div>
				</div>
			</section>
		</>
	)
}