const { setCodes } = require("./setCodes");

describe("setCodes", () => {
  it("Определение кода для символа", () => {
    const result = setCodes([
      { name: "b", count: 3, parent: "ba", code: "" },
      { name: "a", count: 4, parent: "ba", code: "" },
      { name: "ba", count: 7, code: "" },
    ]);
    expect(result).toEqual([
      { char: "b", code: "1" },
      { char: "a", code: "0" },
    ]);
  });

  it("Определение кода для символа", () => {
    const result = setCodes([
      { name: "c", count: 2, code: "", parent: "cb" },
      { name: "b", count: 3, code: "", parent: "cb" },
      { name: "a", count: 4, code: "", parent: "acb" },
      { name: "cb", count: 5, code: "", parent: "acb" },
      { name: "acb", count: 9, code: "" },
    ]);
    expect(result).toEqual([
      { char: "c", code: "01" },
      { char: "b", code: "00" },
      { char: "a", code: "1" },
    ]);
  });
});
