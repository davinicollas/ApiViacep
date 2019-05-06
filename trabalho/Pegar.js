function calcular(){
var_quant = 0;
var valor = document.getElementById("valor").value;
var quantidade = document.getElementById("quantidade").value;
var var_quant = valor / quantidade;

document.getElementById("var_qnt").value = var_quant;
}
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('ibge').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        var rua = document.getElementById('rua').value = (conteudo.logradouro);
        var bairro=document.getElementById('bairro').value = (conteudo.bairro);
        var cidade= document.getElementById('cidade').value = (conteudo.localidade);
        var uf=document.getElementById('uf').value = (conteudo.uf);
        var ibge=document.getElementById('ibge').value = (conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep= valor.replace(/\D/g, '');
    
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
    
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;
    
        //Valida o formato do CEP.
        if (validacep.test(cep)) {
    
            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            document.getElementById('ibge').value = "...";
    
            //Cria um elemento javascript.
            var script = document.createElement('script');
    
            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
    
            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
    
        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
    };

