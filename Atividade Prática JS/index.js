let usuarios = []
adicionarUsuario()
listaUsuarios()


function adicionarUsuario() {
    let usuario= {
        nome:"Jão" ,
        idade:"54",
        Email:"manojvpo@gmail.com"
    }
    if (usuario.nome==undefined||usuario.nome=="") {
        throw new Error("Nome não definido")
    }
    if (usuario.idade<=0) {
        throw new Error("Idade menor que zero")
    }
    if (usuario.Email==undefined||usuario.Email=="") {
        throw new Error("Email não definido")
    }
    usuarios.push(usuario)
}
function listaUsuarios() {
    console.log(usuarios)
}