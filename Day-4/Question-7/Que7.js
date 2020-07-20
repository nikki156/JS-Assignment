let n=prompt("enter any number:");
        for(let i=2; i<=n;i++){
            let primeNum=true;
            for(let j=2; j<=i;j++){
                if(i%j===0 && i!==j){
                    primeNum = false;
                }
            }
            if(primeNum===true){
                console.log(i);
            }
        }
        