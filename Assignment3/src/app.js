import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/sum', (req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    const sum = Number(a)+Number(b);
    res.json({result:sum});
});



app.post('/api/sort', (req,res)=>{
    const numbers = req.body.numbers;
    const order = req.body.order;

    if (order == "ascending") {
       const ascending = numbers.sort((a, b) => a - b);
       res.json({result : ascending}) 
    } else {
        const descending = numbers.sort((a, b) => b - a);
        res.json({result: descending})
    }
});

app.post('/api/calculate', (req,res) =>{
    let{a,b,operation} = req.body;
    a = Number(a);
    b = Number(b);
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