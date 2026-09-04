export type Link = { href: string; label: string };

export const blogs: Link[] = [
  { href: 'https://taylor.town/', label: 'Taylor Town' },
  { href: 'https://grugbrain.dev/', label: 'Grug' },
  { href: 'https://overreacted.io', label: 'Dan Abramov' },
  { href: 'https://lucumr.pocoo.org/about/', label: 'Armin Roncher' },
  { href: 'https://staffeng.com/stories', label: 'Will Larson: Staff Engineering' },
  { href: 'https://lethain.com/', label: 'Will Larson: Blog' },
  { href: 'https://codeascraft.com/', label: 'Etsy Engineering Blog' },
  { href: 'https://netflixtechblog.com/', label: 'Netflix Engineering Blog' },
  { href: 'https://www.fast.ai/', label: 'Fast.ai' },
  { href: 'https://blog.codinghorror.com/', label: 'Coding Horror: Jeff Atwood' },
];

export const posts: Link[] = [
  {
    href: 'https://www.bitlog.com/2020/02/12/why-are-we-so-bad-at-software-engineering/',
    label: 'Why are we so bad at software engineering',
  },
  {
    href: 'https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/',
    label: 'What color is your function',
  },
  {
    href: 'https://blog.codinghorror.com/the-magpie-developer/',
    label: 'The Magpie Developer',
  },
];

export const videos: Link[] = [
  {
    href: 'https://www.youtube.com/watch?v=_756Hsawbv4',
    label: 'A11y And React, Why Is It Important? — Johnny Bell, React Rally 2019',
  },
  {
    href: 'https://www.youtube.com/watch?v=sZPxFKRTW94',
    label: 'Human React — Brian Holt',
  },
  {
    href: 'https://www.youtube.com/watch?v=AdNJ3fydeao',
    label: 'Rethinking Reactivity — Rich Harris',
  },
  {
    href: 'https://www.youtube.com/watch?v=wf-BqAjZb8M',
    label: 'Beyond PEP 8: Best Practices for Beautiful Intelligible Code — Raymond Hettinger, PyCon 2015',
  },
];
