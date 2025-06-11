import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/sum', (req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sum = Number(a)+Number(b);

    if (Number.isNaN(sum) ) {
        res.status(400).send({message: 'Your input numbers are not correct'})
    };
    res.send({result:sum});
});



app.post('/api/sort', (req,res)=>{
    const numbers = req.body.numbers;
    const order = req.body.order;

    if(!Array.isArray(numbers)){
        res.status(400).send({message: "Your input numbers is not correct"});
    };
    if(!numbers.every(num => typeof(num)=== "number")){
        res.status(400).send({message: "Your input numbers type is not correct"});
    }
    if (!(order === "asc" || order === "desc")) {
        res.status(401).send({message: "Order is not correct"});       
    };
    if (order == "asc") {
       const ascending = numbers.sort((a, b) => a - b);
       res.send({result : ascending}) 
    };
    if(order == "desc"){
        const descending = numbers.sort((a, b) => b - a);
        res.send({result: descending})
    };
});

app.post('/api/calculate', (req,res) =>{
    let{a,b,operation} = req.body;
    a = Number(a);
    b = Number(b);
    if (!a || !b || Number.isNaN(a) || Number.isNaN(b) ) {
        res.status(400).send({message: 'Your input numbers are not correct'})
    };
    if (!operation || (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide")){
        res.status(400).send({message: "Operation is not correct"});
    }
    switch (operation) {
        case "add":
            res.json({result : a+b})
            break;
        case "subtract":
            res.json({result : a-b})
            break;
        case "multiply":
            res.json({result : a*b})
            break;
        case "divide":
            res.json({result : a/b})
            break;
    
        default:
            break;
    }
});

app.get('/api/fibonacci', (req,res)=>{
    const n = req.query.n;
    let result = [0];
    const fibonacci = (n) => {
        for (let i = 2; i <= n; i++) {
            if (i === 2) {
                result.push(1);
            }else{
                result.push(result[i-2]+result[i-3]);
            };
            
        };
      
    };
    fibonacci(n);
    res.json({'result' : result})
});

app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}`);
});