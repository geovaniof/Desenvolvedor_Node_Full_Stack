import express from 'express';
import clientsRouter from './routes/clients';
import db from './db';
import methodOverride from 'method-override'

const app = express();
const port = parseInt(`${process.env.PORT}`);

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(clientsRouter);
app.set('view engine', 'pug');
app.set('views', './views');

db.sync().then( () => {
    console.log(`Conectado com o sucesso ao banco: ${process.env.DB_NAME}`);
}).then( () => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
});

