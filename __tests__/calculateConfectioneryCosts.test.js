const calculateConfectioneryCosts = require("../src/calculateConfectioneryCosts");

describe("calculateConfectioneryCosts", () => {
  test("Check empty array returns empty array", () => {
    const input = [];
    const result = calculateConfectioneryCosts(input, 8);
    expect(result).toEqual(input);
  });
  test('function works as expected',()=>{
    input = [
        {
          name: "Beyonce Bowls",
          yearlyCumulativeSpend: "£44",
          purchaseToday: {
            item: "White mice",
            costPerItem: "£3",
            amountBought: 17,
          },
        },
        {
          name: "Kray-Z",
          yearlyCumulativeSpend: "£28",
          purchaseToday: {
            item: "Flying saucers",
            costPerItem: "£2",
            amountBought: 28,
          },
        },
        {
          name: "Matey Terry",
          yearlyCumulativeSpend: "£36",
          purchaseToday: {
            item: "Cola bottles",
            costPerItem: "£4",
            amountBought: 81,
          },
        },
        {
          name: "Justine Klimberbake",
          yearlyCumulativeSpend: "£30",
          purchaseToday: {
            item: "Giant jelly snakes",
            costPerItem: "£103",
            amountBought: 2,
          },
        },
      ];
      result = calculateConfectioneryCosts(input)
      expected = [
        { name: 'Beyonce Bowls', yearlyCumulativeSpend: 95 },
        { name: 'Kray-Z', yearlyCumulativeSpend: 84 },
        { name: 'Matey Terry', yearlyCumulativeSpend: 360 },
        { name: 'Justine Klimberbake', yearlyCumulativeSpend: 236 }
      ]
      expect(expected).toEqual(result)
  })
  test("Check missing properties in input objects", () => {
    const input = [
      {
        name: "Beyonce Bowls",
        purchaseToday: {
          item: "White mice",
          costPerItem: "£3",
          amountBought: 17,
        },
      },
      {
        name: "Kray-Z",
        yearlyCumulativeSpend: "£28",
        purchaseToday: {
          item: "Flying saucers",
          amountBought: 28,
        },
      },
    ];
    const result = calculateConfectioneryCosts(input);
    expect(result).toEqual([
      { name: "Beyonce Bowls", yearlyCumulativeSpend: 0 },
      { name: "Kray-Z", yearlyCumulativeSpend: 0 },
    ]);
  });
});
