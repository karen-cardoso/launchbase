// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média

const turmaA = [
    {
        nome: "Karen",
        nota: 10
    },
    {
        nome: "Maria" ,
        nota: 9.3
    },
    {
        nome: "Jonas" ,
        nota: 7.5
    },
    {
        nome: "Outro aluno",
        nota: 4.8
    }
]

const turmaB = [
    {
        nome: "Bruna",
        nota: 5
    },
    {
        nome: "Renato" ,
        nota: 6.5
    },
    {
        nome: "Juliana" ,
        nota: 3
    },
    {
        nome: "Novo aluno" ,
        nota: 4
    }
]

function calculaMedia(alunos){
    let soma = 0;
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(turmaA)
const media2 = calculaMedia(turmaB)


function enviaMensagem(media, turma){
    // Se a média for maior que 5, parabenizar a turma
    if (media > 5){
        console.log(`A média da ${turma} foi de ${media}. Parabéns!!!`)
    } 
    else {
        console.log(`A média da ${turma} é menor que 5.`)
    }
}

enviaMensagem(media1, 'turma A')
enviaMensagem(media2, 'turma B')
