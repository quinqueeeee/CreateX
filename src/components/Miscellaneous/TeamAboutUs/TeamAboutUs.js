import './team.scss'
import img1 from "./img/social-1.svg"
import img2 from "./img/social-2.svg"
import img3 from "./img/social-3.svg"
import img4 from "./img/1.png"
import img5 from "./img/2.png"
import img6 from "./img/3.png"
import img7 from "./img/4.png"
import img8 from "./img/5.png"
import img9 from "./img/6.png"
import img10 from "./img/7.png"
import img11 from "./img/8.png"

export default function TeamAboutUs() {
	return (

		<>
			<section class="team">
				<div class="team__container _container">

					<h2 class="header-title">Our team</h2>
					<p class="team-text">People are at the heart of Createx Construction Bureau </p>

					<ul class="team-cards">
						<li class="team-item">
							<div class="social">
								<a href="#!"><img src={img1} alt="img" /></a>
								<a href="#!"><img src={img2} alt="img" /></a>
								<a href="#!"><img src={img3} alt="img" /></a>
							</div>
							<img class='team__img' src={img4} alt="img" />
							<h2>Courtney Alexander</h2>
							<p>CEO, Co-Founder</p>
						</li>
						<li class="team-item">
							<div class="social">
								<a href="#!"><img src={img1} alt="img" /></a>
								<a href="#!"><img src={img2} alt="img" /></a>
								<a href="#!"><img src={img3} alt="img" /></a>
							</div>
							<img class='team__img' src={img5} alt="img"/>
								<h2>Calvin Fox</h2>
								<p>CTO, Co-Founder</p>
						</li>
						<li class="team-item">
							<div class="social">
								<a href="#!"><img src={img1} alt="img" /></a>
								<a href="#!"><img src={img2} alt="img" /></a>
								<a href="#!"><img src={img3} alt="img" /></a>
							</div>
							<img class='team__img' src={img6} alt="img"/>
								<h2>Johnny Lane</h2>
								<p>Commercial Manager</p>
						</li>
						<li class="team-item">
							<div class="social">
								<a href="#!"><img src={img1} alt="img" /></a>
								<a href="#!"><img src={img2} alt="img" /></a>
								<a href="#!"><img src={img3} alt="img" /></a>
							</div>
							<img class='team__img' src={img7} alt="img"/>
								<h2>Diane Mccoy</h2>
								<p>Director of Human Resources</p>
						</li>
						<li class="team-item">
							<div class="social">
								<a href="#!"><img src={img1} alt="img" /></a>
								<a href="#!"><img src={img2} alt="img" /></a>
								<a href="#!"><img src={img3} alt="img" /></a>
							</div>
							<img class='team__img' src={img8} alt="img"/>
								<h2>Judith Warren</h2>
								<p>Lead Accountant</p>
						</li>
						<li class="team-item">
							<div class="social">
								<a href="#!"><img src={img1} alt="img" /></a>
								<a href="#!"><img src={img2} alt="img" /></a>
								<a href="#!"><img src={img3} alt="img" /></a>
							</div>
							<img class='team__img' src={img9} alt="img"/>
								<h2>Floyd Simmmons</h2>
								<p>Finacial Director</p>
						</li>
						<li class="team-item">
							<div class="social">
								<a href="#!"><img src={img1} alt="img" /></a>
								<a href="#!"><img src={img2} alt="img" /></a>
								<a href="#!"><img src={img3} alt="img" /></a>
							</div>
							<img class='team__img' src={img10} alt="img"/>
								<h2>Serenity Edwards</h2>
								<p>Director of Marketing</p>
						</li>
						<li class="team-item">
							<div class="social">
								<a href="#!"><img src={img1} alt="img" /></a>
								<a href="#!"><img src={img2} alt="img" /></a>
								<a href="#!"><img src={img3} alt="img" /></a>
							</div>
							<img class='team__img' src={img11} alt="img"/>
								<h2>Shawn Edwards</h2>
								<p>Tech Lead</p>
						</li>
					</ul>


					<div class="team-bot">
						<p>Become a part of the best team in the construction market of the USA.<a target='_blank'
							href='#!'> Available
							Positions</a></p>
					</div>
				</div>
			</section>
		</>
	)
}