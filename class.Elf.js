import Packaging from './protocol.Packaging'
import Box from './class.GiftWrap'
import GiftWrap from './class.GiftWrap';
import Toy from './protocol.Toy'

export default class Elf {

    constructor(nickname) {
        this.nickname = nickname
    }

    getter() {

    }

    setter() {

    }

    pack(Packaging, toy) {
        if ( Packaging instanceof GiftWrap) {
            if ( Packaging.toy ) {
                console.log("Sorry this package already filled")
                return
            } else {
                Packaging.insert(toy)
                console.log(`Yeaaaah! Just packing the toy ~~ ${toy.getter()} ~~`)
                return
            }
        } else {
            if ( Packaging.isOpen == false ) {
                console.log("Sorry this package is not open")
                return
            } else if ( Packaging.toy ) {
                console.log("Sorry this package already filled")
                return
            } else {
                console.log(`Yeaaaah! Just packing the toy ~~ ${toy.getter()} ~~`)
                return
            }
        }
    }

    unpack(Packaging) {
        if ( ( Packaging.toy === null )  ) {
            console.log("Sorry this package is already empty")
            return true
        } else {
            console.log("Packaging", Packaging)
            console.log(`Ooooooh! Just unpacking the toy ~~ ${Packaging.toy.type} ~~`)
            Packaging.toy = null
            return true;
        }
    }
}