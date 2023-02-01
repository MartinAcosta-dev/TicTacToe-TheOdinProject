$(document).ready(function(){

    let grid = [["-","-","-"],["-","-","-"],["-","-","-"]];


    $(".grid div").click(function(){
        let casillero = $(this);
        let marcaCasillero = casillero.text();

        let id = casillero.attr("id");
        console.log(id);

        switch(id){
            case "AA":     
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    cambiarMarca();
                }
            break;
            case "AB":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    cambiarMarca();
                }
            break;
            case "AC":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    cambiarMarca();
                }
            break;
            case "BA":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    cambiarMarca();
                }
            break;
            case "BB":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    cambiarMarca();
                }
            break;
            case "BC":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    cambiarMarca();
                }
            break;
            case "CA":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    cambiarMarca();
                }
            break;
            case "CB":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    cambiarMarca();
                }
            break;
            case "CC":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    cambiarMarca();
                }
            break;
        }

        //Corroborar si ganó o si se alcanzaron 9 clicks (no contar clicks en donde ya habia algo)
    });
})