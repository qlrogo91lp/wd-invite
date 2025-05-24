import Header from '@components/Header'
import CommentBox from './components/CommentBox'
import OpeningMessage from '@components/OpeningMessage'
import ScrollFadeIn from '@components/common/ScrollFadeIn'

function App() {
  return (
    <main className='flex flex-col max-w-[440px] mx-auto'>
      <Header />
      <ScrollFadeIn>
        <OpeningMessage />
      </ScrollFadeIn>
      <CommentBox />
    </main>
  )
}

export default App
