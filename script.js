setInterval(() => {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    const hrotation = 30 * h + m / 2; 
    const mrotation = 6 * m;           
    const srotation = 6 * s;           

    document.getElementById('Hour').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('Minutes').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('Seconds').style.transform = `rotate(${srotation}deg)`;
    document.getElementById('Seconds').style.animation = `1s linear infinite`;
    
    let formattedTime = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    document.getElementById('time').textContent = formattedTime;
}, 1000);




