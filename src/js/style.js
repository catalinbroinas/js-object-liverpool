function Person(firstName, lastName, birthDate, nationality, job, image) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthDate);
    this.nationality = nationality;
    this.job = job;
    this.image = image;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getAge = function () {
    const ageDifMs = Date.now() - this.birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function Player(firstName, lastName, birthDate, nationality, job, image, role) {
    Person.call(this, firstName, lastName, birthDate, nationality, job, image);
    this.role = role;
}

Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player;

function OutfieldPlayer(firstName, lastName, birthDate, nationality, job, image, role, position) {
    Player.call(this, firstName, lastName, birthDate, nationality, job, image, role);
    this.position = position;
}

OutfieldPlayer.prototype = Object.create(Player.prototype);
OutfieldPlayer.prototype.constructor = OutfieldPlayer;

function createTeam() {
    const team = [];

    const alissonBecker = new Player(
        'Alisson', 'Becker',
        '1992-10-02', 'Brazilian',
        'player', 'alisson.webp',
        'goalkeeper'
    );
    const alexArnold = new OutfieldPlayer(
        'Alexander', 'Arnold',
        '1998-10-07', 'English',
        'player', 'arnold.png',
        'defender', 'right back'
    );
    const wataruEndo = new OutfieldPlayer(
        'Wataru', 'Endo',
        '1993-02-09', 'Japanese',
        'player', 'endo.png',
        'midfielder', 'defensive Midfield'
    );
    const mohamedSalah = new OutfieldPlayer(
        'Mohamed', 'Salah',
        '1992-06-15', 'Egyptian',
        'player', 'salah.png',
        'forward', 'right winger'
    );
    const vanDijk = new OutfieldPlayer(
        'Virgil', 'Van Dijk',
        '1991-07-08', 'Dutch',
        'player', 'vanDijk.png',
        'defender', 'centre back'
    );
    const ibrahimaKonate = new OutfieldPlayer(
        'Ibrahima', 'Konate',
        '1999-05-25', 'French',
        'player', 'konate.webp',
        'defender', 'centre back'
    );
    const andyRobertson = new OutfieldPlayer(
        'Andy', 'Robertson',
        '1994-03-11', 'Scottish',
        'player', 'robertson.png',
        'defender', 'left back'
    );
    const macAllister = new OutfieldPlayer(
        'Alexis', 'Mac Allister',
        '1998-12-24', 'Argentinian',
        'player', 'macAllister.png',
        'midfielder', 'central midfield'
    );
    const curtisJones = new OutfieldPlayer(
        'Curtis', 'Jones',
        '2001-01-30', 'English',
        'player', 'jones.png',
        'midfielder', 'central midfield'
    );
    const luisDiaz = new OutfieldPlayer(
        'Luis', 'Diaz',
        '1997-01-13', 'Colombian',
        'player', 'diaz.png',
        'forward', 'left winger'
    );
    const darwinNunez = new OutfieldPlayer(
        'Darwin', 'Nunez',
        '1999-06-24', 'Uruguayan',
        'player', 'nunez.png',
        'forward', 'center forward'
    );

    team.push(
        alissonBecker,
        alexArnold,
        wataruEndo,
        mohamedSalah,
        vanDijk,
        ibrahimaKonate,
        andyRobertson,
        macAllister,
        curtisJones,
        darwinNunez,
        luisDiaz
    );

    return team;
}

function createPlayerCard({
    firstName,
    lastName,
    getFullName,
    birthDate,
    getAge,
    nationality,
    image,
    role,
    position
}) {
    const column = document.createElement('div');
    const card = document.createElement('div');
    const cardImage = document.createElement('img');
    const cardHeader = document.createElement('div');
    const cardFullName = document.createElement('h3');
    const cardBody = document.createElement('div');
    const cardAge = document.createElement('p');
    const cardNationality = document.createElement('p');

    column.classList.add('col');
    card.classList.add('card', 'border-0', 'h-100', 'shadow-sm', 'rounded-3', 'rounded-top-0');
    cardImage.classList.add('card-img-top', 'object-fit-cover', 'h-100', 'bg-light');
    cardHeader.classList.add('card-header');
    cardBody.classList.add('card-body', 'text-center');
    cardFullName.classList.add('card-title', 'text-center');
    cardAge.classList.add('card-text', 'fw-normal', 'fs-5');
    cardNationality.classList.add('card-text', 'text-capitalize', 'fw-normal', 'fs-5');

    cardImage.setAttribute('alt', getFullName.call({ firstName, lastName }));
    cardImage.setAttribute('src', `img/${image}`);

    cardFullName.textContent = getFullName.call({ firstName, lastName });
    cardAge.textContent = `${getAge.call({ birthDate })} years`;
    cardNationality.textContent = nationality;

    column.appendChild(card);
    card.appendChild(cardImage);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardHeader.appendChild(cardFullName);
    cardBody.appendChild(cardAge);

    if (position) {
        const cardPosition = document.createElement('p');
        cardPosition.classList.add('card-text', 'text-capitalize', 'fw-normal', 'fs-5');
        cardPosition.textContent = position;
        cardBody.appendChild(cardPosition);
    }

    cardBody.appendChild(cardNationality);

    return column;
}

function displayPlayerCards(players) {
    const gkSect = document.querySelector('#goalkeepers');
    const defSect = document.querySelector('#defenders');
    const midSect = document.querySelector('#midfielders');
    const attSect = document.querySelector('#forwards');

    players.forEach((player) => {
        const column = createPlayerCard(player);
        switch (player.role) {
            case 'goalkeeper':
                gkSect.appendChild(column);
                break;
            case 'defender':
                defSect.appendChild(column);
                break;
            case 'midfielder':
                midSect.appendChild(column);
                break;
            case 'forward':
                attSect.appendChild(column);
                break;
        }
    });
}

window.addEventListener('load', () => {
    const team = createTeam();
    displayPlayerCards(team);
});