
const hambutton = document.querySelector('.🍔');
const mainnav = document.querySelector('.navigation');
const asideBox = document.querySelector('aside');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class [window.onresize]
window.addEventListener('resize', () => {
	if (window.innerWidth > 760) { // window.innerWidth includes the scrollbar (if any), document.documentElement.clientWidth does not
		mainnav.classList.remove('responsive');
	}
    atualizarTamanho();
});
function atualizarTamanho() { 
    asideBox.textContent = `largura: ${window.innerWidth}px, altura: ${window.innerHeight}px`;
}
