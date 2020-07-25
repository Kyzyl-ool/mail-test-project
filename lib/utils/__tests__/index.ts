import { makeModifierClassesFromModifiersName, makeObjectFromArray } from '../makeObjectFromArray';

describe('makeObjectFromArray', function() {
  it('should work correctly', function() {
    const arr1 = ['1', '2'];
    const arr2 = ['3', '4'];

    expect(makeObjectFromArray(arr1, value => true)).toEqual({
      '1': true,
      '2': true
    });
    expect(makeObjectFromArray(arr2, value => true)).toEqual({
      '3': true,
      '4': true
    });
    expect(makeObjectFromArray([...arr1, ...arr2], value => true)).toEqual({
      '1': true,
      '2': true,
      '3': true,
      '4': true
    });
    expect(makeObjectFromArray<string>(arr1, value => value)).toEqual({
      '1': '1',
      '2': '2'
    });
  });
});

describe('makeModifierClassesFromModifiersName', function() {
  it('should work correctly', function() {
    const arr = ['123', 'ksjhfjksdf'];
    const blockName = 'class';

    expect(makeModifierClassesFromModifiersName(arr, blockName)).toEqual(['class_123', 'class_ksjhfjksdf']);
  });
});
