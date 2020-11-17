
window.onload = function () 
{ 
var msg = new SpeechSynthesisUtterance();
msg.text = "Welcome to the chatbot";

window.speechSynthesis.speak(msg);
let name = prompt("What is  Your Name")

alert(`Hello ${name} , I Am A ChatBot Created By @ayushontop `);

let botName = prompt("I Have No Name , Can You Please  Give Me A Name");

alert(`${botName} Is A Good Name For Me 😅`)

let age = prompt(`Hey ${name}, What is Your Age?`)

alert(`Oh Good`)

alert(`In My Case I Dont Have Age , I Have Version😅
My Version Is 1.0 (Maybe Updated Soon)`)

let con = prompt("In Which Country You Live?")

let conName = con.toLowerCase();
if (conName.includes('india')){

  alert("ayushontop Is Also From India ")
}

// else if (con.includes("India")){
//   alert("ayushontop Is Also From India ")
// }

else if (conName.includes('pakistan')){

  alert("Atankwadi Spotted Calling Army To Kill You")
  alert("Closing The Program..")
  alert("🔫🔫🔫")
}

// else if (con.includes("pakistan"))
// {
//   alert("Atankwadi Spotted Calling Army To Kill You")
//   alert("Closing The Program..")
//   alert("🔫🔫🔫")
// }
else {
  alert(`${con} Is A Good Country `)
}
var lang = prompt("Which Is Your Favourite Programming Language?")
let lang1 = lang.toLowerCase()

if (lang1.includes("ython")){
    alert("Python Is A Good Language 😅\n ayushontopIs Expert In Python 👨‍💻")
}
else if (lang1.includes("and")){
    alert("Android Developer Spotted 🔫\nHands Up 🙃")
}
else if (lang1.includes("script")){
    alert("Scripts are love 🤯\nHands Up  ")
}
else if (lang1.includes("ssembly")){
    alert("Itni mehnat kese bhai 😓\n")
}
else if (lang1.includes("tml")){
    alert("Nasa Hacker Spotted.. Well I know you are a graphic desinger too 😶🔫\nHands Up 🙃")
}
else if (lang1.includes("c")){
    alert("You Are Faster Than Python 🐍")
}
else if (lang.includes("++")){
    alert("WELL MY memory game is strong too ")
}
else if (lang.includes("ash")){
    alert("Hacker Spotted 😱")
}
else {
  alert(`You are one of the smartest person on earth😇😇`)
}

//another question 
var hours = prompt("How many hours you code everyday?")
hoursInt = parseInt(hours)

if(hoursInt>0){
  if(hoursInt>=8){
    alert("That is insane amount of time you need rest don't burn yourself out")
}
  else if(hoursInt>=6 && hoursInt<8){
     alert("That's too much coding you need some rest but your dedication is awesome")
  }
  else if(hoursInt>=3 && hoursInt<6){
     alert("Very nice you are doing really well")
  }
  else if(hoursInt>=1 && hoursInt<3){
     alert("Good work but you can do much better than this")
  }
  else if(hoursInt>0 && hoursInt<1){
     alert("You have to work more hard than this but you are consistent")
  }
}
else{
  alert('Invalid Input')
}
  

let interest = prompt('Which field are you interested in? \n 1) Android development \n 2) Web Development \n 3) Game Development \n 4) Competitve Programming \n (Enter number)')
if(interest==='1'){
  alert('Android is Awesome 📲\nKeep Coding')
}
else if(interest==='2'){
  alert('Web development is Cool buddy 💻\nKeep Coding')
}
else if(interest==='3'){
  alert("Game development is best 🎮\nKeep Coding")
}
else{
  alert('Invalid Input');
}
  
alert("Thanks For Using My Programm\nPlease also folow me on Instagram @ayushontop")
  
}
