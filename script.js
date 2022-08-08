const iconLeft = document.querySelector(".icon .left");
const iconRight = document.querySelector(".icon .right");
const boxImages = document.querySelectorAll(".box-img");

let lastId = 0
const handleIntersectionObserver = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
        lastId = entry.target.id
    }
  });
};
const options = {
    threshold: 0.5
};
const observer = new IntersectionObserver(handleIntersectionObserver, options);
boxImages.forEach((image) =>{
    observer.observe(image)
});    

const handleScroll = (type)=>{
    console.log("type: ", type)
}

