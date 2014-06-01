// CUSTOM JQUERY PLUGIN

$.fn.unBlur = function (blur, interval) {
  //store reference to this
  var self = this;
  //set counter to either user input or 10
  var blurCount = blur || 10;
  //call function to reduce blur (or apply blur initially)
  var blur = function () {
    if (blurCount >= 0) {
      //update the css blur effect
      self.css("-webkit-filter","blur("+ blurCount + "px)");
      self.css("-moz-filter","blur("+ blurCount + "px)");
      self.css("-o-filter","blur("+ blurCount + "px)");
      self.css("-ms-filter","blur("+ blurCount + "px)");
      self.css("filter","blur("+ blurCount + "px)");
      //decrease the blur counter by 1
      blurCount--;
      //start the function again in 100ms
      var blurTimer = window.setTimeout(blur, interval || 100);
    }
  };

  blur();
};