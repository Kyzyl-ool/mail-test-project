import { useState } from 'react';

export function useSet<T extends any>(
  initialState: Iterable<T>
): {
  set: Set<T>;
  add: Function;
  remove: Function;
} {
  const [set, setSet] = useState<Set<T>>(new Set<T>(initialState));

  const add = (value: T) => {
    setSet(new Set(set.add(value)));
  };

  const remove = (value: T) => {
    set.delete(value);
    setSet(new Set(set));
  };

  return { set, add, remove };
}
