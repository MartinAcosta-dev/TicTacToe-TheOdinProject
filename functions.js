var marcaNula = "";
var marcaActual = "X";
var clickCounter = 0;

function cambiarMarca(){
    if(marcaActual=="X"){
        marcaActual = "O"
    }else{
        marcaActual = "X";
    }

    clickCounter++;
}


function ganoX(grid){
    //Corrobora el vector y se fija si ganó X
    let resultado = false;
    let bCorte = false;

    let i = 0;
    let j = 0;

    //Vemos vertical -----------------------------------------------------------------
    if( ( grid[0][0] == "X" ) && ( grid[1][0] == "X" ) && ( grid[2][0] == "X" ) ){
        resultado = true;
    }

    if( ( grid[0][1] == "X" ) && ( grid[1][1] == "X" ) && ( grid[2][1] == "X" ) ){
        resultado = true;
    }

    if( ( grid[0][2] == "X" ) && ( grid[1][2] == "X" ) && ( grid[2][2] == "X" ) ){
        resultado = true;
    }

    //Vemos horizontal ---------------------------------------------------------------
    if( ( grid[0][0] == "X" ) && ( grid[0][1] == "X" ) && ( grid[0][2] == "X" ) ){
        resultado = true;
    }

    if( ( grid[1][0] == "X" ) && ( grid[1][1] == "X" ) && ( grid[1][2] == "X" ) ){
        resultado = true;
    }

    if( ( grid[2][0] == "X" ) && ( grid[2][1] == "X" ) && ( grid[2][2] == "X" ) ){
        resultado = true;
    }

    //Vemos cruzado ------------------------------------------------------------------
    if( grid[1][1] == "X" ){
        if( ( grid[0][0] == "X" ) && ( grid[2][2] == "X" ) ){
            resultado = true;
        }else if( ( grid[0][2] == "X" ) && ( grid[2][0] == "X" )){
            resultado = true;
        }
    }


    return resultado;
}

function ganoO(grid){
    //Corrobora el vector y se fija si ganó X
    let resultado = false;
    let bCorte = false;

    let i = 0;
    let j = 0;

    //Vemos vertical -----------------------------------------------------------------
    if( ( grid[0][0] == "O" ) && ( grid[1][0] == "O" ) && ( grid[2][0] == "O" ) ){
        resultado = true;
    }

    if( ( grid[0][1] == "O" ) && ( grid[1][1] == "O" ) && ( grid[2][1] == "O" ) ){
        resultado = true;
    }

    if( ( grid[0][2] == "O" ) && ( grid[1][2] == "O" ) && ( grid[2][2] == "O" ) ){
        resultado = true;
    }

    //Vemos horizontal ---------------------------------------------------------------
    if( ( grid[0][0] == "O" ) && ( grid[0][1] == "O" ) && ( grid[0][2] == "O" ) ){
        resultado = true;
    }

    if( ( grid[1][0] == "O" ) && ( grid[1][1] == "O" ) && ( grid[1][2] == "O" ) ){
        resultado = true;
    }

    if( ( grid[2][0] == "O" ) && ( grid[2][1] == "O" ) && ( grid[2][2] == "O" ) ){
        resultado = true;
    }

    //Vemos cruzado ------------------------------------------------------------------
    if( grid[1][1] == "O" ){
        if( ( grid[0][0] == "O" ) && ( grid[2][2] == "O" ) ){
            resultado = true;
        }else if( ( grid[0][2] == "O" ) && ( grid[2][0] == "O" )){
            resultado = true;
        }
    }


    return resultado;
}

function showWinMesssagge(ganador){
    $("#dialog").dialog({
        modal: true,
        draggable: false,
        width: 500,
        dialogClass: "no-close",
        open: function(){
            $('.ui-widget-overlay').bind('click',function(){
                $('#dialog').dialog('close');
            })
        }
    }); 

    $("div.ui-dialog-titlebar").hide();

    let parrafo = $("#parrafoVictoria");
    if(ganador == "Empate"){
        parrafo.text("Ha habido un empate");
    }else{
        parrafo.text("Ha ganado "+ganador+"!!!");
    }
}
     
