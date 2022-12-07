/* https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript/ */
function solution(food) {
  var answer = "";

  let a = "";
  let b = "";

  for (var i = 1; i < food.length; i++) {
    var count = 0;
    if (food[i] % 2 === 0) {
      count = food[i];
    } else {
      count = food[i] - 1;
    }
    for (var j = 0; j < count / 2; j++) {
      a += `${i}`;
    }
    a = a;
    b = a.split("").reverse().join("");
  }
  answer += a + "0" + b;
  return answer;
}

console.log(solution([1, 3, 4, 6]));
