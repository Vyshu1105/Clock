setInterval(() => {
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    hrotation=30*h + m/2;
    mrotation=6*m;
    srotation=6*s;
    Hour.style.transform=`rotate(${hrotation}deg)`;
    Minutes.style.transform=`rotate(${mrotation}deg)`;
    Seconds.style.transform=`rotate(${srotation}deg)`;
    Seconds.style.animatiom=`1s linear infinite`;
    currentTime = `${h}:${m}:${s}`;
    document.getElementById('time').textContent = currentTime;
}, 1000);
