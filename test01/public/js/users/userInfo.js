    document.addEventListener("DOMContentLoaded", function() {
        // Inicializar Firebase Firestore
        var auth = firebase.apps[0].auth();

        // Obtener referencia del cuerpo de la tabla
        const tableBody = document.getElementById("usersTableBody");

        // Consultar la colección donde se almacenan los usuarios
        db.collection("usuarios").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const userData = doc.data();

                // Crear una nueva fila y celdas para cada usuario
                let row = tableBody.insertRow();
                
                let emailCell = row.insertCell(0);
                let creationDateCell = row.insertCell(1);
                let lastAccessDateCell = row.insertCell(2);

                // Insertar los datos en las celdas
                emailCell.textContent = userData.email || "-";
                creationDateCell.textContent = userData.creationDate || "-";
                lastAccessDateCell.textContent = userData.lastAccessDate || "-";
            });
        }).catch((error) => {
            console.error("Error al obtener los usuarios: ", error);
        });
    });
