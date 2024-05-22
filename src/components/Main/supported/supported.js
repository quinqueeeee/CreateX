import './supported.scss'
import img1 from "./img/client-logo-1.png"
import img2 from "./img/client-logo-2.png"
import img3 from "./img/client-logo-3.png"
import img4 from "./img/client-logo-4.png"
import img5 from "./img/client-logo-5.png"
import logo from "./img/client-logo.png"

export default function Supported() {
	return (
		<>
			<section class="supported">
				<div class="supported__container _container">
					<h2 class="header-title supported-title">Supported by 12+ partners</h2>

					<ul class="supported-list">
						<li class="supported-item">
							<a href="#!">
								<img src={img1} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="#!">
								<img src={img2} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="#!">
								<img src={img3} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="#!">
								<img src={img4} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="#!">
								<img src={img5} alt="img"/>
							</a>
						</li>
						<li class="supported-item">
							<a href="#!">
								<img src={logo} alt="img"/>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}