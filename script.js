function calcula() {
    let s = parseFloat(document.getElementById('salario').value);
    const i1 = 0.075;
    const i2 = 0.09;
    const i3 = 0.12;
    const p2 = 21.18;
    const p3 = 101.18;
    let v;

    if (s < 1412.00) {
        v = s*i1;
    }
    document.getElementById('valor').innerText = "O valor do INSS mensalmente será de R$" + v;

}