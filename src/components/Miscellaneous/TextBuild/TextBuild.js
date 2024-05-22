import './text.scss'
import img1 from "./img/1.svg"
import img2 from "./img/2.svg"
import img3 from "./img/3.svg"

export default function TextBuild () {
	return (
		<>
		<section class='text'>
			<div class="text__container _container">
				<div class="text-content">
					<h3>Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum
						aenean
						sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac
						euismod. </h3>
					<p class='lo'>At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et
						sagittis,
						vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus
						ornare
						pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl
						lacinia
						amet, odio. Mi varius viverra risus vel.</p>
					<p class='loo'>Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat
						lectus libero duis.
						Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet
						non
						sed
						duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut
						aliquet
						velit pharetra, nisi nunc, non.</p>
					<h3 class='la'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
						viverra mus
						lobortis
						fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis
						non.
						Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.</h3>
					<p class='looo'>Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis.
						Vitae mus blandit in
						neque amet non fringilla blandit:</p>
					<ul class="text-list">
						<li class="text-item">
							<p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
						</li>
						<li class="text-item">
							<p>Vulputate placerat amet pulvinar lorem nisl.</p>
						</li>
						<li class="text-item">
							<p>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
						</li>
						<li class="text-item">
							<p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
						</li>
					</ul>
					<p class='loooo'>Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo.
						Nisi in ornare
						lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas.
						Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue
						mattis
						tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla.
						Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.</p>
					<div class="share">
						<p>Share:</p>
						<div class="share-block">
							<a href=""><img src={img1} alt="img"/></a>
							<a href=""><img src={img2} alt="img"/></a>
							<a href=""><img src={img3} alt="img"/></a>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}