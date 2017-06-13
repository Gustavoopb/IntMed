class View {

    constructor() {
        this._name = ''
        this._classParser = {
            "arrow": "http://protocolos.intmed.com.br#//Sequencia",
            "task": "http://protocolos.intmed.com.br#//AuxilioConduta",
            "ex-gateway": "http://protocolos.intmed.com.br#//JuncaoExcludente",
            "start-event": "http://protocolos.intmed.com.br#//Root"
        }
    }

    get element() {
        let text = document.createElement('b');
        text.innerText = this._name;
        let content = document.createElement('div');
        content.classList.add('content')
        content.classList.add(this._contentType)
        content.addEventListener('dblclick', this.addText.bind(this));
        content.appendChild(text);
        let element = document.createElement('div')
        element.appendChild(content)
        return element;
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        let element = ev.target;
        this.addNode(new Slot(ev.dataTransfer.getData('data'), this));
    }

    addNode(node) {
        throw new Error("You must override this method.")
    }

    addText(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        let textarea = document.createElement('textarea');
        textarea.addEventListener('blur', this.removeTextArea.bind(this));
        textarea.value = this._name;
        ev.target.appendChild(textarea);
        textarea.focus()
    }

    removeTextArea(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this._name = ev.target.value
        Board.showElement()
    }

    toJSON() {
        throw new Error("You must override this method.")
    }

    get name() {
        return this._name;
    }

    set name(v) {
        this._name = v;
    }

    get class() {
        return this._classParser[this._contentType]
    }

    get contentType() {
        return this._contentType
    }
}