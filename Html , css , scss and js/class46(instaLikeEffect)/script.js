const img  = document.querySelector('.img img');
const post = document.querySelector('.post')
const loveIcon = document.querySelector('.fa-heart');

let like = false;

post.addEventListener("dblclick",function(){
    if(like === true){
        like = false;
        loveIcon.style.opacity = 0
    }else{
           like = true;
        loveIcon.style.opacity = 1;
        loveIcon.style.left= "20%"
        loveIcon.style.transform = "scale(1)"

    }
       
    })