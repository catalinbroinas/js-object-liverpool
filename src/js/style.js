function Person(firstName, lastName, birthDate, nationality, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthDate);
    this.nationality = nationality;
    this.job = job;
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getAge = function() {
    const ageDifMs = Date.now() - this.birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
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
const alissonBecker = new Player('Alisson', 'Becker', '1992-10-02', 'Brazilian', 'player', 'goalkeeper');

console.log(alissonBecker.getFullName());
console.log(alissonBecker.getAge());