// 목데이터
const mockData = {
    // 감정 레이더 데이터 - 서정적 감정들로 확장
    emotionRadar: [
        { emotion: '😔 우울함', percentage: 35 },
        { emotion: '🥺 그리움', percentage: 28 },
        { emotion: '😊 기쁨', percentage: 15 },
        { emotion: '😌 평온함', percentage: 12 },
        { emotion: '🥰 감사함', percentage: 10 }
    ],

    // 오늘의 명언 - 대폭 확장
    dailyQuotes: [
        "지금의 감정을 숨기지 않아도 돼요",
        "당신의 마음이 소중합니다",
        "혼자가 아니에요, 함께 있어요",
        "오늘도 충분히 잘하고 있어요",
        "모든 감정은 의미가 있어요",
        "잠시 쉬어가도 괜찮아요",
        "당신은 사랑받을 자격이 있어요",
        "오늘 하루만 견뎌내면 돼요",
        "작은 것에도 감사할 줄 아는 마음",
        "누구나 힘든 시간이 있어요",
        "당신의 속도로 천천히 가도 돼요",
        "완벽하지 않아도 충분해요",
        "내일은 새로운 하루예요",
        "당신만의 아름다움이 있어요",
        "혼자만의 시간도 소중해요",
        "마음이 아플 때는 울어도 돼요",
        "당신의 이야기를 들어줄 사람이 있어요",
        "작은 변화도 큰 용기예요",
        "지나간 일은 지나간 일이에요",
        "당신이기에 특별한 거예요",
        "오늘도 여기 있어 줘서 고마워요",
        "마음이 따뜻해지는 순간들이 있을 거예요",
        "당신의 감정은 모두 소중해요",
        "함께 이겨낼 수 있어요",
        "조금씩 나아지고 있어요"
    ],

    // 최신 편지병들 (기존 인기 편지병)
    latestBottles: [
        {
            title: "오늘 하루도 고생했어요",
            preview: "혼자서도 잘 견뎌내고 있는 당신이 대단해요. 내일은 분명 더 나은 하루가...",
            likes: 124,
            comments: 23,
            time: "10분 전"
        },
        {
            title: "새벽 3시의 생각들",
            preview: "왜 이 시간에는 모든 게 더 복잡해 보이는 걸까요? 누군가도 이런 밤을...",
            likes: 89,
            comments: 17,
            time: "1시간 전"
        },
        {
            title: "소소한 행복을 찾았어요",
            preview: "오늘 길에서 본 고양이가 저를 보고 야옹 하더라고요. 그것만으로도...",
            likes: 156,
            comments: 41,
            time: "2시간 전"
        }
    ],

    // 탐색 화면 랜덤 카드 데이터 - 서정적 감정으로 업데이트
    randomCards: [
        {
            emotion: '😔 우울함',
            content: '요즘 들어 혼자 있는 시간이 늘어나면서 문득문득 외로움이 밀려와요. 모든 게 잘 되고 있는 것 같은데도 뭔가 허전한 기분이 들어서... 이런 감정이 드는 게 정상인지 궁금해요. 누구나 이런 순간들이 있는 건가요?',
            tags: ['#외로움', '#일상', '#고민']
        },
        {
            emotion: '😊 기쁨',
            content: '오늘 길에서 만난 강아지가 꼬리를 흔들어줬어요. 이런 작은 순간들이 하루를 밝게 만들어주는 것 같아요.',
            tags: ['#일상', '#행복', '#동물']
        },
        {
            emotion: '😌 평온함',
            content: '창가에 앉아 비 오는 소리를 들으니 마음이 차분해져요. 이런 고요한 시간이 필요했나 봐요.',
            tags: ['#비', '#평온', '#혼자시간']
        },
        {
            emotion: '🥺 그리움',
            content: '오래된 친구가 생각나네요. 연락하고 싶지만 괜히 부담스러워할까 봐 망설여져요.',
            tags: ['#친구', '#그리움', '#연락']
        },
        {
            emotion: '🥰 감사함',
            content: '오늘 낯선 사람이 문을 잡아줬어요. 작은 친절이지만 하루 종일 마음이 따뜻했어요.',
            tags: ['#친절', '#감사', '#일상']
        },
        {
            emotion: '🌅 희망',
            content: '힘든 시간이었지만 조금씩 나아지고 있다는 걸 느껴요. 내일은 더 좋을 거예요.',
            tags: ['#희망', '#성장', '#미래']
        }
    ],

    // 개인 통계 데이터
    userStats: {
        quote: "당신은 오늘 '위로'를 가장 많이 담았어요",
        stats: [
            { label: '보낸 편지병', value: '23개' },
            { label: '받은 공감', value: '156개' },
            { label: '나눈 위로', value: '42개' }
        ]
    },

    // 내가 보낸 편지병들
    myBottles: [
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
    ]
};

// 로그인 상태 관리
let isLoggedIn = false;
let currentUser = null;
let isDarkMode = false;

// 로그인 상태 확인 및 UI 업데이트
function updateLoginStatus() {
    // 플로팅 버튼용
    const settingsFabIcon = document.getElementById('settings-fab-icon');
    const settingsFabText = document.getElementById('settings-fab-text');
    const settingsTitle = document.getElementById('settings-title');
    const logoutSection = document.getElementById('logout-section');
    
    if (isLoggedIn) {
        if (settingsFabIcon) settingsFabIcon.textContent = '⚙️';
        if (settingsFabText) settingsFabText.textContent = '설정';
        if (settingsTitle) settingsTitle.textContent = '⚙️ 설정';
        if (logoutSection) logoutSection.style.display = 'flex';
    } else {
        if (settingsFabIcon) settingsFabIcon.textContent = '🔑';
        if (settingsFabText) settingsFabText.textContent = '로그인';
        if (settingsTitle) settingsTitle.textContent = '🔑 로그인';
        if (logoutSection) logoutSection.style.display = 'none';
    }
}

// 설정/로그인 버튼 클릭 핸들러
function handleSettingsClick(button) {
    // 모든 네비게이션 버튼 비활성화
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    if (isLoggedIn) {
        // 로그인 상태면 설정 화면
        showScreen('settings-screen', button);
    } else {
        // 로그아웃 상태면 로그인 화면
        showScreen('login-screen', button);
    }
}

// 로그인 관련 함수들
function loginWithGoogle() {
    // 실제 구현에서는 Google OAuth를 사용
    simulateLogin('Google 계정');
}

function loginWithApple() {
    // 실제 구현에서는 Apple Sign In을 사용
    simulateLogin('Apple ID');
}

function loginWithEmail() {
    // 실제 구현에서는 이메일 로그인 폼을 띄움
    simulateLogin('이메일 계정');
}

function simulateLogin(provider) {
    // 시뮬레이션을 위한 임시 로그인
    isLoggedIn = true;
    currentUser = {
        name: '바다 여행자',
        email: 'user@baycret.com',
        provider: provider,
        joinDate: new Date()
    };
    
    updateLoginStatus();
    alert(`${provider}로 로그인되었습니다!`);
    
    // 메인 화면으로 이동
    showScreen('main-screen', document.querySelector('.nav-btn[onclick*="main-screen"]'));
    document.querySelector('.nav-btn[onclick*="main-screen"]').classList.add('active');
    document.getElementById('settings-nav-btn').classList.remove('active');
}

function handleLogout() {
    if (confirm('정말 로그아웃하시겠습니까?')) {
        isLoggedIn = false;
        currentUser = null;
        updateLoginStatus();
        alert('로그아웃되었습니다.');
        
        // 메인 화면으로 이동
        showScreen('main-screen', document.querySelector('.nav-btn[onclick*="main-screen"]'));
        document.querySelector('.nav-btn[onclick*="main-screen"]').classList.add('active');
        document.getElementById('settings-nav-btn').classList.remove('active');
    }
}

function continueAsGuest() {
    alert('게스트 모드로 계속 이용하실 수 있습니다.');
    showScreen('main-screen', document.querySelector('.nav-btn[onclick*="main-screen"]'));
    document.querySelector('.nav-btn[onclick*="main-screen"]').classList.add('active');
    document.getElementById('settings-nav-btn').classList.remove('active');
}

// 설정 관련 함수들
function showUserProfile() {
    if (!isLoggedIn) {
        alert('로그인이 필요한 기능입니다.');
        return;
    }
    alert('내 정보 설정 화면입니다.\n(추후 개발 예정)');
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const toggle = document.getElementById('dark-mode-toggle');
    toggle.checked = isDarkMode;
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        alert('다크모드가 활성화되었습니다.');
    } else {
        document.body.classList.remove('dark-mode');
        alert('라이트모드가 활성화되었습니다.');
    }
    
    // 로컬 스토리지에 설정 저장
    localStorage.setItem('darkMode', isDarkMode);
}

function showNotificationSettings() {
    alert('알림 설정 화면입니다.\n(추후 개발 예정)');
}

function showPrivacySettings() {
    alert('개인정보 보호 설정 화면입니다.\n(추후 개발 예정)');
}

function showAppInfo() {
    alert('BayCret v1.0\n바다에 담은 비밀 편지\n\n개발: BayCret Team\n문의: support@baycret.com');
}

function showSignup() {
    alert('회원가입 화면입니다.\n(추후 개발 예정)');
}

// 렌더링 함수들
function renderEmotionRadar() {
    const container = document.querySelector('.emotion-radar');
    if (!container) return;
    const title = container.querySelector('h3');
    if (!title) return;
    // 감정별 파스텔톤 색상 매핑
    const pastelColors = [
        '#A7D8F7', '#F7CAC9', '#FFF6B7', '#B5EAD7', '#FFDAC1',
        '#E2F0CB', '#C7CEEA', '#FFB7B2', '#B5EAD7', '#C7CEEA'
    ];
    // 감정별 SVG 물방울/파도 스타일로 표시
    const emotionSVGs = mockData.emotionRadar.map((item, idx) => `
        <div style="display: inline-block; margin: 0 10px 18px 10px; text-align: center;">
            <svg width="54" height="54" viewBox="0 0 54 54">
                <ellipse cx="27" cy="32" rx="22" ry="16" fill="${pastelColors[idx % pastelColors.length]}" opacity="0.7"/>
                <ellipse cx="27" cy="32" rx="22" ry="16" fill="white" opacity="0.13"/>
                <text x="50%" y="54%" text-anchor="middle" alignment-baseline="middle" font-size="22" font-family="Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,sans-serif">${item.emotion.split(' ')[0]}</text>
            </svg>
            <div style="font-size: 13px; color: #4A90A4; margin-top: 2px; font-weight: 500;">${item.emotion.split(' ')[1]}</div>
            <div style="font-size: 15px; color: #4A90A4; font-weight: bold; margin-top: 2px;">${item.percentage}%</div>
        </div>
    `).join('');
    
    container.innerHTML = title.outerHTML +
        `<div style="display: flex; justify-content: center; flex-wrap: wrap; align-items: end; gap: 0 8px; margin-top: 10px;">${emotionSVGs}</div>` +
        `<div style="margin-top: 10px; color: #B8D4E3; font-size: 13px;">오늘의 바다 분위기를 이모지로 표현했어요</div>`;
}

function renderDailyQuote() {
    const quoteElement = document.querySelector('#main-screen .daily-quote');
    if (quoteElement) {
        const randomQuote = mockData.dailyQuotes[Math.floor(Math.random() * mockData.dailyQuotes.length)];
        quoteElement.textContent = `"${randomQuote}"`;
    }
}

function renderLatestBottles() {
    // main-screen과 explore-screen 모두 지원
    const containers = [
        document.querySelector('#main-screen .popular-waves'),
        document.querySelector('#explore-screen .popular-waves')
    ].filter(Boolean);
    containers.forEach(container => {
        if (!container) return;
        const title = container.querySelector('h3');
        const bottleCards = mockData.latestBottles.map(bottle => `
            <div class="wave-card">
                <div class="title">${bottle.title}</div>
                <div class="preview">${bottle.preview}</div>
                <div class="stats">
                    <span>💙 ${bottle.likes}개의 공감</span>
                    <span>💬 ${bottle.comments}개의 댓글</span>
                    <span class="time">⏰ ${bottle.time}</span>
                </div>
            </div>
        `).join('');
        container.innerHTML = title.outerHTML + bottleCards;
    });
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

function renderMyBottles() {
    const container = document.querySelector('#profile-screen .popular-waves:last-child');
    if (!container) return;
    
    const title = container.querySelector('h3');
    const bottleCards = mockData.myBottles.map(bottle => `
        <div class="wave-card">
            <div class="title">${bottle.title}</div>
            <div class="preview">${bottle.preview}</div>
            <div class="stats">
                <span>💙 ${bottle.likes}개의 공감</span>
                <span>${bottle.time}</span>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = title.outerHTML + bottleCards;
}

// 초기 렌더링
document.addEventListener('DOMContentLoaded', function() {
    // 로컬 스토리지에서 다크모드 설정 로드
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        const toggle = document.getElementById('dark-mode-toggle');
        if (toggle) toggle.checked = true;
    }
    
    // 로그인 상태 업데이트
    updateLoginStatus();
    
    renderEmotionRadar();
    renderDailyQuote();
    renderLatestBottles();
    renderRandomCard();
    renderUserStats();
    renderMyBottles();
    
    // 기존 이벤트 리스너들 재등록
    attachEventListeners();
    setupSeaColorPicker();
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
            if (this.textContent.includes('다른 편지병')) {
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

function setupSeaColorPicker() {
    const seaShape = document.getElementById('sea-shape');
    const colorInput = document.getElementById('sea-color-picker');
    if (!seaShape || !colorInput) return;

    // 초기 색상 적용
    seaShape.setAttribute('fill', colorInput.value);

    colorInput.addEventListener('input', function() {
        seaShape.setAttribute('fill', this.value);
    });
}

// 화면 전환 함수
function showScreen(screenId, button) {
    // 모든 화면 숨기기
    const screens = document.querySelectorAll('.screen, .flowchart');
    screens.forEach(screen => screen.classList.remove('active'));

    // 선택된 화면 보이기
    const targetScreen = document.getElementById(screenId);
    if (!targetScreen) return;
    targetScreen.classList.add('active');

    // 네비게이션 버튼 활성화 상태 변경
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    if (button) button.classList.add('active');
}

 