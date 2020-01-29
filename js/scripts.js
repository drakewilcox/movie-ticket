/// Business Logic for Output


// business logic for Ticket

function MovieTicket(film, time, age) {
  this.normalPrice = 10
  this.film = film,
  this.time = time,
  this.age = age;
}
MovieTicket.prototype.update = function(name,time,age)  {
  this.name = name;
  this.time = time;
  this.age = age;
};
MovieTicket.prototype.getPrice = function() {
  var discount = 0 
  if (this.age === "minor")  {
    discount += 5;
  } else if (this.age === "senior"){
    discount += 1;
  }
  if(this.time === "matinee"){
    discount += 1
  }
  if(this.film === "rerun") {
    discount += 2
  }
  if(this.film === "classic") {
    discount += 3
  }
  return this.normalPrice - discount;
};

function makeTicket() {
  var film = $("#film").val();
  var time = $("#time").val();
  var age = $("#age").val();
  ticket.update(film, time, age);

  var ticketPrice = ticket.getPrice();
  $("#output").text('Your Ticket Price: $' + ticketPrice + '.00');
  $("#box").show();
}
// USER INTERFACE LOGIC:
var ticket = new MovieTicket();

$(document).ready(function()  {
  $("form#movies").submit(function(event) {
    event.preventDefault();
    makeTicket();
  });
});
