var Bee = function() {
  //this = Object.create(Bee.prototype);
  
  //inherit all of Grub's properties
  Grub.call(this);  

  
  this.age = 5;  //update the age property
  this.color = "yellow";  //update the color property
  this.job = "keep on growing"; //create a job property because Grub doesn't assign a job property

};

Bee.prototype = Object.create(Grub.prototype);  //creates a blank object that will fall back to Grub
Bee.prototype.constructor = Bee;  //Because the above line set Bee's prototype to a new empty object, we need to reassign the constructor property to Bee other wise it will fall thorugh to Grub



