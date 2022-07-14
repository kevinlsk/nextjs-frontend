import { useState, useEffect } from 'react';

export function useGlobalState<T>(storageKey: string, initialState: T): [T, (value: T) => void] {
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    const storageValue = sessionStorage.getItem(storageKey);
    const json = JSON.parse(storageValue);
    setValue(json);
  });

  const newSetValue = (value) => {
    setValue(value);
    const storageValue = JSON.stringify(value);
    sessionStorage.setItem(storageKey, storageValue);
  }

  return [value, newSetValue];
}