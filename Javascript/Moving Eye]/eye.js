
let pupils= document.getElementsByClassName("pupil");
let pupilsArr = Array.from(pupils)

// pupils movement 

   let  pupilStartPoint= -100;
   let pupilRange = 200;
   let currentXPosition=0;
   let currentYPosition=0;
   let fracXValue=0;
   let fracYValue=0;

   let mouseXStartpoint=0;
   let mouseXEndpoint = window.innerWidth ;

   
   let mouseYEndpoint = window.innerHeight;

    let  mouseXRange= mouseXEndpoint-mouseXStartpoint;



   



   window.addEventListener("mousemove", function mousemove(event){
       currentXPosition=event.clientX-mouseXStartpoint;
       fracXValue=currentXPosition/mouseXRange;

       currentYPosition= event.clientY;
       fracYValue= currentYPosition/mouseYEndpoint;

       let pupilXCurrentPosition= pupilStartPoint+( fracXValue*pupilRange);

       let pupilYCurrentPosition= pupilStartPoint+ (fracYValue*pupilRange);

        pupilsArr.forEach((currPupil)=>{

            
           
             currPupil.style.transform=`translate(${pupilXCurrentPosition}px ,${pupilYCurrentPosition}px)`;
             
        });

   });

  window.addEventListener("resize", function windowResize(event){
     mouseXEndpoint = window.innerWidth ;
     mouseXRange= mouseXEndpoint-mouseXStartpoint;
     mouseYEndpoint = window.innerHeight;
   });