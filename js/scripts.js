/// Business Logic for Output

function TicketList() {
  this.tickets = [];
  this.ticketId = 0;
  this.totalPrice = 0;
}

TicketList.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  
  this.tickets.push(ticket);
}


// MovieTicket.prototype.ticketPrice = function(ticket){
//   if var inputtedAge === 
// }




// MovieTicket.prototype.ticketPrice = function(ticket){
//   for (var i=0; i< this.tickets.length; i++)
//     if (this.tickets[i]){
//       if (this.tickets[i].film === "feature"){
        
//       }
  
//     }
// };


TicketList.prototype.findPrice = function() {
  if (ticket.film == "feature") { 
  ticket.price == 6;
  }
}
TicketList.prototype.assignId = function(){
  this.ticketId +=1;
  return this.ticketId;
}
TicketList.prototype.findTicket = function(id) {
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

function Ticket(film, time, age, price) {
  this.film = film,
  this.time = time,
  this.age = age,
  this.price = price;
 
}

// USER INTERFACE LOGIC:

var ticketList = new TicketList();

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
ticketList.addTicket(newTicket);
tickets.findTicket(newTicket);
// displayTicketDetails(movieTicket);
  });
});