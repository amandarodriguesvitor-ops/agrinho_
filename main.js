// 1. ANIMAÇÃO DOS CONTADORES (Efeito numérico)
function iniciarContadores() {
    const contadores = document.querySelectorAll('.numero');
    
    contadores.forEach(contador => {
        const alvo = parseInt(contador.getAttribute('data-alvo'));
        let atual = 0;
        const incremento = alvo / 50; // Altere para ajustar a velocidade

        const atualizarNumero = () => {
            atual += incremento;
            if (atual < alvo) {
                contador.innerText = Math.ceil(atual);
                setTimeout(atualizarNumero, 30);
            } else {
                contador.innerText = alvo;
            }
        };
        atualizarNumero();
    });
}

// 2. CALCULADORA DE MERENDA ESCOLAR
document.getElementById('btn-calcular').addEventListener('click', function() {
    const alunos = document.getElementById('num-alunos').value;
    const resultado = document.getElementById('resultado-calc');

    if (alunos > 0) {
        // Estimativa: 2.5 kg de alimentos por estudante ao mês
        const totalQuilos = alunos * 2.5;
        resultado.innerHTML = `Sua escola consumiria aproximadamente <strong>${totalQuilos.toFixed(1)} kg</strong> de alimentos limpos por mês!`;
    } else {
        resultado.innerHTML = "Por favor, digite um número válido de alunos.";
    }
});

// 3. FILTRO DINÂMICO DE FEIRAS REGIONAIS
document.getElementById('filtro-regiao').addEventListener('change', function() {
    const regiaoSelecionada = this.value;
    const itensFeira = document.querySelectorAll('.feira-item');

    itensFeira.forEach(item => {
        const regiaoItem = item.getAttribute('data-regiao');
        
        if (regiaoSelecionada === 'todos' || regiaoSelecionada === regiaoItem) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Executa a animação assim que a página termina de carregar
window.onload = iniciarContadores;
