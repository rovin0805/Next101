# Next.js

## Getting Started

[NextJs Docs](https://nextjs.org/docs/getting-started)

Next.js 프로젝트 초기화

```
npx create-next-app@latest
```

Next.js 프로젝트 초기화 (+타입스크립트)

```
npx create-next-app@latest --typescript
```

## Pages

pages 폴더 안에 있는 파일명에 따라 route가 결정됨.

> pages/about.js 생성 ->  
> localhost:3000/about (O)  
> localhost:3000/about-us(X)

## Static Pre-Rendering

- **create-react-app => client-side rendering** : 초기 빈 HTML을 받고 브라우저가 스크립트를 받아 리액트를 실행시키기까지 기다려야 함.  
  _The restaurant which starts to make food after receiving an order._
- **create-next-app => static pre-rendering** : 초기 상태의 컴포넌트로 된 미리 생성 된 HTML 페이지를 보게 됨. 모든 게 다 로딩되면 리액트가 연결됨.  
  Next does SSR. After the page is rendered, React will take over in the frontend and make everything interactive. (Hydration)  
   _The restaurant which serves the food immediately since it made the food in advance._

## Routing

'next/link'에 내장된 Link를 사용해 라우팅을 해야 함. (react-router-dom의 Link와 동일한 역할)  
NexJS 어플리케이션의 클라이언트 사이드 네비게이션을 제공힘

[useRouter Reference](https://nextjs.org/docs/api-reference/next/router)
