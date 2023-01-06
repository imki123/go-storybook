# go-storybook

리액트 기반 스토리북이에요. npm에 배포되어 손쉽게 컴포넌트 활용할 수 있어요. 타입스크립트를 통해 컴포넌트 속성을 추론할 수 있어요.
컴포넌트 UI를 스토리북을 통해 확인할 수 있어요.
https://imki123.github.io/go-storybook

## 설치

npm 또는 yarn을 사용해요.

```
npm i go-storybook
```

OR

```
yarn add go-storybook
```

## 사용 예시

```
import { Button } from 'go-storybook'

<Button>버튼</Button>
```

---

## storybook 실행

```
yarn sb
```

## storybook git 배포(자동빌드)

```
yarn deploy
```

## npm 빌드/배포

```
yarn build-npm
npm publish --otp=000000
```
