function JanaJylUakyt() { 
    let now = new Date(); 
    let nextYear = now.getFullYear() + 1; 
    let newYear = new Date(`January 1, ${nextYear} 00:00:00`); 
 
    let timeDifference = newYear - now; 
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); 
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); 
 
     
    days = days < 10 ? '0' + days : days; 
    hours = hours < 10 ? '0' + hours : hours; 
    minutes = minutes < 10 ? '0' + minutes : minutes; 
    seconds = seconds < 10 ? '0' + seconds : seconds; 
 
    document.getElementById('countdown').innerHTML = `<div>${days} күн ${hours} сағат ${minutes} минут ${seconds} секунд</div>`; 
 
    setTimeout(JanaJylUakyt, 1000); 
} 
 
JanaJylUakyt(); 
 
function createSnowflakes() { 
    let snowflake = document.createElement('div'); 
    snowflake.classList.add('snowflake'); 
    snowflake.textContent = '•'; 
    snowflake.style.left = `${Math.random() * 100}vw`; 
    snowflake.style.animationDuration = `${Math.random() * 10 + 20}s`; 
    snowflake.style.fontSize = `${Math.random() * 1.5 + 0.5}em`;  
    snowflake.style.opacity = `${Math.random() * 0.5 + 0.5}`; 
    document.body.appendChild(snowflake); 
 
    setTimeout(() => { 
        snowflake.remove(); 
    }, 30000); 
} 
 
setInterval(createSnowflakes, 500); 
 
document.addEventListener('DOMContentLoaded', function() { 
    let lastScrollTop = 0; 
    let header = document.querySelector('header'); 
 
    window.addEventListener('scroll', function() { 
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
 
        if (scrollTop > 700) { 
            header.style.transition = "all 1s"; 
            header.style.width = '100%'; 
            header.style.height = '70px'; 
            header.style.background = "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(171,39,39,1) 0%, rgb(255, 0, 55) 100%)"; 
            header.style.position = "fixed"; 
        } else { 
            header.style.width = '100%'; 
            header.style.height = '70px'; 
            header.style.background = "none"; 
        } 
 
        if (scrollTop > lastScrollTop) { 
            header.classList.add('hide'); 
        } else { 
            setTimeout(() => { 
                header.classList.remove('hide'); 
            }, 1000);  
        } 
 
        lastScrollTop = scrollTop; 
    }); 
});