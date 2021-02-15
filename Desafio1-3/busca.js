// Baseado no desafio anterior, utilize a mesma lista de usuários construída.

const usuarios = [
    {
        nome: "Carlos",
        tecnologias : ["HTML" , "CSS"],

    },
    {
        nome: "Jasmine",
        tecnologias : ["Javascript", "CSS"],
    },
    {   
        nome: "Tuane",
        tecnologias : ["HTML" , "Node JS" ]
    }
]

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. 
// Essa função deve retornar um boolean true/false.

function checaSeUsuarioUsaCSS(usuarios) {
    for(let tecnologia of usuarios.tecnologias){
        if (tecnologia == "CSS") {
            return true
        } 
    }   
        return false
}
    
for (let i = 0; i < usuarios.length; i++) {
        
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
   
        if(usuarioTrabalhaComCSS) {
            console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
        }
    }    