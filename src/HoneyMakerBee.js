var HoneyMakerBee = function() {
  //this = Object.create(HoneyMakerBee.prototype);

  Bee.call(this);  //inherit all the Bee properties

  this.age = 10;
  this.job = "make honey";
  this.honeyPot =0;
  
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot--;
};
