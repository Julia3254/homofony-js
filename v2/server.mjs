import express from 'express';
import bodyParser from 'body-parser';
import rewrite from './rewrite.mjs';

const app = express();
const port = process.env.PORT; 

app.use(bodyParser.json());

app.post('/convert', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).send('Text is required');
    }

    try {
        const result = rewrite(text);
        res.json({ result });
    } catch (error) {
        res.status(500).send('Error processing text');
    }
});

app.post('/compare', (req, res) =>{
    // const { input } = req.body;
    // if (!input) return res.status(400).send('Input is required');

    // try{
    //     const inputObject = {
    //         text1: input.text1,
    //         text2: input.text2
    //     };
    // }
    // catch (error){
    //     if (!input) return res.status(400).send('Input is invalid');
    // }

    // try {
    //     const result = compare(inputObject);
    //     res.json({ result });
    // } catch (error) {
    //     res.status(500).send('Error processing text');
    // }
});
