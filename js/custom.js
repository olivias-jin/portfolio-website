// 별 생성 함수
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numOfStars = 100;  // 생성할 별의 수

    for (let i = 0; i < numOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // 랜덤한 위치 설정
        star.style.left = Math.random() * 100 + '%';  // 가로 위치 (0% ~ 100%)
        star.style.top = Math.random() * 100 + '%';   // 세로 위치 (0% ~ 100%)

        // 랜덤한 크기 설정 (2px ~ 5px)
        const size = Math.random() * 3 + 2 + 'px';  
        star.style.width = size;
        star.style.height = size;

        starsContainer.appendChild(star); // 별을 컨테이너에 추가

        // 별마다 랜덤한 시간차를 두고 반짝이게 하는 함수
        setInterval(() => {
            const randomOpacity = Math.random() * 0.7 + 0.3;  // 랜덤한 opacity (0.3 ~ 1 사이)
            star.style.opacity = randomOpacity;  // opacity 값을 랜덤하게 설정
        }, Math.random() * 2000 + 1000);  // 1초에서 3초 사이의 랜덤한 시간 간격
    }
}

function createShootingStar() {
    const shootingStarsContainer = document.getElementById('shooting-stars');
    const star = document.createElement('div');
    star.classList.add('shooting-star');

    // 랜덤 위치와 각도로 별동별 설정
    star.style.top = Math.random() * window.innerHeight + 'px';    // 세로 위치
    star.style.left = Math.random() * window.innerWidth + 'px';    // 가로 위치

    // 별동별 컨테이너에 추가
    shootingStarsContainer.appendChild(star);

    // 애니메이션이 끝나면 DOM에서 제거
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// 일정 시간마다 별동별 생성
setInterval(createShootingStar, 1500);  // 1.5초 간격으로 별동별 생성


// 페이지가 로드될 때 별 생성
window.onload = createStars;
