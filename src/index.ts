import Card = jf2.Card;

function getStory(card: Card): string {
    return `<article class="h-card">
                <h1 class="p-name">${card.name}</h1>
                <h2 class="p-note">${card.note}</h2>
                <dl>
                    <dt>Email:</dt>
                    <dd><a class="u-email" href="mailto:${card.email}">${card.email}</a></dd>
                    <dt>Tel:</dt>
                    <dd><a class="p-tel" href="tel:+${card.tel}">${card.tel}</a></dd>
                    <dt>URL:</dt>
                    <dd><a class="u-url" href="${card.url}">${card.url}</a></dd>
                </dl>
            </article>`;
}

let card = {
    name: "James Benner",
    note: "Geek and Stuff",
    email: "me@example.org",
    tel: "KL5.867.5309",
    url: "http://www.example.org"
};

console.log(getStory(card));
