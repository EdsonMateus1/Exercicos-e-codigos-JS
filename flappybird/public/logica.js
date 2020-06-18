function novoElemento(tagName, className) {
    const elemt = document.createElement(tagName);

    elemt.className = className;
    return elemt;
}

function  Barreira (reversa = false) {
    this.elemento = novoElemento('div', 'barreira');

    const borda = novoElemento('div','borda');
    const corpo = novoElemento('div','corpo');

    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);

    this.setAltura = altura => corpo.style.height = `${altura}px`;

}

function ParDeBarreiras(altura,abertura,x){
    this.elemento = novoElemento('div','par-de-barreiras');

    this.superior = new Barreira(true);
    this.inferior = new Barreira(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.sortearAbertura = () =>{
        const alturaSuperior = Math.random() * (altura - abertura);
        const alturaIferior = altura - abertura - alturaSuperior;
        this.setAltura(alturaSuperior);
        this.setAltura(alturaIferior);
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
    this.setx = x => this.elemento.style.left = `${x}px`;
    this.getLargura = () => this.elemento.clientWidth;

    this.sortearAbertura();

    this.setx(x);
};