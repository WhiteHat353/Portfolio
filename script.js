const btn = document.getElementById('changeColorBtn');
const colors = ['#f4f4f4', '#e0f7fa', '#fff3e0', '#fce4ec', '#e8f5e9'];
let current = 0;

btn.addEventListener('click', () => {
    current = (current + 1) % colors.length;
    document.body.style.backgroundColor = colors[current];
    btn.innerText = "Background Changed!";
    setTimeout(() => {
        btn.innerText = "Change Background";
    }, 1000);
});
