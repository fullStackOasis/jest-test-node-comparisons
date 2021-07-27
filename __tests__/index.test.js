const index = require('../index');

test('compare 1', () => {
  expect(index.compareToResponse(1)).toBe(false);
});

test('compare Hello', () => {
  expect(index.compareToResponse('Hello')).toBe(false);
});

test('compare Jello', () => {
  expect(index.compareToResponse('Jello')).toBe(true);
});
