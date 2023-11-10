function responsividade()
{
    setInterval(() => {
        document.getElementById("topdiv").style.width = window.innerWidth + "px";


        let A = document.getElementById("textE").style;
        A.width = window.innerWidth + "px";
        document.getElementById("foto-maquiagem").style.width = window.innerWidth + "px";


        document.getElementById("produtos").style.width = window.innerWidth + "px";
        document.getElementsByClassName("subdiv").style.width = window.innerWidth + "px";
    }, 1);
}

function C1(numero)
{

    let A = numero / 2;
    return A;

}
