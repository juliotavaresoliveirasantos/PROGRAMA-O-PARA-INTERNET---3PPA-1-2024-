import express from 'express';
import rotaLogin  from './rotas/rotaLogin.js';
import session, { Cookie } from 'express-session';
import autenticar from './seguranca/autenticar.js';

const host = '0.0.0.0';
const porta = 3211;

const app = express();

app.use(session({
    secret: 'professorzao',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 30 
    }
  }));

app.use(express.urlencoded({extended:false}));
 
app.use("/login", rotaLogin);
app.use(express.static('./publico'));
app.use (autenticar, express.static('./protegido'));

app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://localhost:${3211}`);
  });


