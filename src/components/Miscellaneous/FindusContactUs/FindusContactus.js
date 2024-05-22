import './find.scss'
import img1 from "./img/1.svg"
import img2 from "./img/2.svg"
import img3 from "./img/3.svg"
import img4 from "./img/4.svg"
import img5 from "./img/5.svg"

export default function FindusContactUs() {
	return (
		<>
			<section class="find">
				<div class="_container">
					<h2 class="header-title">Find us at</h2>
					<ul class="find-list">
						<li class="find-item">
							<a href="">
								<img src={img1} alt="img"/>
							</a>
						</li>
						<li class="find-item">
							<a href="">
								<img src={img2} alt="img"/>
							</a>
						</li>
						<li class="find-item">
							<a href="">
								<img src={img3} alt="img"/>
							</a>
						</li>
						<li class="find-item">
							<a href="">
								<img src={img4} alt="img"/>
							</a>
						</li>
						<li class="find-item">
							<a href="">
								<img src={img5} alt="img"/>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}