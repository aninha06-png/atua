console.log("Mediplanner funcionando!");

let consultaEditando = null;

function cadastrarConsulta() {

    const medico = document.getElementById("medicoConsulta").value;
    const especialidade = document.getElementById("especialidadeConsulta").value;
    const data = document.getElementById("dataConsulta").value;
    const horario = document.getElementById("horaConsulta").value;
    const observacoes = document.getElementById("observacoesConsulta").value;

    if (medico === "" || especialidade === "" || data === "" || horario === "") {
        alert("Preencha os campos obrigatórios.");
        return;
    }
     const lista = document.getElementById("listaConsultas");

    const consulta = document.createElement("div");

    consulta.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = especialidade;

    const profissional = document.createElement("p");
    profissional.textContent = "Médico: " + medico;

    const dataTexto = document.createElement("p");
    dataTexto.textContent = "Data: " + data;

    const horarioTexto = document.createElement("p");
    horarioTexto.textContent = "Horário: " + horario;

    consulta.appendChild(titulo);
    consulta.appendChild(profissional);
    consulta.appendChild(dataTexto);
    consulta.appendChild(horarioTexto);

    if (observacoes !== "") {
        const observacaoTexto = document.createElement("p");
        observacaoTexto.textContent = "Observações: " + observacoes;
        consulta.appendChild(observacaoTexto);
    }

    const botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = "🗑️ Excluir consulta";

    botaoExcluir.classList.add("botao", "secundario");

    botaoExcluir.onclick = function() {
    consulta.remove();
    };
    consulta.appendChild(botaoExcluir);

    const botaoEditar = document.createElement("button");

botaoEditar.textContent = "✏️ Editar consulta";

botaoEditar.classList.add("botao");

botaoEditar.onclick = function() {

    document.getElementById("medicoConsulta").value = medico;

    document.getElementById("especialidadeConsulta").value = especialidade;

    document.getElementById("dataConsulta").value = data;

    document.getElementById("horaConsulta").value = horario;

    document.getElementById("observacoesConsulta").value = observacoes;

    consultaEditando = consulta;

};

consulta.appendChild(botaoEditar);

      lista.appendChild(consulta);

    document.getElementById("medicoConsulta").value = "";
    document.getElementById("especialidadeConsulta").value = "";
    document.getElementById("dataConsulta").value = "";
    document.getElementById("horaConsulta").value = "";
    document.getElementById("observacoesConsulta").value = "";

    alert("Consulta cadastrada com sucesso!");
}

