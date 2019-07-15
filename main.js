import Pony from './class.Pony'
import DragonBall from './class.DragonBall'
import { DBHeroes } from "./DBHeroes"

console.log("--- STEP #1 ---")

var pony = new Pony()
var saiyajin = new DragonBall(DBHeroes.KAKAROT)

pony.isMoved()
saiyajin.isMoved()
