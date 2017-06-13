function drag(ev) {
    ev.dataTransfer.setData("data", ev.target.id);
}

Board.showElement()

