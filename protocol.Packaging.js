export default class Packaging {

    constructor(isOpen, toy) {
        this.isOpen = false,
        this.toy = toy
    }

    open() {
        this.isOpen = true
    }

    insert(toyUnpackaged) {
        this.toy = toyUnpackaged
        this.isOpen = false
    }
}