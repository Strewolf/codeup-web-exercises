(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
    let area= Math.pow(circle.radius,2)*Math.PI // TODO: return the proper value
return area

        },

        logInfo: function (doRounding) {
            if(doRounding===true){
                return Math.round(this.getArea())
            }else{
                return this.getArea()
            }
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }
    };
    console.log("Area of a circle with radius: " + circle.radius + ", is: "+ this.getArea());
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();