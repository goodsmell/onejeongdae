import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, Volume2, X, ChevronRight, Clock } from 'lucide-react';
import Thumnail1 from './assets/thumnail1.png';
import poster from './assets/poster.png';
import map from './assets/map.png';

const App = () => {
  const [isMuted, setIsMuted] = useState(true);

  // 'JavaScript의 프로토타입 체인' 포스터 컨셉에 맞춘 데이터
  const dramaInfo = {
    subtitle: 'JavaScript의 숨겨진 연결고리, 그 거대한 사슬의 진실',
    year: '2026',
    category: '개발 액션 시리즈',
    rating: '18+ (지나치게 지적이라 뇌 정지 주의)',
    matchScore: '99% 일치',
    tags: ['4K', 'HDR', 'Dolby Vision', 'JS Engine Optimized'],
    synopsis:
      '조용한 객체 리터럴 마을. 내가 만든 적 없는 `toString()`이 호출되며 마을이 술렁인다. 이건 귀신의 곡소리인가, 아니면 상속의 흔적인가? 연결 고리를 추적하던 두 개발자는 마침내 Object.prototype이라는 거대한 진실 앞에 마주하게 되는데... 사라진 메모리를 찾기 위한 지독한 추격전이 시작된다.',
    cast: ['거대 몬스터(Prototype Monster - 메모리 포식자)'],
    genres: ['테크 스릴러', '판타지 액션', 'SF 서스펜스'],
    characteristics: ['긴장감 넘치는', '폭발적인', '지적인'],
    bgImage: poster,
    map: map,
    schedule: {
      frontend: ['10:10 ~ 11:00', '11:20 ~ 12:10'],
      backend: ['15:00 ~ 15:50', '16:00 ~ 16:50'],
    },
    episodes: [
      {
        id: 1,
        title: '프로토타입이라는 소문',
        duration: '12분',
        description: '마을엔 하나의 소문이 돈다. JS 세계엔 보이지 않는 연결이 있다고,,,',
        thumbnailColor: 'from-orange-900/40',
        thumbnail: Thumnail1,
      },
      {
        id: 2,
        title: '내가 만들지 않은 능력들 : toString(), push()',
        duration: '15분',
        description:
          '소문은 끝내 현실이 된다. 아무도 심어둔 적 없는 `toString()`이 모습을 드러내고, 배열들은 태연하게 `push()`를 꺼내 든다. ',
        thumbnailColor: 'from-red-900/40',
        thumbnail: Thumnail1,
      },
      {
        id: 3,
        title: '무한 복제의 저주를 풀어라 - 메모리 구원 작전',
        duration: '11분',
        description:
          '보이지 않는 연결이 없었다면, 모든 객체는 같은 기술을 하나씩 따로 들고 싸워야 했다.끝없는 복제, 끝없는 낭비. 하지만 표지판을 따라 필요한 힘만 빌려 쓸 수 있게 되자, 이 세계의 질서는 완전히 달라지기 시작한다.',
        thumbnailColor: 'from-gray-800/40',
        thumbnail: Thumnail1,
      },
      {
        id: 4,
        title: '섀도잉: 부모를 지운 아이',
        duration: '11분',
        description:
          '같은 이름의 메서드가 나타나 부모를 가려버렸다. 복수가 아닌, 다형성을 위한 JS의 설계 의도.',
        thumbnailColor: 'from-gray-800/40',
        thumbnail: Thumnail1,
      },
      {
        id: 5,
        title: '(최종화): 최후의 심판: 0%의 정답률',
        duration: '10분',
        description:
          "모든 사슬의 비밀을 푼 자만이 도달할 수 있는 마지막 테스트. 당신은 과연 프로토타입의 미로를 빠져나와 '상속의 마스터'가 될 수 있을 것인가? 오직 정답만이 당신을 'null'의 허무로부터 구원할 것이다.",
        thumbnailColor: 'from-red-800/40',
        thumbnail: Thumnail1,
      },
    ],
  };

  // 미리보기(Preview) 환경을 위한 이미지 처리
  const displayImage =
    dramaInfo.bgImage && dramaInfo.bgImage.includes('.jpg')
      ? 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2000'
      : dramaInfo.bgImage;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-600">
      {/* 메인 컨테이너 (모달 스타일) */}
      <div className="relative w-full max-w-5xl mx-auto bg-[#181818] shadow-[0_0_80px_rgba(255,68,0,0.15)] md:rounded-xl overflow-hidden  border border-orange-900/20">
        {/* 상단 닫기 버튼 */}
        <button className="absolute z-50 p-2 transition-all border rounded-full top-4 right-4 md:top-5 md:right-5 bg-black/60 hover:bg-black/80 border-white/10">
          <X size={24} />
        </button>

        {/* 히어로 섹션 */}
        <div className="relative w-full h-screen">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${displayImage})`,
              filter: 'brightness(0.7)',
              backgroundPosition: 'center 100%', // 모달에서 상단이 잘 보이지 않도록 중앙보다 살짝 위로 조정
            }}
          >
            {/* 오버레이 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/20 to-transparent" />
            <div className="absolute inset-0 hidden from-black/80 via-transparent to-transparent md:block" />
          </div>

          {/* 히어로 콘텐츠 */}
          <div className="absolute z-10 bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12">
            <div className="mb-4 md:mb-6">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <span className="bg-red-600 text-white text-[8px] md:text-[10px] font-black px-1.5 md:px-2 py-0.5 rounded-sm tracking-tighter uppercase">
                  Netflix Series
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-9xl font-black italic tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,1)] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-2 leading-none">
                {dramaInfo.title}
              </h1>
              <p className="text-sm md:text-lg text-gray-400 font-semibold tracking-normal md:tracking-[0.2em] uppercase pl-1 drop-shadow-md">
                {dramaInfo.subtitle}
              </p>
            </div>

            {/* 컨트롤 버튼부 */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <button className="flex items-center gap-2 md:gap-3 bg-white text-black px-6 md:px-10 py-2 md:py-3.5 rounded-md font-black text-sm md:text-lg hover:bg-gray-200 transition-all transform active:scale-95 shadow-lg">
                <Play fill="black" size={20} className="md:w-6 md:h-6" />
                재생
              </button>
              <button className="p-2 md:p-3.5 rounded-full border-2 border-gray-400 bg-black/40 hover:border-white transition-all transform active:scale-95 group backdrop-blur-sm">
                <Plus
                  size={20}
                  className="transition-transform md:w-6 md:h-6 group-hover:scale-110"
                />
              </button>
              <button className="p-2 md:p-3.5 rounded-full border-2 border-gray-400 bg-black/40 hover:border-white transition-all transform active:scale-95 group backdrop-blur-sm">
                <ThumbsUp
                  size={20}
                  className="transition-transform md:w-6 md:h-6 group-hover:scale-110"
                />
              </button>

              <div className="flex items-center gap-2 ml-auto md:gap-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 md:p-3.5 rounded-full border-2 border-gray-400 bg-black/40 hover:border-white transition-all backdrop-blur-sm"
                >
                  <Volume2
                    size={20}
                    className={`md:w-6 md:h-6 ${isMuted ? 'opacity-40' : 'opacity-100'}`}
                  />
                </button>
                <div className="flex items-center h-8 pl-2 pr-4 border-l rounded-r-sm border-white/20 md:h-12 md:pl-4 bg-black/30 md:pr-6">
                  <span className="text-[10px] md:text-sm font-black tracking-tighter border-2 border-white/60 px-1.5 md:px-2 py-0.5 rounded-sm whitespace-nowrap">
                    {dramaInfo.rating.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-10 md:top-12 left-0 bg-red-600 text-white text-[10px] md:text-xs font-black px-3 md:px-4 py-1 md:py-1.5 shadow-xl flex items-center gap-1 md:gap-2">
            <span className="text-base leading-none md:text-lg">!?쫄?!</span>
            <span className="w-px h-3 bg-white/40" />
            <span>오늘 한국에서 1위</span>
          </div>
        </div>

        {/* 상세 정보 컨텐츠 */}
        <div className="flex flex-col gap-8 p-6 md:p-12 md:pt-10 md:flex-row md:gap-16">
          <div className="flex-[2] space-y-6 md:space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-sm font-bold md:gap-4 md:text-base">
              <span className="font-extrabold text-green-500">{dramaInfo.matchScore}</span>
              <span className="text-gray-400">{dramaInfo.year}</span>
              <span className="text-gray-400">{dramaInfo.category}</span>
              <div className="flex flex-wrap gap-1.5">
                {dramaInfo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 md:px-2 py-0.5 border border-gray-600 text-[8px] md:text-[10px] font-black rounded-sm text-gray-400 uppercase tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="flex flex-wrap items-center gap-2 text-xl italic font-black text-orange-500 md:text-2xl">
                너 프로토타입 체인 알아?{' '}
                <span className="not-italic text-white">모르면 와야지 뭐해</span>
              </h3>
              <p className="text-lg md:text-2xl leading-[1.6] text-gray-300 font-light tracking-tight">
                {dramaInfo.synopsis}
              </p>
            </div>
          </div>
        </div>

        {/* 회차 리스트 섹션 */}
        <div className="px-6 pb-12 md:px-12 md:pb-16">
          <div className="flex items-center justify-between pt-8 mb-6 border-t border-gray-800 md:pt-10 md:mb-8">
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">회차</h2>
            <div className="text-sm font-bold text-gray-400 md:text-lg">시즌 1</div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {dramaInfo.episodes.map((ep) => (
              <div
                key={ep.id}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 p-4 md:p-8 rounded-lg bg-[#252525]/20 hover:bg-[#252525] transition-all border border-transparent hover:border-orange-900/30"
              >
                {/* 회차 번호 */}
                <span className="hidden w-8 text-2xl font-black text-center text-gray-600 transition-colors sm:block md:text-3xl group-hover:text-orange-500">
                  {ep.id}
                </span>

                {/* 썸네일 영역 (이미지 추가됨) */}
                <div className="w-full sm:w-40 md:w-56 aspect-video bg-[#111] rounded-md overflow-hidden flex-shrink-0 relative shadow-2xl border border-white/5">
                  {/* 썸네일 이미지 */}
                  {ep.thumbnail && (
                    <img
                      src={ep.thumbnail}
                      alt={ep.title}
                      className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {/* 호버 시 나타나는 재생 아이콘 */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 bg-black/60">
                    <div className="p-2 border-2 border-white rounded-full md:p-3">
                      <Play fill="white" size={20} className="md:w-6 md:h-6 translate-x-0.5" />
                    </div>
                  </div>
                  {/* 시네마틱 오버레이 그라데이션 */}
                  <div
                    className={`w-full h-full bg-gradient-to-br ${ep.thumbnailColor} to-black opacity-40 absolute inset-0 z-10`}
                  />
                  <div className="absolute inset-0 transition-all bg-black/20 group-hover:bg-transparent" />

                  {/* 모바일용 회차 번호 배지 */}
                  <div className="absolute z-30 px-2 py-1 text-xs font-bold text-white rounded top-2 left-2 bg-black/70 sm:hidden">
                    {ep.id}
                  </div>
                </div>

                {/* 에피소드 정보 */}
                <div className="flex-1 space-y-1.5 md:space-y-3 w-full">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-base font-black leading-tight transition-colors md:text-xl group-hover:text-orange-500">
                      {ep.title}
                    </h4>
                    <span className="text-[10px] md:text-sm font-black text-gray-500 uppercase tracking-widest bg-black/40 px-1.5 md:px-2 py-0.5 md:py-1 rounded shrink-0">
                      {ep.duration}
                    </span>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-gray-400 transition-colors md:text-lg group-hover:text-gray-300 line-clamp-2 sm:line-clamp-none">
                    {ep.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 맵(Map) 및 세션 일정 섹션 */}
        <div className="px-6 pb-12 md:px-12 md:pb-16">
          <div className="flex items-center justify-between pt-8 mb-6 border-t border-gray-800 md:pt-10 md:mb-8">
            <div className="flex items-center gap-3">
              {/* <MapIcon className="text-orange-500" size={28} /> */}
              <h2 className="text-2xl font-black tracking-tight md:text-3xl">장소 및 시간</h2>
            </div>
          </div>

          <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-3">
            {/* 왼쪽: 지도 이미지 */}
            <div className="lg:col-span-2 relative overflow-hidden rounded-lg bg-[#111] border border-white/10 shadow-2xl group/map">
              <img
                src={dramaInfo.map}
                alt="Prototype Map"
                className="w-full h-auto transition-transform duration-700 group-hover/map:scale-105"
              />
              <div className="absolute inset-0 flex items-end p-6 transition-opacity opacity-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover/map:opacity-100">
                <p className="text-sm font-bold text-orange-500">12층 디스커버리로 오세요!</p>
              </div>
            </div>

            {/* 오른쪽: 세션 일정 카드 */}
            <div className="bg-[#2a2a2a] p-6 rounded-xl border border-white/10 shadow-lg space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                <Clock className="text-orange-500" size={20} />
                <h3 className="text-lg font-black tracking-tight uppercase">발표 세션 일정</h3>
              </div>

              <div className="space-y-6">
                {/* 프론트엔드 세션 */}
                <div>
                  <h4 className="flex items-center gap-2 mb-3 text-sm font-black text-orange-500">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    프론트엔드 세션
                  </h4>
                  <ul className="space-y-2">
                    {dramaInfo.schedule.frontend.map((time, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between px-4 py-3 transition-colors border rounded-md bg-black/30 border-white/5 group hover:border-orange-500/50"
                      >
                        <span className="text-xs font-bold text-gray-400">SESSION {idx + 1}</span>
                        <span className="text-sm font-black text-white">{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 백엔드 세션 */}
                <div>
                  <h4 className="flex items-center gap-2 mb-3 text-sm font-black text-blue-400">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    백엔드 세션
                  </h4>
                  <ul className="space-y-2">
                    {dramaInfo.schedule.backend.map((time, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between px-4 py-3 transition-colors border rounded-md bg-black/30 border-white/5 group hover:border-blue-400/50"
                      >
                        <span className="text-xs font-bold text-gray-400">SESSION {idx + 1}</span>
                        <span className="text-sm font-black text-white">{time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 영역 */}
      <div className="flex flex-col items-center justify-center pb-16 transition-all duration-700 cursor-default md:pb-24 opacity-20 hover:opacity-100 group">
        <ChevronRight
          size={32}
          className="mb-2 text-orange-600 rotate-90 group-hover:animate-bounce md:w-10 md:h-10"
        />
        <span className="text-[8px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-gray-400 text-center px-4">
          Advanced Labs | Development & Innovation
        </span>
      </div>
    </div>
  );
};

export default App;
