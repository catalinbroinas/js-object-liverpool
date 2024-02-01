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

function outfieldPlayer(position) {
    this.position = position;
}