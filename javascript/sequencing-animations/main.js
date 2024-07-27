const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

/*
 * 1. Executing the animation using the promise version of the callback hell
 */

/*alice1.animate(aliceTumbling, aliceTiming).finished.then(() => {
  alice2.animate(aliceTumbling, aliceTiming).finished.then(() => {
    alice3.animate(aliceTumbling, aliceTiming);
  })
})*/

/*
 * Implements the sequence animation using the promise chain
 */

/*First implementation*/
/*alice1.animate(aliceTumbling, aliceTiming).finished
  .then(
    () =>{return alice2.animate(aliceTumbling, aliceTiming).finished}
  )
  .then(
    () => {return alice3.animate(aliceTumbling, aliceTiming).finished}
  )*/

/*Second implementation*/
/*Promise.all([alice1, alice2, alice3]); This way we cant predict which promise
will be completed first. All promises will be exeuted at the same time

const alice1Promise = alice1.animate(aliceTumbling, aliceTiming).finished;
const alice2Promise = alice2.animate(aliceTumbling, aliceTiming).finished;
const alice3Promise = alice3.animate(aliceTumbling, aliceTiming).finished;*/

/*
alice1.animate(aliceTumbling, aliceTiming).finished
  .then (() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then (() => alice3.animate(aliceTumbling, aliceTiming).finished);*/

/*Third implementation*/
/*Implement the sequence animation using async and await*/

async function animateAlices(){

  await alice1.animate(aliceTumbling, aliceTiming).finished;
  await alice2.animate(aliceTumbling, aliceTiming).finished;
  await alice3.animate(aliceTumbling, aliceTiming).finished;
}

animateAlices();


