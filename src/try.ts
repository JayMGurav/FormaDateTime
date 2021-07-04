import Format from "./index";

const PublishedOn = new Format("Published on {DD} {MMMM} {YYYY}");
console.log(PublishedOn.render(new Date()));
