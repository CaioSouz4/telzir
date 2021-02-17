export function calcularSemPlano (origem, destino, tempo) {
  
    if(origem === 11) { 
       switch (destino) {
            case 16:
               return tempo * 1.9;
            case 17:
                return tempo * 1.7;
            case 18: 
                return tempo * 0.9;
           default:
               return;
       } 
    } else if (origem === 16) {
        switch (destino) {
            case 11:
               return tempo * 2.9;
             case 17:
                return tempo * 1.3;
            case 18: 
                return tempo * 1.9; 
           default:
               return;
       } 
    } else {
        switch (destino) {
            case 11:
               return tempo * 1.9;
            case 17:
                return tempo * 1.1;
            case 16: 
                return tempo * 0.5; 
           default:
               return;
       } 
    }
}

export function calculaComPlano (origem, destino, tempo, plano) {

    
    let valorAcrescimo, valorBruto;
    switch (plano) {
        case 'FaleMais30':
            if(tempo <= 30) {
                return 0 
            }
            valorBruto = calcularSemPlano(origem, destino, tempo - 30)
            valorAcrescimo = (calcularSemPlano(origem, destino, tempo - 30) * 10) / 100 ;
            return valorAcrescimo + valorBruto
        case 'FaleMais60':
            if(tempo <= 60) {
                return 0   
            }
            valorBruto = calcularSemPlano(origem, destino, tempo - 60)
            valorAcrescimo = (calcularSemPlano(origem, destino, tempo - 60) * 10) / 100 ;
            return valorAcrescimo + valorBruto
        case 'FaleMais120':
            if(tempo <= 120) {
                return 0   
            }
            valorBruto = calcularSemPlano(origem, destino, tempo - 120)
            valorAcrescimo = (calcularSemPlano(origem, destino, tempo - 120) * 10) / 100 ;
            return valorAcrescimo + valorBruto
        default:
            break;
    }
}