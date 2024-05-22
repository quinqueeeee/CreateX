import './question.scss'

export default function Question() {
	return (
		<>
			<section class="question">
				<div class="question__container _container">
					<h2 class="question__title">Want to know more? Ask us a question:</h2>

					<form class="question-forms">
						<div class="question-form">
							<h2 class="question-form__title">Name</h2>
							<input class='question-form__input' placeholder='Your name' type="text"/>
						</div>
						<div class="question-form">
							<h2 class="question-form__title">Phone</h2>
							<input class='question-form__input' placeholder='Your phone' type="text"/>
						</div>
						<div class="question-form">
							<h2 class="question-form__title">Message</h2>
							<input class='question-form__input-last' placeholder='Your message' type="text"/>
						</div>
						<button class="question-btn _butn">Send</button>
					</form>
				</div>
			</section>
		</>
	)
}