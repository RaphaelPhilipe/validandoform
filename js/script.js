function gravar(){
    let titulo = document.getElementById("titulo").value;

    let aluno = document.getElementById("aluno").value;

    let msg = document.getElementById("msg").value;

    alert(titulo + " \n" + msg + " \n"+aluno);

    let textoMensagem = titulo + "\n" + msg + " \n"+aluno;

    document.getElementById("Assunto").innerText = titulo;
    document.getElementById("Aluno").innerText = aluno;
    document.getElementById("Mensagem").innerText = msg;

    document.getElementById("titulo").value = "";
    document.getElementById("aluno").value = "";
    document.getElementById("msg").value = "";
}

function excluir(){
    

    document.getElementById("Assunto").innerText = "";
    document.getElementById("Aluno").innerText = "";
    document.getElementById("Mensagem").innerText = "";

    alert("Dados deletados")
}