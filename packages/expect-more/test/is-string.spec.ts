import { notStrings, strings } from '../../../test/fixtures';
import * as api from '../src';

check.it('accepts if value is a string', strings, (value) => {
  expect(api.isString(value)).toEqual(true);
});

check.it('rejects otherwise', notStrings, (value) => {
  expect(api.isString(value)).toEqual(false);
});
