import './comment.scss'

export default function CommentBuild() {
	return (
		<>
			<section class="comment">
				<div class="comment__container _container">
					<h2 class="header-title comment-title">4 comments</h2>
					<div class="comment-content">
						<ul class="comment-list">
							<li class="comment-item">
								<div class="comment__left">
									<h5>Devon Lane</h5>
									<p>July 15, 2020</p>
								</div>
								<div class="comment__right">
									<p>Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum
										malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor
										sed
										eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis
										purus
										diam et.</p>
									<a href="#!">Reply</a>
								</div>
							</li>
							<li class="comment-item">
								<div class="comment__left">
									<h5>Annette Black</h5>
									<p>1 day ago</p>
								</div>
								<div class="comment__right">
									<p><span>@Devon Lane</span> Egestas fermentum natoque sollicitudin mauris. Facilisis
										praesent urna sed
										rhoncus quis pharetra pellentesque erat sagittis.</p>
									<a href="#!">Reply</a>
								</div>
							</li>
							<li class="comment-item">
								<div class="comment__left">
									<h5>Albert Flores</h5>
									<p>July 7, 2020</p>
								</div>
								<div class="comment__right">
									<p>Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames
										faucibus nisl duis id diam.</p>
									<a href="#!">Reply</a>
								</div>
							</li>
							<li class="comment-item">
								<div class="comment__left">
									<h5>Marvin McKinney</h5>
									<p>June 28, 2020</p>
								</div>
								<div class="comment__right">
									<p>Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit
										consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas
										congue
										nibh dui a nulla.</p>
									<a href="#!">Reply</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}