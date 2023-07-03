const chatbot = document.getElementById("chatbot");
const input = document.getElementById("input");
const questionInput = input.querySelector("input");
const output = input.querySelector("p");

chatbot.addEventListener("click", function() {
  chatbot.style.display = "none";
  input.style.display = "block";
  questionInput.focus();
});

input.addEventListener("submit", function(event) {
  event.preventDefault();
  const question = questionInput.value.toLowerCase();
  let answer = "";

  switch (question) {
    case "name":
      answer = document.getElementById("name").innerHTML;
      break;
    case "job title":
      answer = document.getElementById("job-title").innerHTML;
      break;
    case "email address":
      answer = document.getElementById("email-address").innerHTML;
      break;
    case "phone number":
      answer = document.getElementById("phone-number").innerHTML;
      break;
    case "what is your professional summary?":
      answer = document.getElementById("professional-summary").innerHTML;
      break;
    case "what is your work experience?":
      answer = document.getElementById("work-experience").innerHTML;
      break;
    case "what are your projects?":
      answer = document.getElementById("projects").innerHTML;
      break;
    case "what is your education?":
      answer = document.getElementById("education").innerHTML;
      break;
    case "what are your certifications?":
      answer = document.getElementById("certifications").innerHTML;
      break;
    case "what are your skills?":
      answer = document.getElementById("skills").innerHTML;
      break;
    case "what courses have you taken?":
      answer = document.getElementById("courses").innerHTML;
      break;
    default:
      answer = "I'm sorry, I don't understand your question. Please try again.";
  }

  output.innerHTML = answer;
  questionInput.value = "";
  questionInput.focus();
});