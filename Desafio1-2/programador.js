// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }

const programador = {
    nome: "Karen",
    idade: 33,

    tecnologia : [
        { 
            nome: 'C++', 
            especialidade: 'Desktop'
         },
        { 
            nome: 'Python', 
            especialidade: 'Data Science'
        },
        { 
            nome: 'JavaScript', 
            especialidade: 'Web/Mobile'},
    ]
};

// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

console.log(`O Usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia[2].nome} com especialidade em ${programador.tecnologia[2].especialidade}`);