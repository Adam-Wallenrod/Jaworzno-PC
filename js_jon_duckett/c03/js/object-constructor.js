var hotel = new Object();

hotel.name = "Falty Towers";
hotel.rooms = 123;
hotel.booked = 56;

hotel.checkAvailability = function() {
  return this.rooms - this.booked;
}

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();