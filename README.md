# computorv1
## Abstract
이차 이하의 방적식을 푸는 프로그램입니다.  
과제에 대한 세부 내용은 `en.subject.pdf`를 참고해주세요.
## Usage
```shell
npm install # install dependencies
npm run build # build program
npm start -- "1 * x ^ 0 + 2 * x ^ 1 = 0" # run program
```
## Example of equation
```shell
npm start -- "(−21 * x ^ 0) + (4 * x ^ 1) + (1 * x ^ 2) = 0"
npm start -- "1 * x ^ 0 + 2 * x ^ 1 + 3 * x ^ 2 = 0"
npm start -- "1 * x ^ 0 + 2 * x ^ 1 + 3 * x ^ 2 + 4 * x ^ 3 = 0" # cubic equation is not supported
```
