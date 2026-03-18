import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, Volume2, X, Info, ChevronRight, Share2 } from 'lucide-react';
import poster from './assets/poster.png';
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
      '조용한 객체 리터럴 마을. 내가 만든 적 없는 toString()이 호출되며 마을이 술렁인다. 이건 귀신의 곡소리인가, 아니면 상속의 흔적인가? 연결 고리를 추적하던 두 개발자는 마침내 Object.prototype이라는 거대한 진실 앞에 마주하게 되는데... 사라진 메모리를 찾기 위한 지독한 추격전이 시작된다.',
    cast: ['거대 몬스터(Prototype Monster - 메모리 포식자)'],
    genres: ['테크 스릴러', '판타지 액션', 'SF 서스펜스'],
    characteristics: ['긴장감 넘치는', '폭발적인', '지적인'],
    bgImage: poster,
    episodes: [
      {
        id: 1,
        title: '사라진 toString()의 행방',
        duration: '10분',
        description:
          '객체 리터럴 하나가 던진 파장. 내 객체엔 없는데 왜 실행되는 걸까? 프로토타입 체인의 기초 탐색.',
        thumbnailColor: 'from-orange-900/40',
      },
      {
        id: 2,
        title: '공포의 공유 메모리: [10, 20, 30]',
        duration: '10분',
        description:
          '분명 나만 점수를 추가했는데, 왜 옆 사람 점수판까지 바뀌어 있는 거지? .prototype 공간 공유의 비극.',
        thumbnailColor: 'from-red-900/40',
      },
      {
        id: 3,
        title: '섀도잉: 부모를 지운 아이',
        duration: '10분',
        description:
          '같은 이름의 메서드가 나타나 부모를 가려버렸다. 복수가 아닌, 다형성을 위한 JS의 설계 의도.',
        thumbnailColor: 'from-gray-800/40',
      },
      {
        id: 4,
        title: '(최종화): 최후의 심판: 0%의 정답률',
        duration: '10분',
        description:
          "모든 사슬의 비밀을 푼 자만이 도달할 수 있는 마지막 테스트. 당신은 과연 프로토타입의 미로를 빠져나와 '상속의 마스터'가 될 수 있을 것인가? 오직 정답만이 당신을 'null'의 허무로부터 구원할 것이다.",
        thumbnailColor: 'from-red-800/40',
      },
    ],
  };

  // 미리보기(Preview) 환경을 위한 이미지 처리
  const displayImage = dramaInfo.bgImage.includes('.jpg')
    ? 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2000'
    : dramaInfo.bgImage;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-600">
      {/* 메인 컨테이너 (모달 스타일) */}
      <div className="relative max-w-5xl mx-auto bg-[#181818] shadow-[0_0_80px_rgba(255,68,0,0.15)] rounded-xl overflow-hidden border border-orange-900/20">
        {/* 상단 닫기 버튼 */}
        <button className="absolute top-5 right-5 z-50 p-2 bg-black/60 rounded-full hover:bg-black/80 transition-all border border-white/10">
          <X size={24} />
        </button>

        {/* 히어로 섹션 */}
        <div className="relative h-screen w-full">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url(${displayImage})`,
              filter: 'brightness(0.7)',
              backgroundSize: 'cover', // 일단 채우되
              // 50%가 중앙입니다. 40%나 30%로 줄이면 이미지가 위로 올라갑니다.
              backgroundPosition: 'center 100%',
            }}
          >
            <div className="absolute inset-0  from-[#181818] via-transparent to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-12 left-12 right-12 z-10">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm tracking-tighter uppercase">
                  Netflix Series
                </span>
                <p className="text-orange-500 font-bold tracking-[0.4em] text-[10px] drop-shadow-md uppercase">
                  Advanced Labs Presents
                </p>
              </div>

              <h1 className="text-9xl font-black italic tracking-tighter drop-shadow-[0_15px_15px_rgba(0,0,0,1)] text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-2">
                {dramaInfo.title}
              </h1>
              <p className="text-lg text-gray-400 font-semibold tracking-[0.2em] uppercase pl-1 drop-shadow-md">
                {dramaInfo.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-3 bg-white text-black px-10 py-3.5 rounded-md font-black text-lg hover:bg-gray-200 transition-all transform active:scale-95 shadow-lg">
                <Play fill="black" size={24} />
                재생
              </button>
              <button className="p-3.5 rounded-full border-2 border-gray-400 bg-black/40 hover:border-white transition-all transform active:scale-95 group backdrop-blur-sm">
                <Plus size={24} className="group-hover:scale-110 transition-transform" />
              </button>
              <button className="p-3.5 rounded-full border-2 border-gray-400 bg-black/40 hover:border-white transition-all transform active:scale-95 group backdrop-blur-sm">
                <ThumbsUp size={24} className="group-hover:scale-110 transition-transform" />
              </button>

              <div className="ml-auto flex items-center gap-4">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-3.5 rounded-full border-2 border-gray-400 bg-black/40 hover:border-white transition-all backdrop-blur-sm"
                >
                  <Volume2 size={24} className={isMuted ? 'opacity-40' : 'opacity-100'} />
                </button>
                <div className="border-l border-white/20 h-12 flex items-center pl-4 bg-black/30 pr-6 rounded-r-sm">
                  <span className="text-sm font-black tracking-tighter border-2 border-white/60 px-2 py-0.5 rounded-sm">
                    {dramaInfo.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-12 left-0 bg-red-600 text-white text-xs font-black px-4 py-1.5 shadow-xl flex items-center gap-2">
            <span className="text-lg leading-none">!?쫄?!</span>
            <span className="h-3 w-px bg-white/40" />
            <span>오늘 한국에서 1위</span>
          </div>
        </div>

        {/* 상세 정보 컨텐츠 */}
        <div className="p-12 pt-10 flex flex-col md:flex-row gap-16">
          <div className="flex-2 space-y-8">
            <div className="flex items-center gap-4 text-base font-bold">
              <span className="text-green-500 font-extrabold">{dramaInfo.matchScore}</span>
              <span className="text-gray-400">{dramaInfo.year}</span>
              <span className="text-gray-400">{dramaInfo.category}</span>
              <div className="flex gap-1.5">
                {dramaInfo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 border border-gray-600 text-[10px] font-black rounded-sm text-gray-400 uppercase tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black text-orange-500 flex items-center gap-2 italic">
                너 프로토타입 체인 알아?{' '}
                <span className="text-white not-italic">모르면 와야지 뭐해</span>
              </h3>
              <p className="text-2xl leading-[1.6] text-gray-200 font-light tracking-tight">
                {dramaInfo.synopsis}
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-6 text-sm">
            <div className="group">
              <span className="text-gray-500 block mb-1.5 uppercase text-[11px] tracking-[0.2em] font-black">
                출연진
              </span>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                {dramaInfo.cast.join(', ')}
              </p>
            </div>
            <div className="group">
              <span className="text-gray-500 block mb-1.5 uppercase text-[11px] tracking-[0.2em] font-black">
                장르
              </span>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                {dramaInfo.genres.join(', ')}
              </p>
            </div>
            <div className="group">
              <span className="text-gray-500 block mb-1.5 uppercase text-[11px] tracking-[0.2em] font-black">
                이 시리즈의 특징
              </span>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                {dramaInfo.characteristics.join(', ')}
              </p>
            </div>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors pt-4 border-t border-white/10 w-full font-bold">
              <Share2 size={18} />
              공유하기
            </button>
          </div>
        </div>

        {/* 회차 리스트 섹션 */}
        <div className="px-12 pb-16">
          <div className="flex items-center justify-between border-t border-gray-800 pt-10 mb-8">
            <h2 className="text-3xl font-black tracking-tight">회차</h2>
            <div className="text-gray-400 font-bold text-lg">시즌 1</div>
          </div>

          <div className="space-y-4">
            {dramaInfo.episodes.map((ep) => (
              <div
                key={ep.id}
                className="group flex flex-col md:flex-row items-start md:items-center gap-8 p-8 rounded-lg bg-[#252525]/20 hover:bg-[#252525] transition-all cursor-pointer border border-transparent hover:border-orange-900/30"
              >
                {/* 회차 번호 */}
                <span className="text-3xl font-black text-gray-600 group-hover:text-orange-500 w-8 transition-colors text-center">
                  {ep.id}
                </span>

                {/* 썸네일 영역 */}
                <div className="w-full md:w-56 h-32 bg-[#111] rounded-md overflow-hidden flex-shrink-0 relative shadow-2xl border border-white/5">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 z-20">
                    <div className="p-3 rounded-full border-2 border-white">
                      <Play fill="white" size={24} className="translate-x-0.5" />
                    </div>
                  </div>
                  {/* 시네마틱 썸네일 효과 */}
                  <div
                    className={`w-full h-full bg-gradient-to-br ${ep.thumbnailColor} to-black opacity-60 absolute inset-0 z-10`}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                </div>

                {/* 에피소드 정보 */}
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-black group-hover:text-orange-500 transition-colors leading-tight">
                      {ep.title}
                    </h4>
                    <span className="text-sm font-black text-gray-500 uppercase tracking-widest bg-black/40 px-2 py-1 rounded">
                      {ep.duration}
                    </span>
                  </div>
                  <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors font-light leading-relaxed">
                    {ep.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 푸터 영역 */}
      <div className="flex flex-col items-center justify-center pb-24 opacity-20 hover:opacity-100 transition-all duration-700 cursor-default group">
        <ChevronRight
          size={40}
          className="rotate-90 text-orange-600 mb-2 group-hover:animate-bounce"
        />
        <span className="text-xs font-black uppercase tracking-[0.6em] text-gray-400">
          Advanced Labs | Development & Innovation
        </span>
      </div>
    </div>
  );
};

export default App;
