import ContactItem from './ContactItem';

export default function Contact() {
  return (
    <div className='w-screen grid grid-cols-2 gap-10 min-h-[20px] rounded-md bg-white px-4 py-10'>
      <ContactItem name='김윤재' phone='01028630238' description='신랑'/>
      <ContactItem name='이지은' phone='01030854322' description='신부' />
      <ContactItem name='김희택' phone='01012345678' description='신랑 아버지'/>
      <ContactItem name='이창수' phone='01087654321' description='신부 아버지' />
      <ContactItem name='정미자' phone='01023456789' description='신랑 어머니'/>
      <ContactItem name='신명숙' phone='01098765432' description='신부 어머니'/>
    </div>
  );
}