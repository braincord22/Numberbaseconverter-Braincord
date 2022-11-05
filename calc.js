
var InNum = null;
var InBase = 2;
var OutBase = 2;
var clickedButton = null;
var clickedList = null;

document.getElementById("buttonAns").addEventListener("click", showAns);      //the answer button
var myAns = document.getElementById("myAns");                                  //the alert where the answer is displayed



var In = document.querySelector("#input1");
In.addEventListener("click", getInputBase, false);

var Out = document.querySelector("#out1");                               //output base button
Out.addEventListener("click", getValues, false);                          //call function getValues on output button click

function getValues(e) {
    if (e.target !== e.currentTarget) {
        
        clickedButton = e.target.id;
        if (clickedButton == "one") {
            OutBase = 1;
        }
        if (clickedButton == "two") {
            OutBase = 2;
        }
        if (clickedButton == "three") {
            OutBase = 3;
        }
        if (clickedButton == "four") {
            OutBase = 4;
        }
        if (clickedButton == "five") {
            OutBase = 5;
        }
        if (clickedButton == "six") {
            OutBase = 6;
        }
        if (clickedButton == "seven") {
            OutBase = 7;
        }
        if (clickedButton == "eight") {
            OutBase = 8;
        }
        if (clickedButton == "nine") {
            OutBase = 9;
        }
        if (clickedButton == "ten") {
            OutBase = 10;
        }
        if (clickedButton == "eleven") {
            OutBase = 11;
        }
        if (clickedButton == "twelve") {
            OutBase = 12;
        }
        if (clickedButton == "thirteen") {
            OutBase = 13;
        }
        if (clickedButton == "fourteen") {
            OutBase = 14;
        }
        if (clickedButton == "fifteen") {
            OutBase = 15;
        }
        if (clickedButton == "sixteen") {
            OutBase = 16;
        }
    }

}

function getInputBase(a) {
    if (a.target !== a.currentTarget) {
        clickedList = a.target.id;
        if (clickedList == "ione") {
            InBase = 1;
        }
        if (clickedList == "itwo") {
            InBase = 2;
        }
        if (clickedList == "ithree") {
            InBase = 3;
        }
        if (clickedList == "ifour") {
            InBase = 4;
        }
        if (clickedList == "ifive") {
            InBase = 5;
        }
        if (clickedList == "isix") {
            InBase = 6;
        }
        if (clickedList == "iseven") {
            InBase = 7;
        }
        if (clickedList == "ieight") {
            InBase = 8;
        }
        if (clickedList == "inine") {
            InBase = 9;
        }
        if (clickedList == "iten") {
            InBase = 10;
        }
        if (clickedList == "ieleven") {
            InBase = 11;
        }
        if (clickedList == "itwelve") {
            InBase = 12;
        }
        if (clickedList == "ithirteen") {
            InBase = 13;
        }
        if (clickedList == "ifourteen") {
            InBase = 14;
        }
        if (clickedList == "ififteen") {
            InBase = 15;
        }
        if (clickedList == "isixteen") {
            InBase = 16;
        }
    }
}

function showAns() {
    InNum = document.getElementById('inNum').value;
    alert("entered no.= " + InNum + ", Input base=" + InBase + ", output base=" + OutBase);
    if (InBase < 11 && OutBase < 11) {
        var num = InNum;
        var dec = 0;
        var i = 0;
        //inDigits=new Array();     //array not needed till base 10
        while (num !== 0) {
            dec = dec + (num % 10) * Math.pow(InBase, (i));
            num = Math.floor(num / 10);
            i = i + 1;
        }
        //got the decimal value of the input 
        //now convert in the required base
        var out = 0;
        var j = 0;
        while (dec !== 0) {
            out = out + (dec % OutBase) * Math.pow(10, j);
            j = j + 1;
            dec = Math.floor(dec / OutBase);
        }


        myAns.textContent = out;
    }
    else{
        var len=InNum.length;
        inputArray=new Array();
        var Dec=0;
        var a=0;                                                    
        for(var i=0;i<len;i++){
            if(InNum[i]=='A' || InNum[i]=='a'){
                inputArray[i]=10;
            }
            else if(InNum[i]=='B' || InNum[i]=='b'){
                inputArray[i]=11;
            }
            else if(InNum[i]=='c' || InNum[i]=='c'){
                inputArray[i]=12;
            }
            else if(InNum[i]=='D' || InNum[i]=='d'){
                inputArray[i]=13;
            }
            else if(InNum[i]=='E' || InNum[i]=='e'){
                inputArray[i]=14;
            }
            else if(InNum[i]=='F' || InNum[i]=='f'){
                inputArray[i]=15;
            }
            else{
                inputArray[i]=Number(InNum[i]);
            }
        }
        for(i=len-1;i>=0;i--){
            Dec=Dec+inputArray[i]*(Math.pow(InBase,a));
            a=a+1;
        }                                                           //now Dec variable contains decimal value

        outputArray=new Array();
        q=Dec;
        r=0;
        a=0;
        while(q!==0){
            r=q%OutBase;
            if(r==10){
                outputArray[a]='A';
            }
            else if(r==11){
                outputArray[a]='B';
            }
            else if(r==12){
                outputArray[a]='C';
            }
            else if(r==13){
                outputArray[a]='D';
            }
            else if(r==14){
                outputArray[a]='E';
            }
            else if(r==15){
                outputArray[a]='F';
            }
            else{
                outputArray[a]=r;
            }
            
            a++;
            q=Math.floor(q/OutBase);
        }
        realOutput=new Array();
        for(i=0;i<outputArray.length;i++){
            realOutput[i]=outputArray[outputArray.length-1-i];
        }
        myAns.textContent=realOutput.join("");
    }
}