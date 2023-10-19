document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        const mensagemFinal = `Obrigado, ${nome}! Recebemos sua mensagem: "${mensagem}". Entraremos em contato em breve pelo email ${email}.`;

        const produtos = document.querySelectorAll('.product');
        produtos.forEach(function(produto) {
            if (produto.textContent.includes('Coleira Tradutora de Miados')) {
                alert(`${mensagemFinal} A coleira tradutora de miados estará sendo enviada para você em breve!`);
            } else {
                alert(mensagemFinal);
            }
        });

        form.reset();
    });
});
