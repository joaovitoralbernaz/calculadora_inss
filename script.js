function calcula() {
    let s = parseFloat(document.getElementById('salario').value);
    const i1 = 0.075;
    const i2 = 0.09;
    const i3 = 0.12;
    const i4 = 0.14;
    const p2 = 21.18;
    const p3 = 101.18;
    const p4 = 181.18;
    let v;


    if (s < 1412.00) {
        v = s*i1 ;
    }else if (s < 2666.68 ){
        v = ((s*i2)-p2);
    }else if(s < 4000.03){
        v = ((s*i3)-p3);
    }else if (s < 7786.02) {
        v = ((s*i4)-p4);
    }else if( s > 7786.03){
        v = 908.86;
    }else{
        document.getElementById('valor').innerText = "Não foi possivel realizar a conta"
    }

    document.getElementById('valor').innerText = "O valor do INSS mensalmente será de R$" + (v.toFixed(2));

}