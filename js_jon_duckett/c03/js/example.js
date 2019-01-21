(function() {
    var hotel = {
        name: 'Delfin',
        roomRate: 240,
        discount: 15,
        offerPrice: function(){
            var offerRate = this.roomRate * ((100 -this.discount)/100);
            return offerRate;
        }
    }

    var hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRategit a');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = hotel.roomRate.toFixed(2) + '$';
    specialRate.textContent = hotel.offerPrice() + '$';


    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today){
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        weekFromToday = new Date(today.getTime() + (1000*60*60*24*7));

        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday', 'Saturday' ];

        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December'];
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = 'Offer expires:  ';
        expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);

  }());