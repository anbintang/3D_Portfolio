import NavBar from './components/NavBar.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'

const app = () => {
  return (
    <>
    <NavBar />
    <Hero/>
    <ShowcaseSection />
    <FeatureCards />
    <ExperienceSection />
    <TechStack />
    </>
  )
}

export default app