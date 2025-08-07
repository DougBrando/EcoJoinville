const form = document.getElementById('form-model');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    const formData = new FormData(form);

    const errors = [];
    const username = formData.get('username');
    const partnerType = formData.get('partner-type');
    const responsibleName = formData.get('responsible-name');
    const responsibleEmail = formData.get('responsible-email');
    const responsiblePhone = formData.get('responsible-phone');
    const street = formData.get('street');
    const number = formData.get('number');
    const neighborhood = formData.get('neighborhood');

    if (!username) errors.push({ id: 'username-error', message: 'Nome de usuário é obrigatório' });
    if (!partnerType) errors.push({ id: 'partner-type-error', message: 'Selecione o tipo de parceiro' });
    if (!responsibleName) errors.push({ id: 'responsible-name-error', message: 'Nome do responsável é obrigatório' });
    if (!responsibleEmail || !responsibleEmail.includes('@')) errors.push({ id: 'responsible-email-error', message: 'Email válido é obrigatório' });
    if (!responsiblePhone) errors.push({ id: 'responsible-phone-error', message: 'Telefone é obrigatório' });
    if (!street) errors.push({ id: 'street-error', message: 'Rua é obrigatória' });
    if (!number) errors.push({ id: 'number-error', message: 'Número é obrigatório' });
    if (!neighborhood) errors.push({ id: 'neighborhood-error', message: 'Bairro é obrigatório' });

    const wasteTypes = [];
    const checkboxes = document.querySelectorAll('input[name="waste-types"]:checked');
    checkboxes.forEach(checkbox => {
        wasteTypes.push(checkbox.value);
    });

    if (wasteTypes.length === 0) {
        errors.push({ id: 'waste-types-error', message: 'Selecione pelo menos um tipo de resíduo' });
    }

    document.querySelectorAll('.error-message').forEach(span => span.classList.remove('show'));
    if (errors.length > 0) {
        errors.forEach(error => {
            const errorElement = document.getElementById(error.id);
            errorElement.textContent = error.message;
            errorElement.classList.add('show');
        });
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        return;
    }

    const dadosParaEnviar = {
        username,
        partnerType,
        responsibleName,
        responsibleEmail,
        responsiblePhone,
        street,
        number,
        neighborhood,
        wasteTypes
    };

    fetch('https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosParaEnviar)
    })
        .then(response => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            if (response.ok) {
                alert('Dados enviados com sucesso!');
                form.reset();
            } else {
                alert('Erro ao enviar dados. Tente novamente.');
            }
        })
        .catch(error => {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            alert('Erro ao enviar dados. Verifique sua conexão.');
        });
});