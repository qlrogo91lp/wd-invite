import Header from '@components/Header'
import OpeningMessage from '@components/OpeningMessage'
import ScrollFadeIn from '@components/common/ScrollFadeIn'
import CustomCountdown from '@components/countdown/CustomCountdown'
import Calendar from '@components/Calendar'
import CommentBoxSuspense from '@components/comment/CommentBoxSuspense'

function App() {
  return (
    <main className='flex flex-col max-w-[440px] mx-auto'>
      <Header />
      <ScrollFadeIn>
        <OpeningMessage />
        <CustomCountdown />
        <Calendar />
        <CommentBoxSuspense />
      </ScrollFadeIn>
    </main>
  )
}

export default App
