import './details.scss'


export default function Details() {
	return (
		<>
			<section class="details">
				<div class="details__container _container">
					<div class="details-content">
						<div class="details-content-inner">
							<div class="details-content-inner__inner">
								<h3 class="details-content__title">A quick way to discuss details</h3>
								<form class="details-form">
									<p class="details-form__title">Name*</p>
									<input type="text" placeholder='Your name' class="details-form__input" />

									<p class="details-form__title">Phone*</p>
									<input type="text" placeholder='Your phone number' class="details-form__input" />

									<p class="details-form__title">Email</p>
									<input type="text" placeholder='Your working email' class="details-form__input" />

									<p class="details-form__title">Message*</p>
									<input type="text" placeholder='Your message' class="details-form__input" />


									<div class="details-form-block-text">
										<input type="checkbox" />
										<p class="details-form__text">I agree to receive communications from Createx
											Construction Bureau.</p>
									</div>
									<div class="details-form__btn-block">
										<button class="details-form__btn _butn">send request</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}