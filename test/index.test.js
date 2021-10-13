const { sum, person, toggle, range } = require('../first_jest_test/index');

describe('사용자는 합을 계산(sum()) 한다.', () => {


  /* 아래와 같은 Matcher 외에도 많은 Matcher 존재
  Jest Expect 로 검색 - https://jestjs.io/docs/expect
  마지막엔 간단히 코드 커버리지 특정도 배웠다.

Code coverage란 (테스트 대상이 되는 소스 코드 중) 테스트 코드를 통해 검증된 코드의 비율을 의미한다.
테스트 수행 결과를 정량적으로 나타내는 수치이다.
코드 커버리지를 통해 테스트 코드가 얼마나 많은 소스 코드를 테스트하고 있는지 나타내느 ㄴ중요한 지표이다.
Jest는 아래와 같은 명령어로 간단하게 코드커버리지 확인이 가능하다.

npx jest --coverage

테스트 코드를 작성한 폴더에서 위 명령어를 실행해보면 결과를 얻을 수 있다.
그런데 실제 실행해보니 대충 테스트만 해도 100%코드 커버리지 인거 같다.
즉, 한 함수에 대해 엣지 케이스 같은 여러 테스트 케이스를 테스하지 않아도 한번만이라도 대충 테스트 하면 통과할 비율에 포함하는 것 같다.
*/


  it('합은 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
  });


  // 오브젝트 비교는 toEqual()로 toBe()로 비교하면 실패함.
  it('makes a person object', () => {
    const target = person('kim', 20);
    const expected = {name: 'kim', age: 20,}
    expect(target).toEqual(expected);
  });

  it('toBeTruthy, toBeFalsy 테스트용', () => {
    expect(toggle(true)).toBeFalsy();
    expect(toggle(true)).not.toBeTruthy();
  });

  it('배열의 원소 확인용 toContain() 확인용: [1,2,3]에 2가 들어있는나 체크', () => {
    expect(range(1,3)).toContain(2);
  });

});