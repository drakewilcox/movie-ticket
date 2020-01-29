// Business Logic for Output

function MovieTicket() {
  this.tickets = [];
  this.ticketId = 0;
  this.price = 0;
}

MovieTicket.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket);
}


// MovieTicket.prototype.ticketPrice = function(ticket){
//   if var inputtedAge === 
// }





MovieTicket.prototype.assignId = function(){
  this.ticketId +=1;
  return this.ticketId;
}
MovieTicket.prototype.findTicket = function(id) {
  for (var i=0; i< this.tickets.length; i++) {
    if (this.tickets[i]) {
      if (this.tickets[i].id == id) {
        return this.tickets[i];
      }
    }
  };
  return false;
}

// business logic for Ticket

function Ticket(film, time, age) {
  this.film = film,
  this.time = time,
  this.age = age;
}

// USER INTERFACE LOGIC:

var movieTicket = new MovieTicket();

$(document).ready(function()  {
  $("form#movies").submit(function(event) {
    event.preventDefault();
    var inputtedFilm = $("#film").val();
    var inputtedTime = $("#time").val();
    var inputtedAge = $("#age").val();

    $("#film").val();
    $("#time").val();
    $("#age").val();

var newTicket = new Ticket(inputtedFilm, inputtedTime, inputtedAge);
movieTicket.addTicket(newTicket);
// displayTicketDetails(movieTicket);
  });
});