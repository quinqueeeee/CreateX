import './form.scss'

export default function FormBuild() {
	return (
		<>
			<section class="form">
				<div class="form__container _container">
					<form class="form-form">
						<h2 class="header-title form-title">Leave your comment</h2>
						<div class="form__top">
							<div class="form__top-content">
								<p>Name*</p>
								<input placeholder='Your name' type="text" />
							</div>
							<div class="form__top-content">
								<p>Email*</p>
								<input placeholder='Your working email' type="text" />
							</div>
						</div>
						<div class="form_bot">
							<p>Your comment*</p>
							<input placeholder='Type comment here' type="text" />
						</div>
						<button class='_butn'>Post comment</button>
					</form>
				</div>
			</section>
		</>
	)
}