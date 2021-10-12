const { sum, person } = require('../first_jest_test/index');

describe('사용자는 합을 계산(sum()) 한다.', () => {


  it('합은 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
  });


  // 오브젝트 비교는 toEqual()로 toBe()로 비교하면 실패함.
  it ('makes a person object', () => {
    const target = person('kim', 20);
    const expected = {name: 'kim', age: 20,}
    expect(target).toEqual(expected);
  });



});