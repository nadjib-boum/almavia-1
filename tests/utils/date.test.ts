import { getLastDay, deconstructDate, correctDateFormat, getDefaultDateRange } from "../../src/utils/date";

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


describe ('correctDateFormat Function', () => {
  it ('Should Return The Correct Date', () => {
    const value = getDefaultDateRange ();
    expect (value).toEqual (['25/02/2023', '01/05/2023']);
  })
});
