addEventListener('submit', (event) => {
    event.preventDefault();
});
const datos = JSON.parse(localStorage.getItem('registros'));
const entrar = () => {
    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('pass').value;
    let llave = false;
    if (usuario && pass) {
        if (datos) {
            let resultados = datos.map((x) => {
                if (usuario == x.usuario && pass == x.pass) {
                    llave = true;
                    return;
                }
            })
            if (llave) {
                window.location.href = "./taskproject/index.html";
            } else {
                const p = document.createElement('p');
                const divError = document.getElementById("mensajes");
                p.classList.add('error');
                p.textContent += "Error Usuario no encontrado";
                divError.appendChild(p);
            }
        } else {
            const p = document.createElement('p');
            const divError = document.getElementById("mensajes");
            p.classList.add('error');
            p.textContent += "Error no hay usuarios registrados";
            divError.appendChild(p);
        }
    } else {
        const p = document.createElement('p');
        const divError = document.getElementById("mensajes");
        p.classList.add('error');
        p.textContent += "Error, Dejaste Campos vacios"
        divError.appendChild(p);
    }

}
const registrarse = () => {
    const usuario = document.getElementById('usuarioRegistro').value;
    const pass = document.getElementById('passRegistro').value;
    // Obtener el valor de una cadena guardada en formato JSON
    let registro = {
        usuario,
        pass
    };
    if (usuario && pass) {
        if (localStorage.getItem('registros') === null) {
            let registros = [];
            registros.push(registro);
            localStorage.setItem('registros', JSON.stringify(registros));

            const p = document.createElement('p');
            const divError = document.getElementById("mensajes");
            p.classList.add('error');
            p.textContent += "Usuario creado correctamente, redirigiendo al login....";
            divError.appendChild(p);
            setTimeout(function () {
                window.location.href = "../index.html";
            }, 2000);

        } else {
            let registros = JSON.parse(localStorage.getItem('registros'));
            registros.push(registro);
            localStorage.setItem('registros', JSON.stringify(registros));

            const p = document.createElement('p');
            const divError = document.getElementById("mensajes");
            p.classList.add('login');
            p.textContent += "Usuario creado correctamente, redirigiendo al login....";
            divError.appendChild(p);
            setTimeout(function () {
                window.location.href = "../index.html";
            }, 2000);
            // alert('Usuario Registrado con exito');
        }
    } else {
        const p = document.createElement('p');
        const divError = document.getElementById("mensajes");
        p.classList.add('error');
        p.textContent += "Error, dejaste campos vacios";
        divError.appendChild(p);
    }

}