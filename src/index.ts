import Card = jf2.Card;

function hello(card: Card): void {
    console.log(card.name);
}

let card = {name: "James"};

hello(card);
