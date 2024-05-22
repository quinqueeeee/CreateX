import './alex.scss'
import img from "./img/image.png"
import logo from "./img/log.svg"

export default function AlexAboutUs() {
	return (
		<>
			<section class="alex">
				<div class="alex__container _container">
					<div class="alex-content">
						<div class="alex-left">
							<img src={img} alt="img" />
						</div>
						<div class="alex-right">
							<div class="alex-right__content">
								<p class='text-bot'>Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed
									aliquet in egestas hac
									at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus
									purus
									vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.
								</p>
								<p>Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend
									amet. Vet suspendisse faucibus tempor ipsum integer.</p>

								<div class="alex-right__bottom">
									<div class="alex-bottom-left">
										<p>Courtney Alexander</p>
										<p>CEO - Createx Construction Bureau </p>
									</div>
									<div class="alex-bottom-left">
										<img src={logo} alt="img" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}