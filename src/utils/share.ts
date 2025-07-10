export function shareWithKakaoTemplate() {
  window.Kakao.Share.sendCustom({
    templateId: 121369,
    templateArgs: {
      title: '윤재와 지은의 결혼식',
      desc: '윤재와 지은의 결혼식 초대장',
      link: 'https://wd-invite.vercel.app',
    },
  });
}