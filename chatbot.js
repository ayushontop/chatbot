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

if (con.includes("india")){

  alert("ayushontop Is Also From India ")
}

else if (con.includes("India")){
  alert("ayushontop Is Also From India ")
}

else if (con.includes("Pakistan")){

  alert("Atankwadi Spotted Calling Army To Kill You")
  alert("Closing The Program..")
  alert("🔫🔫🔫")
}

else if (con.includes("pakistan"))
{
  alert("Atankwadi Spotted Calling Army To Kill You")
  alert("Closing The Program..")
  alert("🔫🔫🔫")
}
else {
  alert(`${con} Is A Good Country `)
}
var lang = prompt("Which Is Your Favourite Programming Language?")
let lang1 = lang.toUpperCase()

  if (lang1.includes("YTHON")){
    alert("Python Is A Good Language 😅\n ayushontopIs Expert In Python 👨‍💻")
}
else if (lang1.includes("AND")){
    alert("Android Developer Spotted 🔫\nHands Up 🙃")
}
else if (lang1.includes("SCRIPT")){
    alert("Scripts are love 🤯\nHands Up  ")
}
else if (lang1.includes("SSEMBLY")){
    alert("Itni mehnat kese bhai 😓\n")
}
else if (lang1.includes("TML")){
    alert("Nasa Hacker Spotted.. Well I know you are a graphic desinger too 😶🔫\nHands Up 🙃")
}
else if (lang1.includes("C")){
    alert("You Are Faster Than Python 🐍")
}
else if (lang.includes("++")){
    alert("WELL MY memory game is strong too ")
}
else if (lang.includes("ASH")){
    alert("Hacker Spotted 😱")
}
else {
  alert(`You are one of the smartest person on earth😇😇`)
}
alert("Thanks For Using My Programm\nPlease also folow me on Instagram @ayushontop")