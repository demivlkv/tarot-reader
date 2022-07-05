function card(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
};

// create an array to display tarot cards
const deck = [
    new card('The Fool', 'The Fool description here', '00 The Fool'),
    new card('The Magician', 'The Magician description here', '01 The Magician'),
    new card('High Priestess', 'High Priestess description here', '02 High Priestess'),
    new card('The Empress', 'The Empress description here', '03 The Empress'),
    new card('The Emperor', 'The Emperor description here', '04 The Emperor'),
    new card('Hierophant', 'Hierophant description here', '05 Hierophant'),
    new card('The Lovers', 'The Lovers description here', '06 The Lovers'),
    new card('Strength', 'Strength description here', '07 Strength')
];

// randomize tarot cards
function getRandom(num) {
    const randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
};

// get a random card upon clicking "draw" button
document.getElementById("draw").onclick = function() {
    const index = getRandom(8);
    const currentCard = deck[index];

    // get respective information associated with drawn currentCard
    document.getElementById("card").innerHTML = '<img src="./assets/images/' + currentCard.image + '.jpg"><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>';
}