# Bead Platform

온라인 공간 공유 및 이벤트 마켓플레이스 플랫폼

## 프로젝트 개요

Bead는 공연/전시 공간이 필요한 아티스트와 공간을 제공하려는 공간 소유자(호스트)를 연결하고, 소비자들이 이벤트를 쉽게 찾고 예약할 수 있도록 중개하는 플랫폼입니다.

### 주요 기능

- 사용자 역할 기반 시스템 (호스트, 아티스트, 소비자)
- 공간 검색 및 예약
- 이벤트 생성 및 관리
- 커뮤니티 포럼
- 리뷰 및 평점 시스템
- 실시간 알림

## 기술 스택

- Vue 3
- TypeScript
- Firebase (Authentication, Firestore, Storage)
- Bootstrap 5
- Pinia (상태 관리)
- Vue Router
- Vite

## 개발 환경 설정

1. 저장소 클론
```bash
git clone [repository-url]
cd bead
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
- `.env.example` 파일을 `.env`로 복사
- Firebase 프로젝트 설정에서 얻은 값으로 환경 변수 업데이트

4. 개발 서버 실행
```bash
npm run dev
```

## 프로젝트 구조

```
src/
├── assets/         # 정적 파일
├── components/     # 재사용 가능한 컴포넌트
├── stores/         # Pinia 스토어
├── views/          # 페이지 컴포넌트
├── router/         # 라우터 설정
├── types/          # TypeScript 타입 정의
└── utils/          # 유틸리티 함수
```

## 배포

1. 프로덕션 빌드 생성
```bash
npm run build
```

2. `dist` 디렉토리의 내용을 웹 서버에 업로드

## 라이센스

MIT
