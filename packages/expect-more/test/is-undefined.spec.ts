import * as api from '../src';
import { notUndefineds, undefineds } from './lib/fixtures';

check.it('accepts if value is undefined', undefineds, (value) => {
  expect(api.isUndefined(value)).toEqual(true);
});

check.it('rejects otherwise', notUndefineds, (value) => {
  expect(api.isUndefined(value)).toEqual(false);
});