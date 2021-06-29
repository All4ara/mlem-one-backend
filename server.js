import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Cards from "./dbCards.js"

// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://Ariel:all4ara94@cluster0.ccplu.mongodb.net/mlemdb?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get("/", (req, res) => res.status(200).send("MLEM"));

app.post('/mlem/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/mlem/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});
// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));