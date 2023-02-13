# go-storybook

It's a React-based storybook. Deployed on npm, you can easily use the component. You can infer component properties through TypeScript.
You can check the component UI through Storybook.
https://imki123.github.io/go-storybook

## How to install

```
npm i -g yarn
yarn add go-storybook
```

## Usage

### Button

```
import { Button } from 'go-storybook'

<Button>Click Me</Button>
```

### SnackBar

```
export const Component = () => {
  const { openSnackBar } = useSnackBar({ text: 'My snackbar!!' })
  return (
    <>
      <Button onClick={openSnackBar}>Open SnackBar</Button>
      <SnackBar text='' />
    </>
  )
}
```

---

# How to Start Project

## How to install

```
yarn
```

If you have ts errors in IDE, check below yarn docs.
https://yarnpkg.com/getting-started/editor-sdks

## How to start storybook

```
yarn sb
```

## How to build/deploy npm

```
npm version patch
yarn build-npm
npm publish --otp=000000
```

## How to deploy git (auto build)

```
git push && yarn deploy
```
