## FormaDateTime

Parse and render date/time to human readable form. Just provide a string with below mentioned *Identifiers* in `{}` as `{MMMM}` once, and render it anywhere with any date object. Since the passed template is parsed once and can be rendered anytime with whatever date obj provided, so provides better performance. For different templates we have to create new instance.

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


## Options
```js
<!-- default options -->
options : {
  padMonth : true,
  padDays: true,
  padHours: true
}
```
## Usage
```js
const publishedOn = new FormatDateTime("Published on: {Do} {MMMM} {YYYY}", {
  padMonth : true,
  padDays: true,
  padHours: true
});
console.log(publishedOn.render(new Date())); //Published on: 24th December 2012
```
