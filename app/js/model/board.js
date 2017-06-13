class Board {

    constructor() {
        this.protocol = new Protocol()
    }

    get element() {
        let element = document.querySelector('#root');
        element.childNodes.forEach(node => element.removeChild(node))
        element.appendChild(this.protocol.element)
    }

    static instance() {
        if (this._instance == undefined) {
            this._instance = new Board()
        }
        return this._instance;
    }

    toJSON() {
        return {
            "eClass": "http://protocolos.intmed.com.br#//Root",
            "protocolo": [this.protocol.toJSON()]
        }
    }

    static showJSON() {
        let json = document.querySelector('#root');
        json.innerHTML = `<pre>${JSON.stringify(Board.instance().toJSON(), null, 3)}</pre>`
    }

    static showElement() {
        Board.instance().element;
    }
}