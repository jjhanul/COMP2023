const quotes = [
    {
        quote: "If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
        author: "Martin Luther King Jr",
    },
    {
        quote: "There is no use whatever trying to help people who do not help themselves. You cannot push anyone up a ladder unless he be willing to climb himself.",
        author: "Andrew Carnegie",
    },
    {
        quote: "The past can hurt. But from the way I see it, you can either run from it, or learn from it.",
        author: "Lion King",
    },
    {
        quote: "Don’t close your eyes. Look! The reality of fear can be different than you think.",
        author: "Finding Nemo",
    },
    {
        quote: "To love someone, you have to love yourself first.",
        author: "Beauty and the Beast",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Success is going from failure to failure without a loss of enthusiasm.",
        author: "Winston Churchill",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQutoes= quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQutoes.quote;
author.innerText = todaysQutoes.author;
