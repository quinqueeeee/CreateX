import './modal.scss'

export default function ModalTwoPositions() {
	return (
		<>
			<div id='modal2' class="modal2 activee">
				<div class="modal2-content">
					<form action="" class="modal2-form">
						<h2 class='title-modal'>Send your CV</h2>
						<p class='subtitle-modal'>Name*</p>
						<input class='input-modal' placeholder='Your name' type="text" />
						<p class='subtitle-modal'>Location*</p>
						<input class='input-modal' placeholder='Choose your location' type="text" />
						<p class='subtitle-modal'>Phone*</p>
						<input class='input-modal' placeholder='Your phone number' type="text" />
						<p class='subtitle-modal'>Email*</p>
						<input class='input-modal' placeholder='Your working email' type="text" />
						<p class='subtitle-modal'>Сovering letter</p>
						<input class='input-modal input-modal-last' placeholder='Your covering letter' type="text" />
						<p class='subtitle-modal subtitle-modal2'>Attach your CV*</p>
						<button class='btn-modal _butn'>send</button>
						<div id='btn-dis' class="but but1  button1">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.99999 6.58578L14.2929 0.292893C14.6834 -0.0976313 15.3166 -0.0976307 15.7071 0.292894C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.41421 7.99999L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L7.99999 9.41421L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292894 15.7071C-0.0976307 15.3166 -0.0976313 14.6834 0.292893 14.2929L6.58578 7.99999L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
									fill="#787A80" />
							</svg>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}