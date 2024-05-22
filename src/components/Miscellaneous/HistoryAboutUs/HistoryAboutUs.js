import './history.scss'
import img from "./img/image.jpg"

export default function HistoryAboutUs() {
	return (
		<>
			<section class="history">
				<div class="history__container _container">

					<h2 class="header---title title-history">Our history</h2>
					<div class="history-content">
						<ul class="history-left">
							<li class="history-item history-item-active">Present</li>
							<li class="history-item">March 2019</li>
							<li class="history-item">November 2018</li>
							<li class="history-item">July 2015</li>
							<li class="history-item">August 2010</li>
							<li class="history-item">February 2007</li>
							<li class="history-item">May 2004</li>
							<li class="history-item">October 2001</li>
							<li class="history-item">June 2000</li>
						</ul>


						<div class="history-right">
							<ul class="history-list">
								<li class="history-slide-item">
									<img src={img} alt="img" />
									<p>1</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}