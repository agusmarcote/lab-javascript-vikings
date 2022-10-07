// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health,
        this.strength = strength 
    }

    attack(){
        return this.strength
    }


    receiveDamage(amount){
        this.health -= amount;
    }
}

//const soldado1 = new Soldier (100,20)



// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(name, health, strength)
        this.name = name,
        this.health = health,
        this.strength = strength
        
    }
    
    attack(){
        return this.strength
    }


    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return (`${this.name} has received ${damage} points of damage`)
        }
            else if (this.health <= 0) {
                return (`${this.name} has died in act of combat`)
            }
    }

    battleCry(){
        return ("Odin Owns You All!")
    }
}


// Saxon
class Saxon extends Soldier{
        receiveDamage(damage){
            this.health -= damage;
            if (this.health > 0){
                return (`A Saxon has received ${damage} points of damage`);
            }
            else if (this.health <= 0){
                return ("A Saxon has died in combat")
            }
        }
    }


// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy =[]
    }

    addViking (viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
        let chosenSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let result = this.saxonArmy[chosenSaxon].receiveDamage(this.vikingArmy[vikingRandom].attack());

        if (this.saxonArmy[chosenSaxon].health < 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(this.saxonArmy[chosenSaxon]), 1)
        }

        return result


    }
    saxonAttack(){
        let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
        let chosenSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let result = this.vikingArmy[vikingRandom].receiveDamage(this.saxonArmy[chosenSaxon].attack());

        if (this.vikingArmy[vikingRandom].health <= 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(this.vikingArmy[vikingRandom]), 1)
        }

        return result
    }
    showStatus(){
        if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
            return ("Vikings and Saxons are still in the thick of battle.")
        }else if (this.vikingArmy.length < 1){
            return ("Saxons have fought for their lives and survived another day...")
        }else if (this.saxonArmy.length < 1){
            return ("Vikings have won the war of the century!")
        }
    }
}

let malvinas = new War 
let ragnar = new Viking ("Ragnar", 200, 300)
let loki = new Viking ("Loki", 200, 300)
let thor = new Viking ("Thor", 200, 400)
let thar = new Viking ("Thar", 150, 300)
let fare = new Viking ("Fare", 150, 300)
let tortom = new Viking ("Tortum", 100, 300)
let larkum = new Viking ("Larkum", 100, 300)
let kimbre = new Viking ("Kimbre", 100, 300)
let kali = new Viking ("Kali", 50, 50)
let kucha = new Viking ("Kucha", 50, 100)
malvinas.addViking(ragnar)
malvinas.addViking(loki)
malvinas.addViking(thor)
malvinas.addViking(thar)
malvinas.addViking(fare)
malvinas.addViking(tortom)
malvinas.addViking(larkum)
malvinas.addViking(kimbre)
malvinas.addViking(kali)
malvinas.addViking(kucha)
let agus = new Saxon (30, 50)
let carles = new Saxon (20, 40)
let pau = new Saxon (20, 40)
let jose = new Saxon (15, 30)
let marco = new Saxon (15, 30)
let matias = new Saxon (15, 30)
let carol = new Saxon (10, 10)
let ivana = new Saxon (10, 10)
let vicky = new Saxon (10, 10)
let giulia = new Saxon (10, 10)
malvinas.addSaxon(agus)
malvinas.addSaxon(carles)
malvinas.addSaxon(pau)
malvinas.addSaxon(jose)
malvinas.addSaxon(marco)
malvinas.addSaxon(matias)
malvinas.addSaxon(carol)
malvinas.addSaxon(ivana)
malvinas.addSaxon(vicky)
malvinas.addSaxon(giulia)
console.log(malvinas)