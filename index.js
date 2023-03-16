
let scoreEl = document.getElementsByClassName("class--score-text");
let scoreEl2 = document.getElementsByClassName("class--score-text--guest");

console.log(scoreEl)


count = 0;
count2= 0;

function clicked1(){
    count+=1;
    scoreEl[0].textContent= count;
    

}

function clicked2(){
    count+=2;
    scoreEl[0].textContent= count;
}

function clicked5(){
    count+=5;
    scoreEl[0].textContent= count;
}


function clicked1_2(){
    count2+=1;
    scoreEl2[0].textContent= count2;
    

}

function clicked2_2(){
    count2+=2;
    scoreEl2[0].textContent= count2;
}

function clicked5_2(){
    count2+=5;
    scoreEl2[0].textContent= count2;
}





