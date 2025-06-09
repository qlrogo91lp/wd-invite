import Header from '@components/Header'
import OpeningMessage from '@components/OpeningMessage'
import CustomCountdown from '@components/countdown/CustomCountdown'
import Calendar from '@components/Calendar'
import FamilyNames from '@components/FamliyNames'
import Footer from '@components/Footer'
import Directions from '@components/map/Directions'
import CustomGallery from '@components/CustomGallery'

function App() {
  return (
    <main className='flex flex-col max-w-[440px] mx-auto gap-15'>
      <Header />
      <OpeningMessage />
      <FamilyNames />
      <CustomGallery />
      <CustomCountdown />
      <Calendar />
      <Directions />
      <Footer />
    </main>
  )
}

export default App
