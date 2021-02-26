const enhancer = require('./enhancer.js');

let mjolnir = {};

beforeEach(() => {
  (mjolnir.name = 'Mjolnir'),
    (mjolnir.durability = 90),
    (mjolnir.enhancement = 14);
});
describe('Existance', () => {
  it('Am I sane?', () => {
    expect(1).toBe(1);
  });
});

describe('Repair Items', () => {
  it('Restore item durability', () => {
    enhancer.repair(mjolnir);
    expect(mjolnir.durability).toBe(100);
  });

  describe('Successfuly Enhanced Items', () => {
    it('Item enhancement level increases', () => {
      expect(mjolnir.enhancement).toBe(14);
      enhancer.success(mjolnir);
      expect(mjolnir.enhancement).toBe(15);
      expect(mjolnir.durability).toBe(90);
    });
  });

  describe('Failed Enhanced Items', () => {
    it('Item enhancement < 15, -5 durability', () => {
      expect(mjolnir.enhancement).toBe(14);
      expect(mjolnir.durability).toBe(90);
      enhancer.fail(mjolnir);
      expect(mjolnir.enhancement).toBe(14);
      expect(mjolnir.durability).toBe(85);
    });
    it('Item enhancement > 15, -10 durability', () => {
      mjolnir.enhancement = 15;
      expect(mjolnir.enhancement).toBe(15);
      expect(mjolnir.durability).toBe(90);
      enhancer.fail(mjolnir);
      expect(mjolnir.enhancement).toBe(15);
      expect(mjolnir.durability).toBe(80);
    });
    it('Item enhancement > 16, -10 durability, -1 enhancement', () => {
      mjolnir.enhancement = 17;
      expect(mjolnir.enhancement).toBe(17);
      expect(mjolnir.durability).toBe(90);
      enhancer.fail(mjolnir);
      expect(mjolnir.enhancement).toBe(16);
      expect(mjolnir.durability).toBe(80);
    });
  });
});
