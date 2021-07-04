## FormaDateTime

parse time to human readable form.

### Identifiers
- `MMMM`: Full Month (January)
- `MM`: Partial Month (Jan)
- `Mo`: Numeric Month (01)
- `YYYY`: Full Year (2021)
- `YY`: Partial Year (21)
- `dddd`: Day of the Week (Monday)
- `DD`: Day of the Month (15)
- `Do`: Day (15th)
- `h`: Hours - 12h format (06)
- `H`: Hours - 24h format (18)
- `mm`: Minutes -zero padded(05)
- `ss`: Seconds -zero padded (05)
- `pa`: AM/PM

```js
<!-- default options -->
options : {
  padMonth : true,
  padDays: true,
  padHours: true
}
```

```
const publishedOn = new FormatDateTime("Published on: {DD} {MMMM} {YYYY}");
console.log(publishedOn.render(new Date()));
```
