//Make a get request
fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response=>response.json())
            .then(data=>console.log(data))


            //Make a post request
            fetch('https://jsonplaceholder.typicode.com/todos',{
                method:'POST',
                body: JSON.stringify({
                    userId:254,
                    title:"Some Title",
                    body:'lorem ipsum',
                })
            }).then(response=>response.json())
            .then(data=>console.log(data))

            async function fetchTodos(){
                const response = await fetch(' https://api.chucknorris.io/jokes/random');
                const data = await response.json();

                console.log(data);
            }

            fetchTodos();




            let obj1 = {
                name:'Jonas',
                age:21,
                canDrive:true,
            }

            console.log(obj1);
            let str = JSON.stringify(obj1);
            console.log(str)

            let strobj = JSON.parse(str);
            console.log(strobj);