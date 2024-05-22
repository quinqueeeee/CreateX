import './news.scss'
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from "./img/4.png"
import img5 from "./img/5.png"
import img6 from "./img/6.png"

export default function CategNews() {
	return (
		<>
			<section class="categ">
				<div class="_container">
					<h2 class="header-title header-title-news">Categories</h2>
					<ul class="categ-cards">
						<a target='_blank' href='howtobuild.html' class="categ-card news-item-first">
							<img src={img1} alt="img" class="news-item__img"/>
								<h3 class="news-item__title">How to Build Climate Change-Resilient Infrastructure</h3>
								<div class="news-item-inner">
									<p class="news-item-inner__name">Industry News</p>
									<p class="news-item-inner__name">June 24, 2020</p>
									<p class="news-item-inner__name news-item-inner-last">4 comments
									</p>
								</div>
								<p class="news-item__text">Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus.
									Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh
									convallis...</p>
						</a>
						<a target='_blank' href='howtobuild.html' class="categ-card news-item-first">
							<img src={img2} alt="img" class="news-item__img"/>
								<h3 class="news-item__title">How Construction Can Help Itself</h3>
								<div class="news-item-inner">
									<p class="news-item-inner__name">Innovation</p>
									<p class="news-item-inner__name">June 12, 2020</p>
									<p class="news-item-inner__name news-item-inner-last">No comments
									</p>
								</div>
								<p class="news-item__text">Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus
									placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus...</p>
						</a>
						<a target='_blank' href='howtobuild.html' class="categ-card news-item-first">
							<img src={img3} alt="img" class="news-item__img"/>
								<h3 class="news-item__title">The Difference Between a Digger and an Excavator</h3>
								<div class="news-item-inner">
									<p class="news-item-inner__name">Expert Tips</p>
									<p class="news-item-inner__name">May 16, 2020</p>
									<p class="news-item-inner__name news-item-inner-last">No comments
									</p>
								</div>
								<p class="news-item__text">Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque
									integer duis et nulla lobortis cursus. Viverra erat sollicitudin praesent viverra...</p>
						</a>
						<a target='_blank' href='howtobuild.html' class="categ-card news-item-first">
							<img src={img4} alt="img" class="news-item__img"/>
								<h3 class="news-item__title">Building Construction Hand Tools</h3>
								<div class="news-item-inner">
									<p class="news-item-inner__name">Expert Tips</p>
									<p class="news-item-inner__name">February 25, 2020</p>
									<p class="news-item-inner__name news-item-inner-last">1 comment
									</p>
								</div>
								<p class="news-item__text">Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae
									elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer...</p>
						</a>
						<a target='_blank' href='howtobuild.html' class="categ-card news-item-first">
							<img src={img5} alt="img" class="news-item__img"/>
								<h3 class="news-item__title">Top 10 Construction Trends</h3>
								<div class="news-item-inner">
									<p class="news-item-inner__name">Industry News</p>
									<p class="news-item-inner__name">January 14, 2020</p>
									<p class="news-item-inner__name news-item-inner-last">No comments
									</p>
								</div>
								<p class="news-item__text">Dignissim sed enim, eleifend morbi condimentum. Congue id quis
									vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...</p>
						</a>
						<a target='_blank' href='howtobuild.html' class="categ-card news-item-first">
							<img src={img6} alt="img" class="news-item__img"/>
								<h3 class="news-item__title">Types of Flooring Materials</h3>
								<div class="news-item-inner">
									<p class="news-item-inner__name">Company News</p>
									<p class="news-item-inner__name">December 1, 2019</p>
									<p class="news-item-inner__name news-item-inner-last">No comments
									</p>
								</div>
								<p class="news-item__text">Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum
									et mauris, aenean. Vel arcu amet in sem parturient integer duis et nulla...</p>
						</a>
					</ul>
				</div>
			</section>
		</>
	)
}