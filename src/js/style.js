function Person(firstName, lastName, birthDate, nationality, job) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.nationality = nationality;
    this.job = job;
}

function Player(role) {
    this.role = role;
}

function OutfieldPlayer(position) {
    this.position = position;
}

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.setPrototypeOf(OutfieldPlayer.prototype, Person.prototype);
Object.setPrototypeOf(OutfieldPlayer.prototype, Player.prototype);