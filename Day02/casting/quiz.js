// 프롬프트로 몇 년생인가요 물어보고 숫자로 1999 입력하면
// 콘솔로 당신의 나이는 26이군요!

// const year = window.prompt("몇 년생이신가요?");
// const age = 2025 - Number(year);
// window.console.log(`당신의 나이는 ${age}이군용`)
// window.console.log(`당신의 나이는 ${2024-birth+1}이군요!`);

// 1. 숫자를 두 번 프롬프트로 물어보고
// 콘솔로 합: 차: 곱: 나타내는 프로그램
const first = prompt("첫 번째 숫자 입력");
const second = prompt("두 번째 숫자 입력");
const numFirst = Number(first);
const numSecond = Number(second);
console.log(`두 수의 합:${numFirst+numSecond}, 차:${numFirst-numSecond}, 곱:${numFirst*numSecond}`)

// const num1 = window.prompt("첫 번째 숫자 입력하세요:");
// const num2 = window.prompt("두 번째 숫자 입력하세요:");
// const result1 = Number(num1) + Number(num2)
// const result2 = num1 - num2
// const result3 = num1 * num2
// window.console.log(`합:${result1}, 차:${result2}, 곱:${result3}`);

// 2. 프롬프트로 한 변의 길이를 입력하고
// 콘솔로 정사각형의 넓이는 ~입니다
const numSide = Number(prompt("한 변의 길이"));
console.log(`정사각의 넓이는 ${side*side}입니다`);

// const width = window.prompt("한 변의 길이를 입력하세요:");
// const result = width*width
// window.console.log(`정사각형의 넓이는 ${result}입니다!`);

// 3. 아아(1500) 주문 갯수 프롬프트, 라떼(2500) 주문 갯수 프롬프트
// 콘솔로 총 가격은 ~입니다 ex) 3,5 ->
const ice_americano = Number(prompt("아아 몇 잔?"));
const ice_latte = Number(prompt("라떼 몇 잔?"));
console.log(`총 가격은 ${ice_americano*1500 +ice_latte*2500}`);

