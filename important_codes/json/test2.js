let room = {
    number: 23,
    toJSON() {
        return { number: this.number };
    }
}
let meetup = {
    title: 'conference',
    participants: [{ name: 'John' }, { name: 'Alice' }],
    place: room,
}

room.occupiedBy = meetup;

// console.log(room);
// console.log(meetup);

// let jsn = JSON.stringify(meetup, function (key, value) {
//     return (key == 'occupiedBy') ? undefined : value;
// }, 4);
let jsn = JSON.stringify(meetup, null, 4);
console.log(jsn);