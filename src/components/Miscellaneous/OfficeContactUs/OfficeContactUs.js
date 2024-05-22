import './office.scss'

export default function OfficeContactUs() {
	return (
		<>
			<section class="office">
				<div class="_container">
					<h2 class="header-title office-title">Our offices</h2>
					<p class="header-text office-text">Give us a call, send us a note or visit our office. We can’t wait to
						hear from you!</p>
					<ul class="office-list">
						<li class="office-item office-item-first">
							<h2>New York, USA</h2>
							<p>8502 Preston Rd. Inglewood, New York 98380</p>
							<span>See on the map</span>
							<a href='tel:'><span>Call:</span> (405) 555-0128</a>
							<a href='mailto:'><span>Email:</span> hello@createx.com</a>
							<a href='#!'><span>Schedule:</span> Mon - Fri 9:00 - 18:00</a>
						</li>
						<li class="office-item office-item-last">
							<h2>New Jersey, USA</h2>
							<p>2464 Royal Ln. Mesa, New Jersey 45463</p>
							<span>See on the map</span>
							<a href='tel:'><span>Call:</span> (808) 555-0111</a>
							<a href='mailto:'><span>Email:</span> hello@createx.com</a>
							<a href='#!'><span>Schedule:</span> Mon - Fri 9:00 - 18:00</a>
						</li>
						<li class="office-item">
							<h2>San Francisco, USA</h2>
							<p>8502 Preston Rd. Inglewood, San Francisco 98380</p>
							<span>See on the map</span>
							<a href='tel:'><span>Call:</span> (505) 555-0125</a>
							<a href='mailto:'><span>Email:</span> hello@createx.com</a>
							<a href='#!'><span>Schedule:</span> Mon - Fri 10:00 - 19:00</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}