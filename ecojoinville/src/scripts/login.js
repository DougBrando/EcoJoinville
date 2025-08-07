        const btnEntrar = document.getElementById('btnEntrar');
        const emailInput = document.getElementById('email');
        const senhaInput = document.getElementById('senha');
        const loginForm = document.getElementById('loginForm');

        emailInput.addEventListener('input', validarFoco);
        senhaInput.addEventListener('input', validarFoco);

        function validarFoco() {
            btnEntrar.disabled = !(emailInput.value.length > 0 && senhaInput.value.length > 0);
        }

        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('E-mail salvo:', emailInput.value);
            localStorage.setItem('email', emailInput.value);
            window.location.href = 'parceiros.html';
        });