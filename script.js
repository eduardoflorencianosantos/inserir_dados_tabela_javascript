function calcula() {
    let custo = document.getElementById('valor').value;
    let quantas = document.getElementById('parcela').value;

    let cabeca_tabela = document.querySelector('#tabelinha thead');
    let corpo_tabela = document.querySelector('#tabelinha tbody');

    let cabecario = `
        <tr>
            <th>Número</th>
            <th>Parcela</th>
        </tr>
    `;

    cabeca_tabela.innerHTML = cabecario;

    for (let i = 1; i <= quantas; i++) {
        custo = custo * 1.1;
        let linha = `
            <tr>
                <td>${i}</td>
                <td>R$ ${custo.toFixed(2)}</td>
            </tr>
        `;

        corpo_tabela.innerHTML += linha;
    }
}