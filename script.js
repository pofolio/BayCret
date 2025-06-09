// 목데이터
const mockData = {
    // 감정 레이더 데이터
    emotionRadar: [
        { emotion: '😢 슬픔', percentage: 40 },
        { emotion: '🤗 위로', percentage: 25 },
        { emotion: '💙 공감', percentage: 20 },
        { emotion: '😊 기쁨', percentage: 10 },
        { emotion: '😠 분노', percentage: 5 }
    ],

    // 오늘의 명언
    dailyQuotes: [
        "지금의 감정을 숨기지 않아도 돼요",
        "당신의 마음이 소중합니다",
        "혼자가 아니에요, 함께 있어요",
        "오늘도 충분히 잘하고 있어요",
        "모든 감정은 의미가 있어요"
    ],

    // 인기 파도들
    popularWaves: [
        {
            title: "오늘 하루도 고생했어요",
            preview: "혼자서도 잘 견뎌내고 있는 당신이 대단해요. 내일은 분명 더 나은 하루가...",
            likes: 124,
            comments: 23
        },
        {
            title: "새벽 3시의 생각들",
            preview: "왜 이 시간에는 모든 게 더 복잡해 보이는 걸까요? 누군가도 이런 밤을...",
            likes: 89,
            comments: 17
        },
        {
            title: "소소한 행복을 찾았어요",
            preview: "오늘 길에서 본 고양이가 저를 보고 야옹 하더라고요. 그것만으로도...",
            likes: 156,
            comments: 41
        }
    ],

    // 탐색 화면 랜덤 카드 데이터
    randomCards: [
        {
            emotion: '😢 슬픔',
            content: '요즘 들어 혼자 있는 시간이 늘어나면서 문득문득 외로움이 밀려와요. 모든 게 잘 되고 있는 것 같은데도 뭔가 허전한 기분이 들어서... 이런 감정이 드는 게 정상인지 궁금해요. 누구나 이런 순간들이 있는 건가요?',
            tags: ['#외로움', '#일상', '#고민']
        },
        {
            emotion: '😊 기쁨',
            content: '오늘 길에서 만난 강아지가 꼬리를 흔들어줬어요. 이런 작은 순간들이 하루를 밝게 만들어주는 것 같아요.',
            tags: ['#일상', '#행복', '#동물']
        },
        {
            emotion: '😌 평온',
            content: '창가에 앉아 비 오는 소리를 들으니 마음이 차분해져요. 이런 고요한 시간이 필요했나 봐요.',
            tags: ['#비', '#평온', '#혼자시간']
        },
        {
            emotion: '😢 그리움',
            content: '오래된 친구가 생각나네요. 연락하고 싶지만 괜히 부담스러워할까 봐 망설여져요.',
            tags: ['#친구', '#그리움', '#연락']
        }
    ],

    // 개인 통계 데이터
    userStats: {
        quote: "당신은 오늘 '위로'를 가장 많이 담았어요",
        stats: [
            { label: '보낸 파도', value: '23개' },
            { label: '받은 공감', value: '156개' },
            { label: '나눈 위로', value: '42개' }
        ]
    },

    // 내가 보낸 파도들
    myWaves: [
        {
            title: "오늘의 작은 행복",
            preview: "커피 향이 유독 좋았던 오후...",
            likes: 12,
            time: "2시간 전"
        },
        {
            title: "혼자만의 시간",
            preview: "가끔은 혼자 있는 시간도 필요해...",
            likes: 34,
            time: "1일 전"
        }
    ],

    // 플로우차트 단계들
    flowSteps: [
        {
            title: "1. 메인 화면 (감정의 파도)",
            desc: "• 현재 바다의 분위기 (감정 통계)<br>• 인기 파도들 (인기 게시글)<br>• 오늘의 감정 한 줄 추천"
        },
        {
            title: "2. 글쓰기 (파도 보내기)",
            desc: "• 감정 이모지 선택<br>• 자유 텍스트 입력 (500자 이하)<br>• 태그 추가 및 익명 설정"
        },
        {
            title: "3. 탐색 (파도 줍기)",
            desc: "• 랜덤 게시글 탐색<br>• 공감, 댓글, 위로 기능<br>• 감정/태그별 필터링"
        },
        {
            title: "4. 마이페이지 (나만의 섬)",
            desc: "• 개인 감정 통계<br>• 작성한 글 아카이브<br>• 받은 공감 및 댓글 확인"
        }
    ]
};

// 렌더링 함수들
function renderEmotionRadar() {
    const container = document.querySelector('.emotion-radar');
    if (!container) return;
    
    const title = container.querySelector('h3');
    const emotionItems = mockData.emotionRadar.map(item => `
        <div class="emotion-item">
            <span>${item.emotion}</span>
            <div class="emotion-bar">
                <div class="emotion-fill" style="width: ${item.percentage}%;"></div>
            </div>
            <span>${item.percentage}%</span>
        </div>
    `).join('');
    
    container.innerHTML = title.outerHTML + emotionItems;
}

function renderDailyQuote() {
    const quoteElement = document.querySelector('#main-screen .daily-quote');
    if (quoteElement) {
        const randomQuote = mockData.dailyQuotes[Math.floor(Math.random() * mockData.dailyQuotes.length)];
        quoteElement.textContent = `"${randomQuote}"`;
    }
}

function renderPopularWaves() {
    const container = document.querySelector('#main-screen .popular-waves');
    if (!container) return;
    
    const title = container.querySelector('h3');
    const waveCards = mockData.popularWaves.map(wave => `
        <div class="wave-card">
            <div class="title">${wave.title}</div>
            <div class="preview">${wave.preview}</div>
            <div class="stats">
                <span>💙 ${wave.likes}개의 공감</span>
                <span>💬 ${wave.comments}개의 댓글</span>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = title.outerHTML + waveCards;
}

function renderRandomCard() {
    const cardElement = document.querySelector('.random-card');
    if (!cardElement) return;
    
    const randomCard = mockData.randomCards[Math.floor(Math.random() * mockData.randomCards.length)];
    
    cardElement.innerHTML = `
        <div class="emotion">${randomCard.emotion}</div>
        <div class="content">${randomCard.content}</div>
        <div class="tags">
            ${randomCard.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
}

function renderUserStats() {
    const quoteElement = document.querySelector('#profile-screen .daily-quote');
    if (quoteElement) {
        quoteElement.textContent = `"${mockData.userStats.quote}"`;
    }
    
    const statsContainer = document.querySelector('#profile-screen .emotion-radar');
    if (statsContainer) {
        const statsItems = mockData.userStats.stats.map(stat => `
            <div class="emotion-item">
                <span>${stat.label}</span>
                <span>${stat.value}</span>
            </div>
        `).join('');
        statsContainer.innerHTML = statsItems;
    }
}

function renderMyWaves() {
    const container = document.querySelector('#profile-screen .popular-waves:last-child');
    if (!container) return;
    
    const title = container.querySelector('h3');
    const waveCards = mockData.myWaves.map(wave => `
        <div class="wave-card">
            <div class="title">${wave.title}</div>
            <div class="preview">${wave.preview}</div>
            <div class="stats">
                <span>💙 ${wave.likes}개의 공감</span>
                <span>${wave.time}</span>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = title.outerHTML + waveCards;
}

function renderFlowSteps() {
    const container = document.querySelector('#flowchart');
    if (!container) return;
    
    const header = container.querySelector('.header');
    const flowSteps = mockData.flowSteps.map(step => `
        <div class="flow-step">
            <div class="step-title">${step.title}</div>
            <div class="step-desc">${step.desc}</div>
        </div>
    `).join('');
    
    container.innerHTML = header.outerHTML + flowSteps;
}

// 초기 렌더링
document.addEventListener('DOMContentLoaded', function() {
    renderEmotionRadar();
    renderDailyQuote();
    renderPopularWaves();
    renderRandomCard();
    renderUserStats();
    renderMyWaves();
    renderFlowSteps();
    
    // 기존 이벤트 리스너들 재등록
    attachEventListeners();
});

// 이벤트 리스너들을 별도 함수로 분리
function attachEventListeners() {
    // 감정 이모지 선택
    document.querySelectorAll('.emotion-emoji').forEach(emoji => {
        emoji.addEventListener('click', function () {
            document.querySelectorAll('.emotion-emoji').forEach(e => e.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // 파도 카드 클릭 효과
    document.querySelectorAll('.wave-card').forEach(card => {
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 100);
        });
    });

    // 액션 버튼 클릭 효과
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.textContent.includes('다른 파도')) {
                renderRandomCard();
            }
        });
    });

    // 글쓰기 textarea 자동 크기 조정
    const textarea = document.querySelector('textarea');
    if (textarea) {
        textarea.addEventListener('input', function () {
            this.style.height = 'auto';
            this.style.height = this.scrollHeight + 'px';
        });
    }
}

// 화면 전환 함수
function showScreen(screenId, button) {
    // 모든 화면 숨기기
    const screens = document.querySelectorAll('.screen, .flowchart');
    screens.forEach(screen => screen.classList.remove('active'));

    // 선택된 화면 보이기
    document.getElementById(screenId).classList.add('active');

    // 네비게이션 버튼 활성화 상태 변경
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

 