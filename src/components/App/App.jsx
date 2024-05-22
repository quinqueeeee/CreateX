import HeaderMain from '../Main/header/header'
import Hero from '../Main/hero/hero'
import Values from '../Main/values/values'
import Question from '../Main/question/question'
import Services from '../Main/services/services'
import Browse from '../Main/browse/browse'
import Supported from '../Main/supported/supported'
import Clients from '../Main/clients/clients'
import Facts from '../Main/facts/facts'
import News from '../Main/news/news'
import Details from '../Main/details/details'
import Footer from '../Main/footer/footer'

import HeaderSerives from '../Miscellaneous/HeaderServices/HeaderServices'
import CardsServices from '../Miscellaneous/CardsServices/CardsServices'

import HeaderInterior from '../Miscellaneous/HeaderInterior/HeaderInterior'
import OfferInterior from '../Miscellaneous/OfferInterior/OfferInterior'
import HowInterior from '../Miscellaneous/HowInterior/HowInterior'
import BenefitsInterior from '../Miscellaneous/BenefitsInterior/BenfitsInterior'
import RelactesInterior from '../Miscellaneous/RelactesInterior/RelactesInterior'

import HeaderWork from '../Miscellaneous/HeaderWork/HeaderWork'
import IconsWork from '../Miscellaneous/IconsWork/IconsWork'
import BrowseWork from '../Miscellaneous/BrowseWork/BrowseWork'
import ClientsWork from '../Miscellaneous/ClientsWork/ClientsWork'
import HeaderCottage from '../Miscellaneous/HeaderCottage/HeaderCottage'
import BrowseCottage from '../Miscellaneous/BrowseCotagge/BrowseCotagge'

import HeaderAbousUs from '../Miscellaneous/HeaderAboutUs/HeaderAboutUs'
import CardsAboutUs from '../Miscellaneous/CardsAboutUs/CardsAboutUs'
import AlexAboutUs from '../Miscellaneous/AlexAboutUs/AlexAboutUs'
import BenefitsAboutUs from '../Miscellaneous/BenefitsAboutUs/BenefitsAboutUs'
import HistoryAboutUs from '../Miscellaneous/HistoryAboutUs/HistoryAboutUs'
import SupportedAboutUs from '../Miscellaneous/SupportedAboutUs/SupportedAboutUs'
import TeamAboutUs from '../Miscellaneous/TeamAboutUs/TeamAboutUs'
import MapAboutUs from '../Miscellaneous/MapAboutUs/MapAboutUs'

import HeaderPositions from '../Miscellaneous/HeaderPositions/HeaderPositions'
import ModalOnePositions from '../Miscellaneous/ModalOnePositions/ModalOnePositions'
import ModalTwoPositions from '../Miscellaneous/ModalTwoPositions/ModalTwoPositions'
import CardsPositions from '../Miscellaneous/CardsPositions/CardsPositions'
import BenefitsPositions from '../Miscellaneous/BenefitsPositions/BenefitsPositions'

import HeaderNews from '../Miscellaneous/HeaderNews/HeaderNews'
import CategNews from '../Miscellaneous/CategNews/CategNews'

import HeaderBuild from '../Miscellaneous/HeaderBuild/HeaderBuild'
import MoreBuild from '../Miscellaneous/MoreBuild/MoreBuild'
import TextBuild from '../Miscellaneous/TextBuild/TextBuild'
import CommentBuild from '../Miscellaneous/CommentBuild/CommentBuild'
import FormBuild from '../Miscellaneous/FormBuild/FormBuild'

import HeaderContactUs from '../Miscellaneous/HeaderContactUs/HeaderContactUs'
import ContContactUs from '../Miscellaneous/ContContactUs/ContContactUs'
import OfficeContactUs from '../Miscellaneous/OfficeContactUs/OfficeContactUs'
import FindusContactUs from '../Miscellaneous/FindusContactUs/FindusContactus'

export default function App() {
	return (
		<>
			{/* main */}
			<HeaderMain />
			<main class='main'>
				<Hero />
				<Values/>
				<Question/>
				<Services/>
				<Browse/>
				<Supported/>
				<Clients/>
				<Facts/>
				<News/>
				<Details/>
			</main>
			<Footer/>

			{/* Services */}
			{/* <HeaderSerives />
			<main className="main">
				<CardsServices/>
				<Details/>
			</main>
			<Footer/> */}

			{/* Interior Design */}
			{/* <HeaderInterior />
			<main className='main'>
				<OfferInterior />
				<HowInterior/>
				<BenefitsInterior/>
				<RelactesInterior/>
				<Supported/>
				<Details/>
			</main>
			<Footer/> */}

			{/* Work */}
			{/* <HeaderWork />
			<main className='main'>
				<IconsWork />
				<BrowseWork/>
				<Clients/>
				<Details/>
			</main>
			<Footer/> */}

			{/* Modern Cottage */}
			{/* <HeaderCottage />
			<main className='main'>
				<BrowseCottage />
				<Details/>
			</main>
			<Footer/> */}

			{/* AboutUs */}
			{/* <HeaderAbousUs />
			<main>
				<CardsAboutUs />
				<AlexAboutUs />
				<BenefitsAboutUs />
				<HistoryAboutUs />
				<SupportedAboutUs />
				<TeamAboutUs />
				<MapAboutUs />
				<Details />
			</main>
			<Footer /> */}

			{/* Positions */}
			{/* <HeaderPositions />
			<ModalOnePositions />
			<ModalTwoPositions />
			<main>
				<CardsPositions />
				<BenefitsPositions />
				<Details />
			</main>
			<Footer /> */}

			{/* News */}
			{/* <HeaderNews />
			<main>
				<CategNews />
				<Details />
			</main>
			<Footer /> */}

			{/* Build */}
			{/* <HeaderBuild />
			<main>
				<MoreBuild />
				<TextBuild />
				<CommentBuild />
				<FormBuild/>
				<Details />
			</main>
			<Footer /> */}

			{/* Contacts */}
			{/* <HeaderContactUs />
			<main>
				<ContContactUs/>
				<OfficeContactUs/>
				<FindusContactUs/>
			</main>
			<Footer/> */}
		</>
	)
}
