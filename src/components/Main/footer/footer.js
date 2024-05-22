import './footer.scss'
import logo from "./img/logo.svg"
import whatsapp from "./img/WhatsApp.svg"
import messanger from "./img/Messanger.svg"
import facebook from "./img/Facebook.svg"
import twitter from "./img/Twitter.svg"
import youtube from "./img/YouTube.svg"



export default function Footer() {
	return (
		<footer class="footer">
			<div class="footer__container _container">
				<div class="footer-top grid">
					<div class="footer-top-left">
						<div class="footer-top-left-top">
							<a href="!#" class="footer-logo">
								<img src={logo} alt="img" />
							</a>
							<ul class="fdooter-top-social">
								<li class="footer-top-social-item">
									<a href="!#">
										<img src={whatsapp} alt="img" />
									</a>
								</li>
								<li class="footer-top-social-item">
									<a href="!#">
										<img src={messanger} alt="img" />
									</a>
								</li>
								<li class="footer-top-social-item">
									<a href="!#">
										<img src={facebook} alt="img" />
									</a>
								</li>
								<li class="footer-top-social-item">
									<a href="!#">
										<img src={twitter} alt="img" />
									</a>
								</li>
								<li class="footer-top-social-item">
									<a href="!#">
										<img src={youtube} alt="img" />
									</a>
								</li>
							</ul>
						</div>
						<div class="footer-top-left-bot">
							<p class="footer-top-left-bot__text">Createx Construction Bureau has been successfully operating
								in the USA construction market since 2000. We are proud to offer you quality construction
								and exemplary service. Our mission is to set the highest standards for construction sphere.
							</p>
						</div>
					</div>
					<div class="footer-top-right">
						<h3 class="footer-top-right__title">Let’s stay in touch</h3>
						<form class="footer-top-right-form">
							<input placeholder='Your email address' type="text"/>
								<button class='_butn'>subscribe</button>
						</form>
						<p class="footer-top-right__text">*Subscribe to our newsletter to receive communications and early
							updates from Createx Construction Bureau.</p>
					</div>
				</div>
				<div class="footer-center">
					<ul class="footer-center-list grid">
						<li class="footer-center-item footer-center-item1">
							<h2>HEAD OFFICE</h2>
							<a href='!#'><span>Address:</span> 8502 Preston Rd. Inglewood, New York</a>
							<a href='tel:+4055550128'><span>Call:</span> (405) 555-0128</a>
							<a href='mailto:hello@createx.com'><span> Email:</span> hello@createx.com</a>
						</li>
						<li class="footer-center-item footer-center-item2">
							<h2>WHO WE ARE</h2>
							<p>About Us</p>
							<p>Available Positions</p>
							<p>Contacts</p>
						</li>
						<li class="footer-center-item footer-center-item3">
							<h2>OUR EXPERIENCE</h2>
							<p>Services</p>
							<p>Work</p>
							<p>News</p>
						</li>
					</ul>
				</div>
				<div class="footer-end">
					<p class="footer-end-left">© All rights reserved. Made with <span><svg width="16" height="14"
						viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M7.99925 12.2715C4.93321 10.5252 3.22318 8.78955 2.39626 7.28361C1.54992 5.74228 1.62377 4.4441 2.0934 3.52273C3.05872 1.62892 5.80378 1.02333 7.4763 3.13865L7.99921 3.80001L8.52217 3.13868C10.195 1.02327 12.9402 1.62896 13.9055 3.52273C14.3751 4.44408 14.4489 5.74226 13.6025 7.28359C12.7756 8.78954 11.0654 10.5252 7.99925 12.2715ZM7.99928 1.73726C5.64647 -0.498482 2.17555 0.425546 0.905488 2.91723C0.20846 4.2847 0.198939 6.05212 1.22753 7.92536C2.247 9.78198 4.2796 11.7417 7.67675 13.6194L7.99924 13.7976L8.32173 13.6194C11.719 11.7417 13.7517 9.78199 14.7712 7.92537C15.7999 6.05214 15.7904 4.28472 15.0934 2.91723C13.8233 0.425498 10.3523 -0.498448 7.99928 1.73726Z"
							fill="#FF5A30" />
					</svg></span> All rights reserved. Made with
					</p>
					<div class="footer-end-right">
						<p class="footer-end-right__text">GO TO TOP</p>
						<a href='#header' class="footer-end-right__button">.</a>
					</div>
				</div>
			</div>
		</footer>
	)
}