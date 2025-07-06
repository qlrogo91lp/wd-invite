import { SpaceBlock } from '@components/common/SpaceBlock.tsx';
import Accordion from '@components/account/Accordion.tsx';
import AccountItem from '@components/account/AccountItem.tsx';

export default function Account() {
  return (
    <section className='flex flex-col gap-4'>
      <header className="flex flex-col items-center justify-center p-6 text-xs">
        <p>참석이 어려워 직접 축하를 전하지 못하는</p>
        <SpaceBlock />
        <p>분들을 위해 계좌번호를 기재하였습니다.</p>
        <SpaceBlock />
        <p>넓은 마음으로 양해 부탁드립니다.</p>
        <SpaceBlock />
        <p>전해주시는 진심은 소중하게 간직하여</p>
        <SpaceBlock />
        <p>좋은 부부의 모습으로 보답하겠습니다.</p>
      </header>
      <Accordion title='신랑측'>
        <AccountItem type='신랑' name='김윤재' bank='신한' account='110-315-986280' />
        <AccountItem type='아버지' name='김희택' bank='농협' account='356-0582-9567-03' />
        <AccountItem type='어머니' name='정미자' bank='신한' account='352-1497-5530-23' />
      </Accordion>
      <Accordion title='신부측'>
        <AccountItem type='신부' name='이지은' bank='신한' account='110-537-308383' />
        <AccountItem type='아버지' name='이창수' bank='기업' account='589-009185-01-011' />
        <AccountItem type='어머니' name='신명숙' bank='기업' account='589-009352-01-018' />
      </Accordion>
    </section>

  );
}