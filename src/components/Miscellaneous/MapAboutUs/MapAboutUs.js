import './map.scss'
import img from "./img/image.jpg"

export default function MapAboutUs() {
	return (
		<>
			<section class="map">
				<div class="map__container _container">
					<h2 class="header-title map-title">We work worldwide</h2>

					<div class="map-block">
						<img src={img} alt="img"/>
					</div>
				</div>
			</section>
		</>
	)
}