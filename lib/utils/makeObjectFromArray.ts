export function makeObjectFromArray<T extends unknown>(array: string[], func: (value: string) => T): Record<string, T> {
  return array.reduce(
    (previousValue, currentValue) =>
      Object.assign(previousValue, {
        [currentValue]: func(currentValue)
      }),
    {}
  );
}

export function makeModifierClassesFromModifiersName(modifiersName: string[], blockName: string): string[] {
  return modifiersName.map(value => `${blockName}_${value}`);
}

export function makeClassNames(blockName, modifiers = []) {
  return {
    [blockName]: true,
    ...makeObjectFromArray<true>(makeModifierClassesFromModifiersName(modifiers, blockName), value => true)
  };
}
