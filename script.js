$(document).ready(function(){

    let grid = [[marcaNula, marcaNula, marcaNula],[marcaNula,marcaNula,marcaNula],[marcaNula,marcaNula,marcaNula]];


    $(".grid div").click(function(){
        let casillero = $(this);
        let marcaCasillero = casillero.text();

        let id = casillero.attr("id");

        switch(id){
            case "AA":     
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    grid[0][0] = marcaActual;                   

                    cambiarMarca();

                }
            break;
            case "AB":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    grid[0][1] = marcaActual;

                    
                    cambiarMarca();
                }
            break;
            case "AC":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    grid[0][2] = marcaActual;

                    cambiarMarca();
                }
            break;
            case "BA":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    grid[1][0] = marcaActual;

                    cambiarMarca();
                }
            break;
            case "BB":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    grid[1][1] = marcaActual;

                    cambiarMarca();
                }
            break;
            case "BC":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    grid[1][2] = marcaActual;

                    cambiarMarca();
                }
            break;
            case "CA":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    grid[2][0] = marcaActual;

                    cambiarMarca();
                }
            break;
            case "CB":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    grid[2][1] = marcaActual;

                    cambiarMarca();
                }
            break;
            case "CC":
                if(marcaCasillero == marcaNula){
                    casillero.text(marcaActual);
                    grid[2][2] = marcaActual;

                    cambiarMarca();
                }
            break;   
        }

        if(ganoX(grid)){
            showWinMesssagge("X");
        }

        if(ganoO(grid)){
            showWinMesssagge("O");
        }


        if((clickCounter == 9) && (ganoX(grid)==false) && (ganoO(grid)==false)){
                showWinMesssagge("Empate");
        }

    }); //end Click
})