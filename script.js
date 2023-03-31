const jokeEle = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', getDadJoke)



async function getDadJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
    const response = await fetch('https://icanhazdadjoke.com', config)

    const data = await response.json()
   
    jokeEle.innerHTML = data.joke;

    // then implementation
    // fetch('https://icanhazdadjoke.com', config).then(response => response.json()).then(data => {
    //     jokeEle.innerHTML = data.joke;
    // })
}

getDadJoke()
