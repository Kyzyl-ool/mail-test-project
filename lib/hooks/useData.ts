import { data as mockData } from '../mocks/data';
import { useState } from 'react';
import { intersectionWith, difference } from 'lodash';

export function useArrayData<T extends {}>(url: string): [Array<T>, Function] {
  const [data, setData] = useState<T[]>(mockData.emails as any);

  const remove = (ids: number[]) => {
    setData(
      difference(
        data,
        intersectionWith(data, ids, (v1, v2) => v1.id == v2)
      )
    );
  };

  return [data, remove];
}
