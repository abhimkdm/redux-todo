fdescribe('basic calculator', () => {
  let num1: number;
  let num2: number;

  beforeEach(() => {
    num1 = 10;
    num2 = 10;
  });
  afterEach(() => {
    num1 = null;
    num2 = null;
  });

  it('Should be equal', () => {
    expect(num1).toEqual(num2);
  });

  it('Should be not equal', () => {
    expect(num1).not.toEqual(num2);
  });
});
