
areaParticipantes = 
document.getElementsByClassName("areaParticipantes").item(0);




Alpha = {nome:"ALPHA(1)",
participantes:["Dabson","Lucas","Rillary"]}

lotus = {nome:"lotus",
participantes:['Guerra','Tomaz','Dudu','Yan']}

equipes = [Alpha,lotus]

var texto = '';

equipes.forEach(element => {
    texto = texto + '<tr>'
    texto = texto + '<td>' + element.nome + '</td> <td>'
    element.participantes.forEach(element=>{
        console.log(texto);
        texto = texto + element + '<br>';
    })
    texto = texto + '</td> </tr>'
});

areaParticipantes.innerHTML = "<tr><td>"+ texto+"</td></tr>"

//areaParticipantes = "<tr><td> \n\n\naaaaaaaaaaaa </td></tr>"