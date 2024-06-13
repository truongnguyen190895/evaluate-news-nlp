import { checkForUrl } from "./urlChecker";

export function handleSubmit(event) {
  event.preventDefault();
  const subjectivity = document.getElementById("subjectivity");
  const text = document.getElementById("text");
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
  } else {
    window.alert("The link is invalid");
  }
}

const form = document.getElementById("urlForm");
form.addEventListener("submit", handleSubmit);
