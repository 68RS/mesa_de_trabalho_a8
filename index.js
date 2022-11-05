function podeSubir (altura, acompanhante ) {

 if (altura >= 1.40 && altura <= 2.00) {
    podeSubir = 'Acesso liberado';

 } else if (altura <= 1.40 && acompanhante) {
    podeSubir = 'Deverá ir acompanhada';

 }else if (altura <= 1.20) {
    podeSubir = 'Não poderá subir, nem acompanhada';
 }

}

 
