import Figurine from './protocol.Figurine'
import { DBHeroes } from './DBHeroes'

export default class Dragonball extends Figurine {

    #_character

    constructor(_character, type){
        super(type)
        this.#_character = DBHeroes._character
        this.init(_character)
    }

    init(_character){
        console.log(`
${_character} is singing -->
CHA-LA HEAD CHA-LA
Nani ga okite mo kibun wa heno-heno kappa
CHA-LA HEAD CHA-LA
Mune ga pachi-pachi suru hodo
Sawagu Genki-Dama --Sparking !
        `)
    }

    isMoved(){
        console.log("Kamé Hamé Ha!")
    }

    getter(){
        type = `Dragon Ball figurine #${id}`
        console.log(type)
    }
}