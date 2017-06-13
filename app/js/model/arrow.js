class Arrow extends View {

    constructor(from, to) {
        super();
        this._name = '';
        this._contentType = 'arrow';
        this._from = from;
        this._to = to;
    }

    toJSON() {
        return {
            "eClass": this.class,
            "nome": this._name,
            "passoDeOrigem": {
                "eClass": this._from.class,
                "$ref": this._from.name
            },
            "juncaoDeChegada": {
                "eClass": this._to.class,
                "$ref": this._from.name
            }
        }
    }

}