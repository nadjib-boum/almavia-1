import { addZero } from "./methods";

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