import './more.scss'
import img from "./img/image.jpg"

export default function MoreBuild () {
	return (
		<>
		<section class="more">
			<div class="_container">
				<div class="more__img">
					<img src={img} alt="img"/>
				</div>
			</div>
		</section>
		</>
	)
}