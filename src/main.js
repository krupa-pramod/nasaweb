const API_KEY = import.meta.env.VITE_NASA_API_KEY;

async function getPhoto() {
  try{
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    document.getElementById("nasaPic").src = data.url;
  }
  catch (err) {
    console.log("error",err);
  }
}

getPhoto();

async function getQuote() {
  try {
    const response = await fetch("https://api.kanye.rest");
    const data = await response.json();

    document.getElementById("quote").textContent = data.quote;
  } 
  catch (err) {
    document.getElementById("quote").textContent ="unable to load quote";
    console.log("error", err);
  }
}

document.getElementById("quoteBTN").addEventListener("click", getQuote);

const taskIn = document.querySelector("#command-input");
const taskOut = document.querySelector("#task-out");

taskIn.addEventListener("keydown", async function(event) {

    if (event.key != "Enter") {
        return;
    }

    let command = taskIn.value;

    if (command.trim() == "clear") {
      taskOut.innerHTML = "";
    }

    else{
        taskOut.innerHTML += `
            <p class = "task">${command}</p>
        `
    }
    taskIn.value = "";

});

taskOut.addEventListener("click", function(event) {
    if (event.target.classList.contains("task")) {
        event.target.remove();
    }
});




