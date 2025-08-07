# Portfolio Website

모던하고 반응형 디자인의 개인 포트폴리오 웹사이트입니다.

## 🚀 Features

- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **모던 UI/UX**: 깔끔하고 세련된 디자인
- **부드러운 애니메이션**: 스크롤 기반 애니메이션과 호버 효과
- **다크 테마**: 눈에 편안한 다크 모드
- **섹션별 구성**: 홈, 소개, 기술, 프로젝트, 연락처
- **프로젝트 필터링**: 카테고리별 프로젝트 필터링 기능
- **연락 폼**: 사용자 친화적인 연락 폼

## 🛠️ Technologies Used

- **React 18** - 사용자 인터페이스 구축
- **TypeScript** - 타입 안전성과 개발 경험 향상
- **CSS3** - 모던한 스타일링과 애니메이션
- **HTML5** - 시맨틱 마크업

## 📁 Project Structure

```
src/
├── components/          # React 컴포넌트
│   ├── Header.tsx      # 네비게이션 헤더
│   ├── Hero.tsx        # 메인 히어로 섹션
│   ├── About.tsx       # 소개 섹션
│   ├── Skills.tsx      # 기술 스택 섹션
│   ├── Projects.tsx    # 프로젝트 섹션
│   ├── Contact.tsx     # 연락처 섹션
│   └── Footer.tsx      # 푸터
├── App.tsx             # 메인 앱 컴포넌트
├── index.tsx           # 앱 진입점
└── index.css           # 전역 스타일
```

## 🎨 Design Features

- **그라디언트 배경**: 세련된 그라디언트 배경 효과
- **글래스모피즘**: 반투명 효과와 블러 처리
- **호버 애니메이션**: 인터랙티브한 호버 효과
- **스크롤 애니메이션**: 스크롤 기반 페이드인 효과
- **타이핑 애니메이션**: 코드 블록의 타이핑 효과

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 이상)
- npm 또는 yarn

### Installation

1. 저장소 클론
```bash
git clone <repository-url>
cd portfolio-website
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm start
```

4. 브라우저에서 확인
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

## 📱 Responsive Design

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

## 🎯 Customization

### 개인 정보 수정

각 컴포넌트에서 다음 정보들을 수정하세요:

- **Hero.tsx**: 이름, 소개 문구
- **About.tsx**: 개인 소개, 경력 정보
- **Skills.tsx**: 기술 스택, 숙련도
- **Projects.tsx**: 프로젝트 정보, 링크
- **Contact.tsx**: 연락처 정보
- **Footer.tsx**: 소셜 미디어 링크

### 색상 테마 변경

`src/App.css`와 각 컴포넌트의 CSS 파일에서 색상 변수를 수정하세요:

```css
/* 주요 색상 */
--primary-color: #667eea;
--secondary-color: #764ba2;
--background-color: #0a0a0a;
--text-color: #ffffff;
```

## 📄 License

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

프로젝트에 대한 문의사항이 있으시면 언제든 연락주세요!

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
