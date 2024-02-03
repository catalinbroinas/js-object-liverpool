function Person(firstName, lastName, birthDate, nationality, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.nationality = nationality;
    this.job = job;
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

function Player(firstName, lastName, birthDate, nationality, job, role) {
    Person.call(this, firstName, lastName, birthDate, nationality, job);
    this.role = role;
}

Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player;

function OutfieldPlayer(firstName, lastName, birthDate, nationality, job, role, position) {
    Player.call(this, firstName, lastName, birthDate, nationality, job, role);
    this.position = position;
}

OutfieldPlayer.prototype = Object.create(Player.prototype);
OutfieldPlayer.prototype.constructor = OutfieldPlayer;

// Create players
const alissonBecker = new Player('Alisson', 'Becker', '02-10-1992', 'Brazilian', 'player', 'goalkeeper');

console.log(alissonBecker.getFullName());