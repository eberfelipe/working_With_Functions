const cartEcommerce = {
    nameOfClient: 'John Doe',
    products: [
        {
            id: 1,
            nome: "T-Shirt",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Pants",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}

function formatCurrency(value) {
    return `$ ${(value / 100).toFixed(2).replace('.', ',')}`;
}

function printResumeCart({ nameOfClient, products }) {
    const total = products.reduce((acc, { qtd, precoUnit }) => acc + qtd * precoUnit, 0);
    const totalQtd = products.reduce((acc, { qtd }) => acc + qtd, 0);

    console.log(`Client: ${nameOfClient}`);
    console.log(`Total of products: ${totalQtd}`);
    console.log(`Total to pay: ${formatCurrency(total)}`);
}

printResumeCart(cartEcommerce);
