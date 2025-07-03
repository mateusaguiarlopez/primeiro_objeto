function chama_aluno(){
    
    let aluno = {
        nome: 'Mateus Aguiar Lopez',
        idade: 15,
        altura: 1.73,
        nota: 5.20
    };
    //alert(aluno.nome);

    document.getElementById('nome_aluno').textContent = 'Nome: ' + aluno.nome;
    document.getElementById('idade_aluno').textContent = 'idade: ' + aluno.idade;
    document.getElementById('altura_aluno').textContent = 'altura: ' + aluno.altura;
    document.getElementById('nota_aluno').textContent = 'nota: ' + aluno.nota;

}

    