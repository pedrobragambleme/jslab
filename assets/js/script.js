console.log("JavaScript carregado com sucesso!");

const categorias = [
    "Infraestrutura",
    "Software",
    "Hardware",
    "Rede"
];

console.log(categorias);
console.log(categorias[0]);
console.log(categorias[1]);
console.log(categorias[2]);
console.log(categorias.length);
const ultimaCategoria =
    categorias[categorias.length - 1];

console.log(ultimaCategoria);
categorias.push("Segurança");
console.log(categorias);
const removida = categorias.pop();

console.log(removida);
console.log(categorias);

for (let i = 0; i < categorias.length; i++) {
    console.log(categorias[i]);
}

categorias.forEach(categoria => {
    console.log(categoria);
});

const pedido = {
    id: 1042,
    cliente: "Clínica Central",
    prioridade: "alta",
    status: "atendimento"
};
console.log(pedido.id);
console.log(pedido.cliente);
console.log(pedido.prioridade);
console.log(pedido.status);
pedido.status = "atendimento";
console.log(pedido);

const pedidos = [
    {
        id: 1042,
        cliente: "Clínica Central",
        prioridade: "alta",
        status: "atendimento",
        valor: 850
    },
    {
        id: 1043,
        cliente: "Loja Horizonte",
        prioridade: "normal",
        status: "aberto",
        valor: 420
    },
    {
        id: 1044,
        cliente: "Escritório Almeida",
        prioridade: "urgente",
        status: "aberto",
        valor: 1200
    }
];

pedidos.forEach(pedido => {
    console.log(
        `${pedido.id} - ${pedido.cliente}`
    );
});

const { id, cliente } = pedidos[0];

console.log(id);
console.log(cliente);

const pedidoEncontrado =
    pedidos.find(pedido => pedido.id === 1043);

console.log(pedidoEncontrado);

function buscarPedidoPorId(id) {
    return pedidos.find(
        pedido => pedido.id === id
    );
}
console.log(buscarPedidoPorId(1042));
console.log(buscarPedidoPorId(9999));

const indice =
    pedidos.findIndex(
        pedido => pedido.id === 1043
    );

console.log(indice);

const pedidosAbertos =
    pedidos.filter(
        pedido => pedido.status === "aberto"
    );

console.log(pedidosAbertos);

const nomesClientes =
    pedidos.map(
        pedido => pedido.cliente
    );

console.log(nomesClientes);

const resumos =
    pedidos.map(pedido => {
        return `${pedido.id} - ${pedido.cliente}`;
    });

console.log(resumos);

const texto = "Clínica Central";

console.log(
    texto.includes("Central")
);
console.log(
    texto.includes("central")
);

