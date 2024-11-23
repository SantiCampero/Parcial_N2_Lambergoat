function validarLogin() {
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('password', password);

    const usuarioGuardado = localStorage.getItem('usuario');
    const passwordGuardado = localStorage.getItem('password');

    if (usuarioGuardado === 'admin' && passwordGuardado === 'admin123') {
        window.location.href = '../index.html';
    } else {
        alert('El usuario o la contraseña no son válidos');
        document.getElementById('usuario').value = '';
        document.getElementById('password').value = '';
    }
}