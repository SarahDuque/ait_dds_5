function abrirMenu() {
    document.getElementById("menuLateral").style.width = "250px";
    document.querySelector(".conteudo").style.marginLeft = "250px";
}

function fecharMenu() {
    document.getElementById("menuLateral").style.width = "0";
    document.querySelector(".conteudo").style.marginLeft = "85px";
}
function alternarMenu() {
    var menu = document.getElementById("menuLateral");
    var conteudo = document.querySelector(".conteudo");

    if (menu.style.width === "250px") {
        menu.style.width = "0";
        conteudo.style.marginLeft = "85px";
    } else {
        menu.style.width = "250px";
        conteudo.style.marginLeft = "250px";
    }
}
