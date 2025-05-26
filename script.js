function updateClock(){
    const now= new Date();
      const options = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = now.toLocaleTimeString('pt-BR', options);

    const [hours, minutes, seconds] = timeString.split(':');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}


setInterval(updateClock, 1000);
updateClock();