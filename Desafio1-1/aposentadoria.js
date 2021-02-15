// Crie um programa para calcular a aposentadoria de uma pessoa.
// Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome = "Karen"
const sexo = "F"
const idade = 34
const contribuicao = 11

// Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos
const tempoContribMinimaHomem = 35
const tempoContribMinimaMulher = 30

// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma

const ClaculoAposentadoria = idade + contribuicao


// Com base nas regras acima imprima na tela as mensagens:
// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!

const VerificaAposentadoriaHomem = ClaculoAposentadoria >= 95 && contrib >= tempoContribMinimaHomem
const VerificaAposentadoriaMulher = ClaculoAposentadoria >= 85 && contrib >= tempoContribMinimaMulher

    if(sexo == "F" && VerificaAposentadoriaMulher){
        console.log(`${nome}, você pode se aposentar`)
    }   
        else if (sexo == "M" && VerificaAposentadoriaHomem){
            console.log(`${nome}, você pode se aposentar`)
        }
            else{
                console.log(`${nome}, você ainda não pode se aposentar`)
            }