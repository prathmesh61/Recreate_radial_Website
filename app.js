gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({
  repeat: -1,

  ease: "power2.inOut",
  stagger: 0.1,
  yoyo: true,
});
let t2 = gsap.timeline({
  repeat: -1,

  ease: "power2.inOut",
  stagger: 0.1,
  yoyo: true,
});
let t3 = gsap.timeline({
  repeat: -1,

  ease: "power2.inOut",
  stagger: 0.1,
  yoyo: true,
});
let box1 = gsap.timeline({
  repeat: -1,

  ease: "power2.inOut",
  stagger: 0.1,
  yoyo: true,
});
let box2 = gsap.timeline({
  repeat: -1,

  ease: "power2.inOut",
  stagger: 0.1,
  yoyo: true,
});
let box3 = gsap.timeline({
  repeat: -1,

  ease: "power2.inOut",
  stagger: 0.1,
  yoyo: true,
});
gsap.from(".header", {
  duration: 2,
  opacity: 0,
  y: -20,
});
gsap.from(".content h1", {
  duration: 2,
  opacity: 0,
  x: -20,
});
gsap.from(".content p", {
  duration: 2,
  opacity: 0,
  x: 20,
});
gsap.from(".input-cont ", {
  duration: 2,
  opacity: 0,
  y: -20,
});

t1.to(".center img", {
  y: -20,
  duration: 2,
});
t2.to(".left img", {
  rotate: 20,
  duration: 4,
});
t3.to(".right img", {
  rotate: -20,
  duration: 4,
});

box1.to(".box1-img ", {
  duration: 3,
  x: -50,
});
box2.from(".box2 img ", {
  duration: 5,

  rotate: -40,
});
box3.from(".box3 img ", {
  duration: 3,

  y: -40,
});
