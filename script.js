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
            // 랜덤 내용으로 교체하는 효과
            const contents = [
                {
                    emotion: '😊 기쁨',
                    text: '오늘 길에서 만난 강아지가 꼬리를 흔들어줬어요. 이런 작은 순간들이 하루를 밝게 만들어주는 것 같아요.',
                    tags: ['#일상', '#행복', '#동물']
                },
                {
                    emotion: '😌 평온',
                    text: '창가에 앉아 비 오는 소리를 들으니 마음이 차분해져요. 이런 고요한 시간이 필요했나 봐요.',
                    tags: ['#비', '#평온', '#혼자시간']
                },
                {
                    emotion: '😢 그리움',
                    text: '오래된 친구가 생각나네요. 연락하고 싶지만 괜히 부담스러워할까 봐 망설여져요.',
                    tags: ['#친구', '#그리움', '#연락']
                }
            ];

            const randomContent = contents[Math.floor(Math.random() * contents.length)];
            const card = document.querySelector('.random-card');

            card.style.opacity = '0.5';
            setTimeout(() => {
                card.querySelector('.emotion').textContent = randomContent.emotion;
                card.querySelector('.content').textContent = randomContent.text;
                card.querySelector('.tags').innerHTML = randomContent.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
                card.style.opacity = '1';
            }, 300);
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