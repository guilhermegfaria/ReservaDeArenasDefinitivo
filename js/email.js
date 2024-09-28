(function() {
    emailjs.init("r6mrZuXz6BH3TLSMd"); // Substitua com sua Public Key do EmailJS
})();

// Adiciona o evento de submit ao formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    // Envia o formulário para você (dono do formulário)
    emailjs.sendForm('service_iyx2b3u', 'template_ktmm0u3', this)
        .then(function() {
            // Se o envio do formulário para você for bem-sucedido
            alert('Mensagem enviada com sucesso!');

            // Agora envia o e-mail de confirmação para o usuário
            const userEmail = document.getElementById('user_email').value;
            const toName = document.getElementById('to_name').value;
            const message = document.getElementById('message').value;
            const templateParams = {
                to_name: toName,
                user_email: userEmail,
                message: message,
            };

    emailjs.sendForm('service_iyx2b3u', 'template_6r0km87', templateParams)
        .then(function() {
            console.log('E-mail de confirmação enviado para o usuário.');
        }, function(error) {
            console.error('Erro ao enviar o e-mail de confirmação: ' + JSON.stringify(error));
        });
}, function(error) {
    alert('Erro ao enviar o formulário: ' + JSON.stringify(error));
});
});