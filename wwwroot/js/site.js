$.getJSON("/TP9JSON.json", function(data) 
{
    console.log(data);
});

function CargarDatos()
{ $.getJSON('/TP9JSON.json', 
function(data) 
{ console.log(data); 
    data.Restaurantes.forEach(unrestaunte => { $("#bodyTabla").append("<tr>"); $("#bodyTabla").append("<td><img src='" + unrestaunte.Logo + "'></td>"); $("#bodyTabla").append("<td>" + unrestaunte.Id + "</td>"); $("#bodyTabla").append("<td>" + unrestaunte.Nombre + "</td>"); $("#bodyTabla").append("<tr>")})}
)}