let hOneText = "hi ! i'm asmaa , i'm a "
let spanText = document.querySelector('span')    
let speed = 200
let jobs = ["developer" , "designer" , "youtuber" ]
let res ;
let [x,idx,jobLength] = [0,0,0]

function textInsideH(){
    document.querySelector('.intro').textContent +=hOneText[x]
    x++
   
   let setText = setTimeout(textInsideH,speed)
    if(x >= hOneText.length){
        clearTimeout(setText)
      document.querySelector('span').style.display = "inline-block" 
         
    }
    
}
textInsideH()

let time = setInterval(type,speed)
function type(){
    res = jobs[idx].slice(0,jobLength)
 if(jobLength > jobs[idx].length ){
    clearInterval(time)
   jobLength = 1
    time = setInterval(remove,speed)
 }
 spanText.textContent = res
jobLength++

}
function remove(){
    res = jobs[idx].slice(0,-jobLength)
    spanText.textContent = res
    jobLength++

    if(res.length <=0){
        if(idx >= jobs.length - 1){
            idx= 0
        }else{
           idx++
        }
    clearInterval(time)
   jobLength = 0
    time = setInterval(type,speed)
}   
}







