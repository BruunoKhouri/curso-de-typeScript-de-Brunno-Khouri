//Iniciando projeto // verifique o docker.ts.
console.log("Express + TS");

// init express
import express, { NextFunction, Request, Response } from 'express'

const app = express();
// rota com POST
app.use(express.json());

// middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}

app.use(showPath);

// init
app.get("/", (red, res) => {
    return res.send("Hello Express!");
});

// rota com POST
app.post("/api/product", (req, res) => {
    console.log(req.body);

    return res.send("Produto adicionado !");
});

// Rota para qualquer verbo // ultilize all
// Funciona GET, POST, PUT, DELETE, PATCH
app.all("/api/all", (req, res) => {
    if (req.method === "POST") {
        return res.send("Inseriu algum  registro");
    } else if (req.method === "GET") {
        return res.send("Leu algum registro");
    } else
        return res.send("teste de all");
});

// interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces");
});

//Enviando json
app.get("/api/json", (req: Request, res: Response) => {

    return res.json({
        name: "Brunno",
        age: 25
    });
});

// Router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {

    console.log(req.params);
    const id = req.params.id;

    if (id === "1") {
        const product = {
            id: 1,
            name: 'sabonete'
        }
        res.json(product);
        console.log("Produto encontrado");
    } else return res.send("produto não encontrado");

});

// Rotas complexas
app.get('/api/product/:id/review/:reviewId', (req: Request, res: Response) => {
    console.log(req.params);

    const productId = req.params.id;
    const reviewId = req.params.reviewId;

    return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

// router handler
function getUser(req: Request, res: Response): Response {
    console.log(req.params.id);
    return res.send("Usuario encontrato");
}

app.get("/api/user/:id", getUser);

// Middleware
// Middleware é um recurso para executar uma função entre a execução de uma rota, por exemplo.
// Podemos utilizar middleware para validalções, por exemplo.

function getUserAcess(req: Request, res: Response): Response {
    console.log(req.params.id);
    return res.send("Usuario encontrato");
}

function checkUser(req: Request, res: Response, next: NextFunction) {
    const userId = req.params.id
    if (userId === "1") {
        console.log("Pode seguir !");
        next();
    } else {
        console.log("Acesso restrito !");
    }
}

app.get("/api/user/:id/access", checkUser, getUserAcess);

// request e response generics
// podemos estabelecer os argumentos que vem pelo request e vão pela response.

app.get("/api/user/:id/details/:name", (
    req: Request<{ id: string, name: string }>,
    res: Response<{ status: boolean }>
) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({ status: true });
});

// tratando erros

// Para tratar possiveis erros utilizamos blocos try catch;
// Desta maneira podemos detectar algum problema e retornar uma resposta para o usuario;

app.get("/api/error", (req: Request, res: Response) => {
    try {
        throw new Error("Algo deu errado!");
    } catch (e: any) {
        res.statusCode = 500;
        res.json({ msg: e.message });
    }
});

app.listen(3000, () => {
    console.log("Aplicação TS + Express");
});