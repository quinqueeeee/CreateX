import './news.scss'
import img1 from "./img/11.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"


export default function News () {
	return (
		<section class="news">
            <div class="news__container _container">
                <h2 class="header-title header-title-news">Recent news</h2>

                <ul class="news-list">
                    <li class="newss-item-first">
                        <img src={img1} alt="img" class="news-item__img-big"/>
                        <h3 class="news-item__title">How to Build Climate Change-Resilient Infrastructure</h3>
                        <div class="news-item-inner">
                            <p class="news-item-inner__name">Industry News</p>
                            <p class="news-item-inner__name">June 24, 2020</p>
                            <p class="news-item-inner__name news-item-inner-last">4 comments
                            </p>
                        </div>
                        <p class="newss-item__text">Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus.
                            Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh
                            convallis...</p>
                    </li>
                    <li class="newss-item">
                        <img src={img2} alt="img" class="news-item__img"/>
                        <h3 class="news-item__title">How Construction Can Help Itself</h3>
                        <div class="news-item-inner">
                            <p class="news-item-inner__name">Innovation</p>
                            <p class="news-item-inner__name">June 12, 2020</p>
                            <p class="news-item-inner__name news-item-inner-last">No comments</p>
                        </div>
                    </li>
                    <li class="newss-item">
                        <img src={img3} alt="img" class="news-item__img"/>
                        <h3 class="news-item__title">Types of Flooring Materials</h3>
                        <div class="news-item-inner">
                            <p class="news-item-inner__name">Company News</p>
                            <p class="news-item-inner__name">December 1, 2019</p>
                            <p class="news-item-inner__name news-item-inner-last">No comments</p>
                        </div>
                    </li>
                </ul>
                <div class="bottom-block">
                    <h2 class="bottom-block__title">Explore all our news posts</h2>
                    <button class="bottom-block__btn _butn">View all news</button>
                </div>
            </div>
        </section>
	)
}