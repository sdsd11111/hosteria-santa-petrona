import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VideoExperience from './components/VideoExperience';
import ServicesAndRooms from './components/ServicesAndRooms';
import Testimonials from './components/Testimonials';
import FaqAccordion from './components/FaqAccordion';
import Ubicacion from './components/Ubicacion';
import Footer from './components/Footer';

export default function Home() {
    return (
        <main>
            <Header />
            <HeroSection />
            <AboutSection />
            <VideoExperience />
            <ServicesAndRooms />
            <Testimonials />
            <FaqAccordion />
            <Ubicacion />
            <Footer />
        </main>
    );
}
