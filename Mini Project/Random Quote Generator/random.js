let quotes = ['The Way to get started is to Quit Talking and Begin Doing.','You learn from Failure than from Success','If I quit now, I will soon be back to where I started. And when I started I was desperately wishing to be where I am now.','Be yourself, everyone else is already taken','Two things are infinite: the universe and human stupidity; and Im not sure about the universe','You only live once, but if you do it right, once is enough.','Be the change that you wish to see in the world.','In three words I can sum up everything I have learned about life: it goes on.',"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals","A friend is someone who knows all about you and still loves you.","Always forgive your enemies; nothing annoys them so much.","Live as if you were to die tomorrow. Learn as if you were to live forever.","Without music, life would be a mistake."]

function newQuote()
{
   let ranNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[ranNum];
}
