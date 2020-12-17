window.onload = function()
{
    var btnAdd = document.getElementById("btn_resolver");
    btnAdd.onclick = Resolver;
}

let arreglo = [];

function Resolver()
{
    var a1c1 = (<HTMLInputElement>document.getElementById("a1c1")).value;
    var a1c2 = (<HTMLInputElement>document.getElementById("a1c2")).value;
    var a1c3 = (<HTMLInputElement>document.getElementById("a1c3")).value;
    var a1o = (<HTMLInputElement>document.getElementById("a1o")).value;

    var a2c1 = (<HTMLInputElement>document.getElementById("a2c1")).value;
    var a2c2 = (<HTMLInputElement>document.getElementById("a2c2")).value;
    var a2c3 = (<HTMLInputElement>document.getElementById("a2c3")).value;
    var a2o = (<HTMLInputElement>document.getElementById("a2o")).value;

    var dc1 = (<HTMLInputElement>document.getElementById("dc1")).value;
    var dc2 = (<HTMLInputElement>document.getElementById("dc2")).value;
    var dc3 = (<HTMLInputElement>document.getElementById("dc3")).value;

    if (a1c1 == '' || a1c2 == '' || a1c3 == '' || a1o == '' ||
        a2c1 == '' || a2c2 == '' || a2c3 == '' || a2o == '' ||
        dc1 == '' || dc2 == '' || dc3 == '')
    {
        document.getElementById('validacion').hidden = false;
        // document.getElementById('validacion').innerHTML = 'Faltan datos por llenar';

        // document.datos.x.value = '';
        // document.datos.y.value = '';
    }
    else
    {
        document.getElementById('validacion').hidden = true;

        let a1 = [];
        a1.push(a1c1, a1c2, a1c3);

        let totalOferta = (parseInt(a1o) + parseInt(a2o)).toString();
        let totalDemanda = (parseInt(dc1) + parseInt(dc2) + parseInt(dc3)).toString();
        let diferencia = (parseInt(totalOferta) - parseInt(totalDemanda)).toString();

        (<HTMLInputElement>document.getElementById("totalOferta")).value = totalOferta;
        (<HTMLInputElement>document.getElementById("totalDemanda")).value = totalDemanda;
        (<HTMLInputElement>document.getElementById("diferencia")).value = diferencia;

        // document.datos.x.value = Math.round(x * 100) / 100;
        // document.datos.y.value = Math.round(y * 100) / 100;

        // document.datos.x.value = parseFloat(x).toFixed(2);
        // document.datos.y.value = parseFloat(y).toFixed(2);
    }

    // var elementos = document.getElementById("elementos");

    // var selectorInput = document.createElement('input');
    // selectorInput.type = 'text';
    // selectorInput.className = 'form-control';
    // // selectorInput.id = 'input';

    // elementos.appendChild(selectorInput);
}