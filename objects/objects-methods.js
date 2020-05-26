let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function(partySize) {
    this.guestCount += partySize;
  },
  removeParty: function(partySize) {
    this.guestCount -= partySize;
  },
}

// a method is a nothing more than an object property whose value is a function.
// seatParty
// removeParty

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4)); // false
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4)); // true