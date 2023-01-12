const inputText= document.getElementById("inputtext");
const counter= document.getElementById("textcounter");
const start= document.getElementById("btn");
let startTime, endTime,randomNumber,wrongWords,selectedSentence

const sentence=["But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]

function playGame(){
    randomNumber= Math.floor(Math.random()*4);
      selectedSentence=sentence[randomNumber]
     counter.innerText=(selectedSentence);
     let date= new Date();
     startTime= date.getTime();
    btn.innerText="Done";

 }

 function wordCounter(str){
   return str.split(" ").length;
 }

 function endGame(){
    let date= new Date();
    endTime= date.getTime();
    let totalTime= (endTime-startTime)/(1000*60);

    let inputWords= inputText.value;
    
    let wordCount= wordCounter(inputWords);
    let speed= Math.round(wordCount/totalTime);
    let msg="Your typing speed is "+speed+" WPM. "

    counter.innerText=  msg+ accuracy(selectedSentence,inputWords);
    btn.innerText="Start";

    
    
     
 }

 function accuracy(str1,str2){
    let currentChar=str1.split(" ");
    let inputCurrent=str2.split(" ");
    let correctWords=0;
    
    currentChar.forEach(function(item,index){
        if(item==inputCurrent[index]){
            correctWords++;
        }
    });

     wrongWords= (currentChar.length -correctWords);
      return (correctWords+" correct out of " +currentChar.length+", Accuracy: "+Math.round((correctWords/currentChar.length)*100)+"%");        
 
 }



start.addEventListener("click", function(){
    if(this.innerText=="Start"){
        inputText.disabled=false;
        inputText.value="";
        playGame();
    } else if (this.innerText=="Done"){
        inputText.disabled=true;
        endGame();
      
    }
    
});








