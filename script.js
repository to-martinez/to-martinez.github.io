let isMoved = true;
function izb() {
  const element = document.getElementById('izbornik');
  const hamb = document.getElementById('hamburger');
  const currentPosition = element.style.left;

  if (!isMoved) {
    element.style.right = '-100%';
    hamb.style.display = 'block';
    isMoved = true;
  } else {
    element.style.right = '0';
    hamb.style.display = 'none';
    isMoved = false;
  }
}


const header = document.getElementById('prvih');
const header1 = document.getElementById('drugih');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  const threshold = 200;
  if (window.innerWidth > 850) {
     if (scrollPosition > threshold) {
    header.style.opacity = '0';  
    header1.style.display = 'block';
    header.style.display = 'none';
    header1.style.opacity = '1';  
    } else {

    header.style.opacity = '1'; 
    header.style.display = 'block';
    header1.style.display = 'none'; 
    header1.style.opacity = '0'; 
    }
  }
  
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});




const kat1 = document.getElementById('kat1');
const kat2 = document.getElementById('kat2');
const kat3 = document.getElementById('kat3');

function removeBlur(element) {
  element.style.filter = 'none'; 
  element.style.transform = 'scale(1.03)';
  element.style.filter = 'drop-shadow(0 0 5rem black)';
  element.style.zIndex = "100";
}

function addBlur(element) {
  element.style.transform = 'scale(1)';
  element.style.zIndex = "1";
}

kat1.addEventListener('mouseover', function() {
  removeBlur(kat1);
});
kat1.addEventListener('mouseout', function() {
  addBlur(kat1);
});

kat2.addEventListener('mouseover', function() {
  removeBlur(kat2);
});
kat2.addEventListener('mouseout', function() {
  addBlur(kat2);
});

kat3.addEventListener('mouseover', function() {
  removeBlur(kat3);
});
kat3.addEventListener('mouseout', function() {
  addBlur(kat3);
});



function openPreview(imageSrc) {
  const overlay = document.getElementById('overlay');
  const slika_mala = document.getElementById('slika_carousel');
  var slika_velika = document.getElementById('slika_velika');
  

  slika_velika.src = imageSrc;
  overlay.style.display = 'flex';

}

function closePreview() {
  const previewModal = document.getElementById('overlay');
  
  previewModal.style.display = 'none';
}

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function checkCookie() {
  var inst = window.getComputedStyle(document.querySelector('#instructions')).display;
  let user = getCookie("inst");
  if (user == "flex") {
    document.getElementById('instructions').style.display = "none";
  } else {
    document.getElementById('instructions').style.display = "flex";
    setCookie("inst", "flex", 30);
  }
}


