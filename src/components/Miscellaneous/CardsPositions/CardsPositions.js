import './pos-cards.scss'

export default function CardsPositions() {
	return (
		<section class="pos-cards">
			<div class="pos-cards__container _container">
				<div class="pos-cards__content">
					<ul class="pos-cards-left">
						<li class="pos-left">
							<div class="pos-left__left">
								<div class="pos-left-top">
									<p>New York</p>
									<p>Full Time</p>
								</div>
								<h2>Heavy Equipment Operator</h2>
							</div>
							<div class="pos-left__right">
								<button class="_butttn">Apply now</button>
							</div>
						</li>
						<li class="pos-left">
							<div class="pos-left__left">
								<div class="pos-left-top">
									<p>New York</p>
									<p>Full Time</p>
								</div>
								<h2>Financial Compliance Analyst</h2>
							</div>
							<div class="pos-left__right">
								<button class="_butttn">Apply now</button>
							</div>
						</li>
						<li class="pos-left">
							<div class="pos-left__left">
								<div class="pos-left-top">
									<p>New Jersey</p>
									<p>Full Time</p>
								</div>
								<h2>Project Manager - Buildings</h2>
							</div>
							<div class="pos-left__right">
								<button class="_butttn">Apply now</button>
							</div>
						</li>
						<li class="pos-left">
							<div class="pos-left__left">
								<div class="pos-left-top">
									<p>New York</p>
									<p>Part Time</p>
								</div>
								<h2>Environment Specialist</h2>
							</div>
							<div class="pos-left__right">
								<button class="_butttn">Apply now</button>
							</div>
						</li>
						<li class="pos-left">
							<div class="pos-left__left">
								<div class="pos-left-top">
									<p>New York</p>
									<p>Full Time</p>
								</div>
								<h2>Accountant</h2>
							</div>
							<div class="pos-left__right">
								<button class="_butttn">Apply now</button>
							</div>
						</li>
					</ul>
					<ul class="pos-cards-right">
						<li class="pos-right">
							<h2>Didn’t find what you were looking for?</h2>
							<p>Send your CV or subscribe to our newsletter to receive information about new vacancies.
							</p>
							<div class="pos-right__btns">
								<button id='mainbtn' class='_butttn'>subscribe</button>
								<button id='btn2' class='_butttn btn2'>send cv</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}