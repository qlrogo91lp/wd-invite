import Header from '@components/Header'
import CommentBox from './components/CommentBox'
import OpeningMessage from '@components/OpeningMessage'
import ScrollFadeIn from '@components/common/ScrollFadeIn'
import CustomCountdown from '@components/countdown/CustomCountdown'
import Calendar from '@components/Calendar'

function App() {
  return (
    <main className='flex flex-col max-w-[440px] mx-auto'>
      <Header />
      <ScrollFadeIn>
        <OpeningMessage />
        <CustomCountdown />
        <Calendar />
      </ScrollFadeIn>
      <CommentBox />
    </main>
  )
}

export default App
