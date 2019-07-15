import Toy from './protocol.Toy'
export default class Pony extends Toy {

    #_nb = 1;

    constructor(id, type){
        super(type)
        this.id = this.#_nb
        this.init()
    }

    init(){
        console.log(`
Pony #${this.id} is singing -->
Dou-double poney, j’fais izi money
D’où tu m’connais ? Parle moi en billets violets
Dou-double poney, j’fais izi money
        `)
    }

    isMoved(){
        console.log("Huuuuuuhu !")
    }

    getter(){
        type = `Pony #${this.id}`
        console.log(type)
    }


}