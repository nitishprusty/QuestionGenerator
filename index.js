//Higher Order Function
//Higher Order Function are those functions that take functions as argument and return another function as result
//scenario :- Write a function for a test so that different candidate will get different question

const questions = [
  "Jquery",
  "React",
  "Bootstrap",
  "hmtl",
  "Node.js",
  "SQL",
  "Mongodb",
  "C#",
  "Java",
  "Python",
  "C++",
  "C",
  "microprocessor",
  "Super-class",
  "class variable",
  "SDLC",
  "Integrated Development Environment",
  "Interface",
  "constructor and method abstract class and interface",
  "abstract class",
  "array",
  "object",
  "class",
  "function",
  "variable",
  "Cin and Cout",
  "types of constructors",
  "artificial intelligence",
  "data-type",
  "data-type conversion",
  "data-type casting",
  "machine learning",
  "deep learning",
  "data mining",
  "data science",
  "data science tools",
  "data science libraries",
  "OOPS principles",
  "OOPs",
  "various type of access modifiers",
  "inheritance",
  "bye stream",
  "destructor",
  "primary memory",
  "secondary memory",
  "heap",
  "stack",
  "static",
  "dynamic",
  "dynamic binding",
  "dynamic linking",
  "World Wide Web",
  "operating system",
  "operating system architecture",
  "operating system components",
  "operating system components architecture",
  "cryptography",
];

const InterviewQues = (name, topic) => {
  const d = new Date();
  const hrs = d.getHours();
  let greet = undefined;
  if (hrs >= 5 && hrs < 12) {
    greet = "Good Morning";
  } else if (hrs >= 12 && hrs < 17) {
    greet = "Good Afternoon";
  } else if (hrs >= 17 && hrs < 19) {
    greet = "Good Evening";
  } else {
    greet = "Good Night";
  }
  return `${greet}, ${name}. Please tell us something About ${topic}.`;
};
/*  const interview = InterviewQues("Sarthak");
        interview("SQL");*/

const handlesubmit = (e) => {
  e.preventDefault();
  const inputName = document.getElementById("name").value;
  const randomNum = Math.floor(Math.random() * questions.length);
  const randomQues = questions[randomNum];
  document.getElementById("ques").innerHTML = InterviewQues(
    inputName,
    randomQues
  );
  document.querySelector("form").style.display = "none";
  document.getElementById("return-btn").style.display = "flex";
};
document.getElementById("return-btn").addEventListener("click", function () {
  document.querySelector("form").style.display = "flex";
  this.style.display = "none";
  location.reload();
});
document.querySelector("form").addEventListener("submit", handlesubmit);

var dt = new Date();
var currentyear = dt.getFullYear();
//console.log(currentyear);

var copyRighttext = document.getElementById("copyright");
copyRighttext.innerText = "Copyright © " + currentyear + " Nitish Kumar Prusty";
