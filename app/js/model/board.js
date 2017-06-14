class Board {

    constructor() {
        this.protocol = new Protocol()
    }

    get element() {
        let element = document.querySelector('#root');
        root.innerHTML = ''
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
        let root = document.querySelector('#root');
        root.innerHTML = ''
        let json = JSON.stringify(Board.instance().toJSON(), null, 3);
        let blob = new Blob([json], { type: "application/json" });
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a')
        a.download = "intmed-bpmn.json";
        a.href = url;
        a.textContent = "Baixar BPMN";
        root.appendChild(a)
        let pre = document.createElement('pre')
        pre.textContent = json;
        root.appendChild(pre)
    }

    static showElement() {
        Board.instance().element;
    }
}