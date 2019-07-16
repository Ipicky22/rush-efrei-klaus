import Pony from './class.Pony'
import DragonBall from './class.DragonBall'
import { DBHeroes } from "./DBHeroes"
import Elf from './class.Elf'
import Box from './class.Box'
import GiftWrap from './class.GiftWrap'

console.log("--- STEP #1 ---")

var pony = new Pony()
var saiyajin = new DragonBall(DBHeroes.KAKAROT)

pony.isMoved()
saiyajin.isMoved()

console.log("--- STEP #2 ---")

var monaka = new Elf("monaka")
var box = new Box()

monaka.pack( box, saiyajin)
box.open()
monaka.pack( box, saiyajin)

var paper = new GiftWrap()

monaka.pack( paper, pony)
monaka.pack( paper, pony)

var toy = monaka.unpack(paper)
console.log(toy)
var r = monaka.unpack(paper)
console.log(r)