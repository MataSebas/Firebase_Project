// var auth = firebase.apps[0].auth();

// function getInfo(uid){
//     getAuth()
//         .getUser(uid)
//         .then((userRecord)=>{
//             console.log(`Información Recuperada correctamente: ${userRecord.toJSON()}`);


//         })
//         .catch((error)=>{
//             console.log('Error al devolver la información:', error)
//         })
// }

function getInfo() {
    validar().then(uid => {
        getAuth().getUser(uid)
            .then((userRecord) => {
                console.log(`Información Recuperada correctamente: ${userRecord.toJSON()}`);
            })
            .catch((error) => {
                console.log('Error al devolver la información:', error);
            });
    }).catch(error => {
        console.log('Error al validar usuario:', error);
    });
    return getAuth().getUser(uid);
}

function showInfo(){
validar().then(uid => {
    getInfo(uid)
        .then((userRecord) => {
        // Suponiendo que userRecord tiene la estructura con los datos necesarios.
        let html = `
            <tr>
            <td>${userRecord.email}</td>
            <td>${userRecord.metadata.creationTime}</td>
            <td>${userRecord.metadata.lastSignInTime}</td>
            </tr>
        `;
        document.getElementById('usersTableBody').innerHTML = html;
        })
        .catch((error) => {
        console.error('Error al devolver la información:', error);
        });
    }).catch(error => {
    console.error('Error al validar usuario:', error);
    });

}


