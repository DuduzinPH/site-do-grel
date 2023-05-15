
areaParticipantes =
    document.getElementsByClassName("areaParticipantes").item(0);

Alpha = {
    nome: "ALPHA(1)",
    participantes: ["Dabson", "Lucas", "Rillary"]
}

lotus = {
    nome: "lotus",
    participantes: ['Guerra', 'Tomaz', 'Dudu', 'Yan']
}

equipes = [
    { nome: 'TechLadies', participantes: ['Violetta', 'Rillary', 'Dayane', 'Erika'] },
    { nome: 'lotus', participantes: ['Eduardo', 'Tomaz', 'Guerra', 'Yan'] },
    { nome: 'BKP', participantes: ['Andrey', 'Airam', 'David']},
    { nome: 'MNR', participantes: ['Jefferson','Thiago','Vitória','Maciel','Yan'] }]

var texto = '';

equipes.forEach(element => {
    texto = texto + '<tr>'
    texto = texto + '<td>' + element.nome + '</td> <td>'
    element.participantes.forEach(nomePart => {
        console.log(texto);
        texto = texto + nomePart + ', ';
    })
    texto = texto + '</td> </tr>'
});

areaParticipantes.innerHTML = "<tr><td>" + texto + "</td></tr>"

