class Protocol extends View {

    constructor() {
        super();
        this._id = 'InfluenzaPneumonia';
        this._name = 'Influenza Pneumonia';
        this._initialNode = null;
        this._contentType = 'start-event'
        this._elements = [];
    }

    get element() {
        let element = super.element
        element.classList.add('slot-grid')
        element.addEventListener('drop', this.drop.bind(this));
        element.addEventListener('dragover', super.allowDrop);
        if (this._initialNode != null) element.appendChild(this._initialNode.element);
        return element;
    }

    get elements() {
        return this._elements;
    }

    set elements(v) {
        this._elements = v;
    }

    addNode(node) {
        if (this._initialNode == null) {
            node.direction = 'slot-e';
            this._initialNode = node
            Board.instance().protocol.elements.push(node)
            Board.showElement()
        }
    }

    toJSON() {
        return {
            "codigo": this._id,
            "nome": this._name,
            "elemento": this._elements.map(element => element.toJSON())
        }
    }
}