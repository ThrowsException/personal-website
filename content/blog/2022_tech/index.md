---
title: 2022 Tech
date: "2022-01-23"
description: "2022 Learnings"
---

# 2022 Tech To Learn

- libuv/node internals
- Rust
- Svelte
- K8s
- Terraform


## Learning Libuv

So after programming in Node.js for a while and making a career of JS in general i've decided id like to dive deeper into what makes Node.js actually work. A key part of that i've discovered is libuv. I don't know C and i've never worked without outside like some university classes but here we go.


### The Plan 

Since I already know (hopefully) how to program my goal is to dive in to [libuv](https://github.com/libuv/libuv/tree/v1.x) and find some reference material for things when im stuck. I find I learn best by just going into something and trying to put together the most basic working thing even if I don't really know what it does and work backwards from there. A similar approach is taking something I know works and trying to strip parts out until it either breaks or produces a different behavior to understand what that part does. I find this works best for me especially on larger projects like libuv since trying to understand all of it at once especially when you are new to a lot of the concepts is overwhelmeing, but its very easy to break a small part of it and focus on what that thing does. 

Luckily the libuv project has a nice getting started guide onhow to begin understanding the library. 
- https://github.com/thlorenz/learnuv
- https://thlorenz.com/learnuv/book/

What id like to gather from the exercise is 
  1. how do things like promises actually get scheduled?
  2. What happens to errors?
  3. Are there common ways we write code that are actually not "optimal" for performance but better for readibility. 

This might seem pendantic and not worthwhile, and thats fine. I think there are plenty of examples where programmers actively eschew certain tech or deep dives because it distracts from their overall mindset as Dan Abramov's blog points out https://overreacted.io/things-i-dont-know-as-of-2018/. But, I've found knowing these things over time does become valuable especially when running into performance bottlenecks at scale or maybe understanding why one library is able to far surpass another in performance by using some clever tricks. 

### The Goal

While I don't have one particular goal in mind I'd like to think I walk out of it knowing how libuv works in the context of node from a high level and be able to translate things like 

```js
let data = await fetch("http://localhost/api/items")
                .then(resp => resp.json)
                .then(json => json);
```
and 

```js
setTimeout(() => {....}, 0);
```

into what libuv actually needs to do under the hook to get that data back to the running node progam. Maybe even making a small PR or fix to the libuv code or making a super stripped down high performance version for a very specific use case like only supporting promises or something. My road there is a little more nebulous but I'm excited to begin diving in to gain a better knowledge of how my stuff actually works. 