import { getLastDay, deconstructDate, addZero } from "../../src/utils/date";

describe ('getLastDay Function', () => {

  it ('should return 31', () => {
    const value = getLastDay (1);
    expect(value).toBe (31);
  })

})

describe ('deconstructDate Function', () => {

  it ('should deconstruct the date following this schema {d: int, m: int, y: int}', () => {
    const value = deconstructDate('22/2/2023');
    expect(value).toEqual({ d: 22, m: 2, y: 2023 });
  })

})

describe ('addZero Function', () => {

  it ('should add zero to 5 because 5 < 10', () => {
    const value = addZero (5);
    expect(value).toBe ('05');
  });

  it ('should not add 0 to 18 because 18 > 10', () => {
    const value = addZero (18);
    expect (value).toBe ('18');
  });

});