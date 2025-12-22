# 🧾 AlbaForm  

알바 구인·구직 정보를 입력받는 폼 기반 프로젝트

---

## 📦 Tech Stack

| 구분            | 사용 기술                                                  |
|-----------------|------------------------------------------------------------|
| **Framework**   | [Next.js v15.5.9](https://nextjs.org/) (pages 라우팅)      |
| **Language**    | TypeScript                                                 |
| **Styling**     | Emotion (CSS-in-JS)                                        |
| **State**       | Zustand (전역 상태 관리)                                   |
| **UI Library**  | Material UI, MUI Icons                                     |
| **HTTP Client** | Axios                                                      |

---

## 🛠 초기 세팅 내역

### ✅ 개발 환경

- Node.js `v20.19.6` (nvm으로 관리)
- 절대 경로 import alias: `@/*`
- GitHub Organization 레포로 관리

### ✅ 코드 품질 도구

- **ESLint**
  - `eslint:recommended`, `next/core-web-vitals`, `@typescript-eslint/recommended`
  - import 순서: 범용 → 프레임워크 → 외부 라이브러리 → 내부 코드 → 스타일
- **Stylelint**
  - Emotion 사용 시 스타일 속성 순서 강제
  - 기준: `Layout → Box Model → Visual → Typography → Interaction → Animation`
- **Pre-commit Hook**
  - Husky + lint-staged 설정 완료
  - 커밋 전 자동 코드 검사 실행

---

## 📁 폴더 구조 가이드
```📦 project-root
├── pages/
│ └── user/
│ ├── index.tsx
│ ├── _components/
│ ├── _hooks/
│ └── _utils/
├── components/
│ ├── Card.tsx
│ └── Card.style.ts
├── hooks/
├── utils/
├── lib/
├── assets/
│ ├── svg/
│ └── img/
└── styles/
```

---

## 💻 프로젝트 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 🔍 경로 설정 예시
```import Home from '@/pages/index'
import Card from '@/components/Card'
import { useInput } from '@/hooks/useInput'
```

## 🧪 커밋 컨벤션

| 태그   | 설명                   |
|--------|------------------------|
| Feat   | 새로운 기능 추가        |
| Fix    | 버그 수정               |
| Style  | 스타일 관련 수정        |
| Chore  | 설정 수정, 기타 작업     |


### 예시
```git commit -m "Feat: 로그인 페이지 레이아웃 구성"```

---

## 💡 자주 쓰는 Git 명령어
### 연결된 원격 리포지토리 확인
git remote -v

### 브랜치 목록 확인
git branch

### 브랜치 생성 및 이동
git checkout -b 브랜치명

### 변경 사항 커밋
git add .
git commit -m "Feat: ~"

### 원격 저장소로 푸시
git push -u origin 브랜치명

### 원격 리포지토리와 동기화
git pull


