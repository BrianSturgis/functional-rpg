import * as battle from "../src/js/battle-system.js";

describe("battle system functions", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  it("should return 2", () => {
    const rollForD6 = battle.rollDice(6);
    expect(rollForD6).toEqual(4);
  });
});
