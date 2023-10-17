const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');
let pos = 0;


//функція із Lesson 66
// function myAnimation() {
//   const elem = document.querySelector('.box');
//   let pos = 0;

//   const id = setInterval(frame, 10);

//   function frame(id) {
//     if (pos == 300) {
//       clearInterval();
//     } else {
//       pos ++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }


//оновлена функція
function myAnimation() {
  pos ++;
  elem.style.top = pos + "px";
  elem.style.left = pos + "px";

  if (pos < 300) {
    requestAnimationFrame(myAnimation);
  }
 
}



btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

//для відміни
let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id)
