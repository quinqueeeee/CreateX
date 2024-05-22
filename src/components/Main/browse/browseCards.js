import React, { useState } from 'react'
// import img1 from "./img/1.png"
// import img2 from "./img/2.png"
// import img3 from "./img/3.png"
import {
	Carousel,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
} from 'reactstrap'


{/* <li class="browse-card splide__slide">
                                <img src={img1} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">Red Finger Building</h2>
                                <p class="browse-card__text">Business Centers</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li>
                            <li class="browse-card splide__slide">
                                <img src={img2} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">Cubes Building</h2>
                                <p class="browse-card__text">Business Centers</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li>
                            <li class="browse-card splide__slide">
                                <img src={img3} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">The Pencil Building</h2>
                                <p class="browse-card__text">Stores & Malls</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li>
                            <li class="browse-card splide__slide">
                                <img src={img1} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">Red Finger Building</h2>
                                <p class="browse-card__text">Business Centers</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li>
                            <li class="browse-card splide__slide">
                                <img src={img2} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">Cubes Building</h2>
                                <p class="browse-card__text">Business Centers</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li>
                            <li class="browse-card splide__slide">
                                <img src={img3} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">The Pencil Building</h2>
                                <p class="browse-card__text">Stores & Malls</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li>
                            <li class="browse-card splide__slide">
                                <img src={img1} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">Red Finger Building</h2>
                                <p class="browse-card__text">Business Centers</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li>
                            <li class="browse-card splide__slide">
                                <img src={img2} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">Cubes Building</h2>
                                <p class="browse-card__text">Business Centers</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li>
                            <li class="browse-card splide__slide">
                                <img src={img3} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">The Pencil Building</h2>
                                <p class="browse-card__text">Stores & Malls</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li>
                            <li class="browse-card splide__slide">
                                <img src={img1} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">Red Finger Building</h2>
                                <p class="browse-card__text">Business Centers</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li>
                            <li class="browse-card splide__slide">
                                <img src={img2} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">Cubes Building</h2>
                                <p class="browse-card__text">Business Centers</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li>
                            <li class="browse-card splide__slide">
                                <img src={img3} alt="img" class="browse-card__img"/>
                                <h2 class="browse-card__title">The Pencil Building</h2>
                                <p class="browse-card__text">Stores & Malls</p>
                                <button class="browse-card__btn _butn">View Project</button>
                            </li> */}

const items = [
	{
		src: 'https://picsum.photos/id/123/1200/400',
		altText: 'Slide 1',
		caption: 'Slide 1',
		key: 1,
	},
	{
		src: 'https://picsum.photos/id/456/1200/400',
		altText: 'Slide 2',
		caption: 'Slide 2',
		key: 2,
	},
	{
		src: 'https://picsum.photos/id/678/1200/400',
		altText: 'Slide 3',
		caption: 'Slide 3',
		key: 3,
	},
]

function Example(args) {
	const [activeIndex, setActiveIndex] = useState(0)
	const [animating, setAnimating] = useState(false)

	const next = () => {
		if (animating) return
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
		setActiveIndex(nextIndex)
	}

	const previous = () => {
		if (animating) return
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
		setActiveIndex(nextIndex)
	}

	const goToIndex = (newIndex) => {
		if (animating) return
		setActiveIndex(newIndex)
	}

	const slides = items.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}
			>
				<img src={item.src} alt={item.altText} />
				<CarouselCaption
					captionText={item.caption}
					captionHeader={item.caption}
				/>
			</CarouselItem>
		)
	})

	return (
		<Carousel
			activeIndex={activeIndex}
			next={next}
			previous={previous}
			{...args}
		>
			<CarouselIndicators
				items={items}
				activeIndex={activeIndex}
				onClickHandler={goToIndex}
			/>
			{slides}
			<CarouselControl
				direction="prev"
				directionText="Previous"
				onClickHandler={previous}
			/>
			<CarouselControl
				direction="next"
				directionText="Next"
				onClickHandler={next}
			/>
		</Carousel>
	)
}

export default Example