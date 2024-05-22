import './contactus.scss'
import img from "./img/image.png"

export default function ContContactUs() {
	return (
		<>
			<section class="contactus">
				<div class="_container">
					<h2 class="header-title contactus--title">Contact us</h2>
					<p class="header-text contactus--text">Please complete the form. Detailed information will help us to
						make a tuned offer.</p>

					<div class="contactus-content">
						<div class="contactus-left">
							<img src={img} alt="img"/>
						</div>
						<div class="contactus-right">
							<form class="contactus-form">
								<ul class="contactus-list1">
									<li class="contactus-item1">
										<p>Name*</p>
										<input class='contact-input' placeholder='Your name' type="text"/>
									</li>
									<li class="contactus-item1">
										<p>I am interested in</p>
										<input class='contact-input' placeholder='Interior Design' type="text"/>
									</li>
								</ul>
								<ul class="contactus-list2">
									<li class="contactus-item2">
										<p>Phone*</p>
										<input class='contact-input' placeholder='Your phone number' type="text"/>
									</li>
									<li class="contactus-item2">
										<p>Location*</p>
										<input class='contact-input' placeholder='Your location' type="text"/>
									</li>
								</ul>
								<ul class="contactus-list3">
									<li class="contactus-item3">
										<p>Email</p>
										<input class='contact-input' placeholder='Your working email' type="text"/>
									</li>
								</ul>
								<div class="contactus-item4">
									<p>Message*</p>
									<input class='contact-input-last' placeholder='Your message' type="text"/>
								</div>
								<div class="contactus-item5">
									<div class="item5-left">
										<input type="checkbox"/>
											<p>I agree to receive communications from Createx Construction Bureau.</p>
									</div>
									<div class="item5-right">
										<button>send request</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}