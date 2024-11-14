/*início da function com a declaração das const e variaveis*/ 
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


/*inicio do calculo*/
    if (s < 1412.00) {
        v = s*i1 ;
        i = i1;
    }else if (s < 2666.68 ){
        v = ((s*i2)-p2);
        i = i2;
    }else if(s < 4000.03){
        v = ((s*i3)-p3);
        i = i3;
    }else if (s < 7786.02) {
        v = ((s*i4)-p4);
        i = i4;
    }else if( s > 7786.03){
        v = 908.86;
        i = i4;
    }else{
        document.getElementById('valor').innerText = "Não foi possivel realizar a conta"
    }

    document.getElementById('valor').innerText = "O valor do INSS mensalmente será de R$" + (v.toFixed(2));
    let trecho = 
    `
    <div class="resposta">
    Para um salário de até R$ ${s}, a alíquota é de ${(i*100).toFixed(2)}%, No caso, o trabalhador recebe R$${s}, aplicando a alíquota de ${(i*100).toFixed(2)}%, o cálculo seria R$${s} x ${(i*100).toFixed(2)}% = R$${v.toFixed(2)}.
    </div>
    `;

    document.getElementById('aqui').innerHTML = trecho;

}
/*fim do calculo*/

/*funcao de boa vinda*/
function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = "Bem-Vindo "  +  nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}
/*funcao da correção das respostas*/
function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');


    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada.É o órgão responsável pelo pagamento de benefícios previdenciários como aposentadoria, seguro desemprego, auxílio-doença, pensão por morte e outros."
        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada.É um seguro que garante a renda do contribuinte e de sua família.. "

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada.Auxílio-reclusão "

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada.É a assistência educativa ou reeducativa e também adaptação ou readaptação profissional."

        }
        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada.Sim, mas deve comprovar pelo documento mais antigo."

        }
        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada,a aposentadoria por idade exige idade mínima e também tempo de contribuição; a por tempo depende somente dos anos contribuídos."

        }
        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada,os Benefícios são temporários para trabalhadores incapacitados para o trabalho por doença ou acidente."

        }
        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada,é pago para dependentes do segurado falecido, como cônjuge e também filhos menores."
        }
        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada, é pelo aplicativo ou site Meu INSS."

        }
        if(resp10.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada, pois o tempo minímo é 15 anos."

        }
        if (contador == 1) {
            document.getElementById("quantos_acertos").innerHTML = "VOCÊ ACERTOU " + contador + " QUESTÃO!";
        }
        else{
            document.getElementById("quantos_acertos").innerHTML = "VOCÊ ACERTOU " + contador + " QUESTÕES!";
        }
    }
    else{
        alert("não deixe questões em branco!")
    }

}
/*fim da pagina do calculo*/