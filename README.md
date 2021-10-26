# Webpack 을 사용해 React 앱을 만들려면 필요한 모듈들

- module bundler
  - webpack 2 : webpack 필수 모듈
  - webpack-dev-server : webpack을 실시간으로 테스트하기 위한 모듈
- loader
  - babel-loader : es6,jsx를 자바스크립트로 변환해주는 모듈
    - babel-core : 필수 모듈
    - babel-preser-env : babel의 어떤 기능을 사용할지 선택하는 모듈
    - babel-plugin-transform-react-jsx : jsx를 변환해주는 모듈
- react
  - react : react를 사용하기 위한 모듈
  - react-dom : 최종 랜더링할 때 필요한 모듈

<br>
<br>

# TypeScript를 사용하여 React 앱을 만들려면 필요한 모듈들

- module bundler
  - webpack 2
  - webpack-dev-server
- loader
  - ts-loader : typescript를 변환하기 위한 모듈
    - typescript : typescript 필수 모듈
  - tslint-loader
    - tslint : 코드를 검사해주는 모듈 (eslint와 비슷)
    - tslint-react
  - source-map-loader
- react
  - react, @types/react
  - react-dom, @types/react-dom

<br>
<br>

# typescript가 적용된 react CRA 명령어

```
npm i create-react-app -g
npx create-react-app [프로젝트 이름] --template=typescript
```

참고한 블로그 : [CRA(Create-React-App)으로 Typescript 설정하기](https://velog.io/@miiunii/CRACreate-React-App%EC%9C%BC%EB%A1%9C-Typescript-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
