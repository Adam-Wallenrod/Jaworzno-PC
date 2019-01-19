function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;

  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

var hiltonlHotel = new Hotel('Hilton', 300, 120);
var chealseHotel = new Hotel('Chealse', 90, 89);

var details1 = 'rooms in hotel ' + hiltonlHotel.name + ': ';
details1 += hiltonlHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = 'rooms in hotel ' + chealseHotel.name + ': ';
details2 += chealseHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;