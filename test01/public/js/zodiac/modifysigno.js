var db = firebase.apps[0].firestore();

const txtPosic = document.querySelector('#txtPosic');
const txtSigno = document.querySelector('#txtSigno');
const txtRango = document.querySelector('#txtRango');
const txtElemento = document.querySelector('#txtElemento');
const txtAstro = document.querySelector('#txtAstro');
const txtPiedra = document.querySelector('#txtPiedra');


db.collection("datosZodiaco").get().then(function(query){
    var sig = "";
    var ran = "";
    var elem = "";
    var astr = "";
    var piedr = "";
	query.forEach(txtPosic)(function(doc){
        sig += doc.data().signo
        ran += doc.data().rango
        elem += doc.data().Elemento
        astr += doc.data().Astro
        piedr += doc.data().Piedra
	})
    txtSigno.value = sig;
    txtRango.value = ran;
    txtElemento.value = elem;
    txtAstro.value = astr;
    txtPiedra.value = piedr;
    txtPosic.focus();

			})

