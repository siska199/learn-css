const box = document.querySelector(".box");
const boxStories = document.querySelector(".container-box-images");
const iconLeft = document.querySelector(".icon .left");
const iconRight = document.querySelector(".icon .right");
const boxImg = document.querySelector(".box-img");
let tempWidt = 0;
let totalImageUnshow = 21 - 6.6;

function handleScroll(direction) {
  const widthImgBoxs =
    boxImg.clientWidth *
    (totalImageUnshow < 6 && totalImageUnshow > 0 ? totalImageUnshow : 6);
  if (direction == "left") {
    tempWidt -= widthImgBoxs;
    totalImageUnshow += 6;
  }
  if (direction == "right") {
    tempWidt += widthImgBoxs;
    totalImageUnshow -= 6;
  }
  boxStories.style.left = `-${tempWidt}px`;
}
