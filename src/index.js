const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerConfig = require("./swagger.json");

const port = 3000;
const app = express();

const db = require("./db/db");

db();

const auth =  require("./router/auth.router");
const usuario =  require("./router/usuario.router");
const cliente =  require("./router/cliente.router");
const produto =  require("./router/produto.router");
const pedido =  require("./router/pedido.router");

app.use(express.json());

app.use("/auth", auth);
app.use("/usuarios", usuario);
app.use("/clientes", cliente);
app.use("/produtos", produto);
app.use("/pedidos", pedido);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.listen(port, () => {
    console.log(`Servicor rodando em http://localhost:${port}`)
});
