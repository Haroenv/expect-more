# expect(value: any).toBeIso8601()

Asserts that a value is a `String` which conforms to **common use-cases**\* of the [ISO 8601][iso-8601] standard
representation of dates and times.

## Examples

```js
expect(log.timestamp).toBeIso8601();
```

\* To add support for less-used forms of the [ISO 8601][iso-8601] standard, [Pull Requests][pull-request] are welcome.

[iso-8601]: https://en.wikipedia.org/wiki/ISO_8601
[pull-request]: https://github.com/JamieMason/expect-more/pulls
