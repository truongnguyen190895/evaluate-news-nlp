import { checkForUrl } from "./urlChecker";

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'

const form = document.getElementById("urlForm");
const subjectivity = document.getElementById("subjectivity");
const text = document.getElementById("text");
// const validation = document.getElementBy("validation");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log("Submitted");
  // Get the URL from the input field
  const formText = document.getElementById("name").value;
  if (checkForUrl(formText)) {
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: formText }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        subjectivity.innerHTML = data.subjectivity;
        text.innerHTML = data.sentence_list[0].segment_list[0].text;
      })
      .catch((error) => console.error("Something went wrong ", error));
  }
}

// Export the handleSubmit function
export { handleSubmit };
