# computorv1
## Abstract
이차 이하의 방적식을 푸는 프로그램입니다.  
과제에 대한 세부 내용은 `en.subject.pdf`를 참고해주세요.

## Usage
```shell
npm install # install dependencies
npm run build # build program
npm start -- "1 * x ^ 0 + 2 * x ^ 1 = 0"
```

## Result
```shell
~/Project/computorv1 git:(main) npm start -- "1 * x ^ 0 + 2 * x ^ 1 = 0"

> start
> tsc && node dist/main.js 1 * x ^ 0 + 2 * x ^ 1 = 0

Reduced form: (1𝑥⁰) + (2𝑥¹) = 0
Polynomial degree: 1
Discriminant is zero, the solution is:
-0.5
```
