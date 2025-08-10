particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": ["#ff758c","#667eea","#764ba2"] },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.6, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 2 }
    }
});

function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return a;
}

function buatSandi(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let shift = fibonacci(i);
        let c = input.charCodeAt(i) + shift;
        result += String.fromCharCode(c);
    }
    return result;
}

function pecahSandi(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        let shift = fibonacci(i);
        let c = input.charCodeAt(i) - shift;
        result += String.fromCharCode(c);
    }
    return result;
}

function typeWriterEffect(element, text) {
    element.textContent = "";
    let i = 0;
    let interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 50);
}

document.getElementById('btnBuat').addEventListener('click', () => {
    const input = document.getElementById('inputBuat').value;
    if (!input) { alert('Masukkan kata sandi asli terlebih dahulu.'); return; }
    const sandiBaru = buatSandi(input);
    typeWriterEffect(document.getElementById('hasilBuat'), sandiBaru);
});

document.getElementById('btnPecah').addEventListener('click', () => {
    const input = document.getElementById('inputPecah').value;
    if (!input) { alert('Masukkan kata sandi terenkripsi terlebih dahulu.'); return; }
    const sandiAsli = pecahSandi(input);
    typeWriterEffect(document.getElementById('hasilPecah'), sandiAsli);
});
