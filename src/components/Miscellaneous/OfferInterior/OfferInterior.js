import './offer.scss'
import img1 from "./img/offer.png"

export default function OfferInterior () {
	return (
		<section class="offer">
			<div class="offer__container _container">
				<div class="offer-content">
					<div class="offer-content-left">
						<img src={img1} alt="img"/>
					</div>
					<div class="offer-content-right">
						<h2>We offer</h2>
						<h3 class='offerbtnn offeractive' id='offerbtn1'>Interior design of apartments</h3>
						<p id='offertext1' class='none'>Adipiscing nunc arcu enim elit mattis eu placerat proin.
							Imperdiet elementum
							faucibus
							dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
						</p>
						<h3 class='offerbtnn offeractive' id='offerbtn2'>Interior design of private houses
						</h3>
						<p id='offertext2' class='none'>Adipiscing nunc arcu enim elit mattis eu placerat proin.
							Imperdiet elementum
							faucibus
							dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}