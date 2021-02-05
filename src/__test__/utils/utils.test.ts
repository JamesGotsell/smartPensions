import { getRamdomValue } from '../../lib/utils'

describe("returns random item in array", () => {


  test("the function should return a random value", () => {
    const array = ["a", "b", "c"]
    const result = getRamdomValue(array);
    expect(result).toMatch(/a|b|c/)
  });
});