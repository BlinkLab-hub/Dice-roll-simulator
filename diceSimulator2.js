function roll() {
    let numberOfDice = document.getElementById("numberOfDice").value;
    let results = document.getElementById("results");
    let values = [];
    let images = [];
    for(let i = 0; i < numberOfDice; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
    }
    for(let i = 0; i < values.length; i++) {
        let image = `<figure><figcaption class="value">${values[i]}</figcaption><img src="dice${values[i]}.png" alt="dice ${values[i]}" class="dice"></figure>`;
        images.push(image);
    }
    results.innerHTML = images.join("");
}
