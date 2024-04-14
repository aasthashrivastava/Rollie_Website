// var cursor= document.querySelector("#cursor");
// document.addEventListener("mousemove",function(dets){
// cursor.style.left = `${dets.x+5}px`;
// cursor.style.top = `${dets.y+5}px`;
// });
// document.addEventListener("mouseenter",function(){
//     cursor.style.transform = "scale(1.2)"
// })
// document.addEventListener("mouseleave",function(){
//     cursor.style.transform = "scale(1)"
// })




 gsap.from("#scroll, #scroll2 ,#scroll3, #scroll4",{
    // ease:Expo.easeInOut,
    opacity:.1,
    stagger:0.2,
    //  color:"black",
        scrollTrigger:{
            trigger:"#page4 h1",
            scroller:"body",
            start:"top 60%",
            end:"bottom -50%",
            scrub:.1,
            // markers: true
        },
    })    
    
