class Slot extends View {

    constructor(contentType, parent) {
        super();
        this._nodes = [];
        this._parent = parent;
        this._contentType = contentType;
        this._arrow = new Arrow(this._parent, this)
        this._growthOrder = {
            "slot-n": ["slot-n", "slot-e", "slot-w"],
            "slot-e": ["slot-e", "slot-s", "slot-n"],
            "slot-s": ["slot-s", "slot-e", "slot-w"],
            "slot-w": ["slot-w", "slot-s", "slot-n"]
        }
    }

    get element() {
        let element = super.element
        element.classList.add(this._direction);
        element.addEventListener('drop', super.drop.bind(this));
        element.addEventListener('dragover', super.allowDrop);
        this._nodes.map(node => element.appendChild(node.element));
        element.appendChild(this._arrow.element)
        return element;
    }

    get direction() {
        return this._direction;
    }

    set direction(v) {
        return this._direction = v;
    }

    get arrow() {
        return this._arrow;
    }

    set arrow(v) {
        return this._arrow = v;
    }

    addNode(node) {
        if (this._nodes.length < 3) {
            let index = this._nodes.length;
            node.direction = this._growthOrder[this._direction][index];
            this._nodes.push(node);
        }
        Board.instance().protocol.elements.push(node)
        Board.instance().protocol.elements.push(node.arrow)
        Board.showElement()
    }

    toJSON() {
        return {
            "eClass": this.class,
            "nome": this._name,
            "isInitial": this._parent.contentType.includes("start-event"),
            "sequenciaDeSaida": this._nodes.map(node => ({ "eClass": node.arrow.class, "$ref": node.arrow.name })),
            "sequenciaDeOrigem": [{ "eClass": this.arrow.class, "$ref": this.arrow.name }]
        }
    }

    get nodes() {
        return this._nodes;
    }
}