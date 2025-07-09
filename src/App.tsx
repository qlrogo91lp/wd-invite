import Header from '@components/Header';
import OpeningMessage from '@components/OpeningMessage';
import CustomCountdown from '@components/countdown/CustomCountdown';
import Calendar from '@components/Calendar';
import FamilyNames from '@components/FamliyNames';
import Footer from '@components/Footer';
import Directions from '@components/map/Directions';
import CustomGallery from '@components/gallery/CustomGallery.tsx';
import ShareButton from '@components/ShareButton';
import CommentBox from '@components/comment/CommentBox';
import Title from '@components/common/Title';
import Description from '@components/Description.tsx';
import Account from '@components/account/Account.tsx';
import BottomBar from '@components/common/BottomBar';

export default function App() {
  return (
    <main className="flex flex-col w-[440px] mx-auto gap-15 bg-[rgba(253,250,250,1))] mb-[45px]">
      <Header />
      <Title title="Invite you" />
      <OpeningMessage />
      <FamilyNames />
      <Title title="Gallery" />
      <CustomGallery />
      <Title title="Calendar" />
      <Calendar />
      <CustomCountdown />
      <Title title="Location" />
      <Directions />
      <Description />
      <ShareButton />
      <Title title="Contact" subTitle="마음 전하실 곳" />
      <Account />
      <Title title="Guestbook" subTitle="방명록" />
      <CommentBox />
      <Footer />
      <BottomBar />
    </main>
  );
}