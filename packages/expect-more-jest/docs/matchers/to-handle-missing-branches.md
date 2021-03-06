# expect(fn).toHandleMissingBranches(shape: object | any[])

When given a JSON-serialisable data structure, invokes your function multiple for each copy of `shape` where a single
nested Object or Array property has been removed. It is intended to assert that a function is resilient against
incomplete or invalid data received from external sources.

See the [spec for gen.missingBranches][missing-branches] for detail on how values are deconstructed.

## Example

```js
import { get } from 'lodash';

// Given this data
const shape = {
  deeply: {
    dippy: {
      bout: {
        the: {
          way: {
            you: ['walk']
          }
        }
      }
    }
  }
};

// This test would pass
it('asserts if your function safely reads nested values without throwing', () => {
  const safe = data => get('deeply.dippy.bout.the.way.you.0', data);
  expect(safe).toHandleMissingBranches(shape);
});

// Whereas this test would fail
it('rejects if your function throws when attempting to read unreachable values', () => {
  const unsafe = ({ deeply: { dippy: { bout: { the: { way: { you: [walk] } } } } } }) => walk;
  expect(unsafe).toHandleMissingBranches(shape);
});
```

[missing-branches]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/test/gen/missing-branches.spec.ts
