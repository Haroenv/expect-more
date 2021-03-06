import { notWhitespaceStrings, whitespaceStrings } from '../../../test/fixtures';
import * as api from '../src';

check.it('accepts if value is a non-empty string containing only whitespace', whitespaceStrings, (value) => {
  expect(api.isWhitespace(value)).toEqual(true);
});

check.it('rejects otherwise', notWhitespaceStrings, (value) => {
  expect(api.isWhitespace(value)).toEqual(false);
});
