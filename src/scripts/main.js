AOS.init();

const dataDoAniversario = new Date("Aug 13, 2025 00:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEmMs);
    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMs) / horaEmMs);
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horaEmMs) / minutoEmMs);
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;

    if (distanciaAteOAniversario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Aniversário passou, até 2026';
    }
}, 1000);