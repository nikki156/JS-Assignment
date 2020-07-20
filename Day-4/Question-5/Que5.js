let sales = parseInt(prompt("Enter the sales from 0 to 20000"));

if(sales>=0 && sales<=5000){
    commision = (sales * 0.02);
    console.log(`The Commision earned is ${commision} `);
}
else if(sales>=5001 && sales<=10000){
    commision = (sales * 0.05);
    console.log(`The Commision earned is ${commision}`);
}
else if(sales>=10001&& sales<=20000){
    commision = (sales * 0.07);
    console.log(`The Commision earned is ${commision} `);
}
else{
    commision = (sales * 0.1);
    console.log(`The Commision earned is ${commision}`);
}