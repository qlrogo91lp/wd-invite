import Header from '@components/Header'
import OpeningMessage from '@components/OpeningMessage'
import CustomCountdown from '@components/countdown/CustomCountdown'
import Calendar from '@components/Calendar'
import FamilyNames from '@components/FamliyNames'
import Footer from '@components/Footer'
import Directions from '@components/map/Directions'
import CustomGallery from '@components/CustomGallery'
import ShareButton from '@components/ShareButton'
import CommentBox from '@components/comment/CommentBox'
import Title from '@components/common/Title'
import Description from '@components/Description.tsx';
import Account from '@components/Account.tsx';

export default function App() {
  return (
    <main className='flex flex-col max-w-[440px] mx-auto gap-15'>
      <Header />
      <Title title='Invite you' />
      <OpeningMessage />
      <FamilyNames />
      <Title title='Gallery' />
      <CustomGallery />
      <CustomCountdown />
      <Title title='Calendar' />
      <Calendar />
      <Title title='Location' />
      <Directions />
      <Description/>
      <ShareButton />
      <Title title='Contact' subTitle='마음 전하실 곳' />
      <Account />
      <Title title='Guestbook' subTitle='방명록'/> 
      <CommentBox />
      <Footer />
    </main>
  )
}