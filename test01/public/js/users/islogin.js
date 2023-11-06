// // JavaScript Document
// 			// validate that user is log-in
// 			var auth = firebase.apps[0].auth();

// 			function validar() {
// 				var uid = -1
// 				//const user = auth.currentUser;
// 				auth.onAuthStateChanged((user) => {
// 					if (user) {
// 						uid = user.uid;
// 					} else {
// 						document.location.href = 'login.html';
// 					}
// 				});
// 				return uid;
// 			}


// Se cambia la función validar para que retorne una promesa
function validar() {
    return new Promise((resolve, reject) => {
        var auth = firebase.apps[0].auth();
        auth.onAuthStateChanged((user) => {
            if (user) {
                resolve(user.uid);
            } else {
                document.location.href = 'login.html';
                reject('No user logged in');
            }
        });
    });
}

			// close current session
			function salir(){
				auth.signOut().then(() => {
					document.location.href ='login.html';
				}).catch((error)=>{
				   alert('Error al cerrar la sesión: ' + error.message);
				});
			}