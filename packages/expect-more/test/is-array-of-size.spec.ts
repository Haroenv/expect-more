import * as api from '../src';
import { arrayOfFiveItems, notArrayOfFiveItems } from './lib/fixtures';

check.it('accepts if value is an array whose length matches the given number', arrayOfFiveItems, (value) => {
  expect(api.isArrayOfSize(5)(value)).toEqual(true);
  expect(api.isArrayOfSize(5, value)).toEqual(true);
});

check.it('rejects otherwise', notArrayOfFiveItems, (value) => {
  expect(api.isArrayOfSize(2)(value)).toEqual(false);
  expect(api.isArrayOfSize(2, value)).toEqual(false);
});