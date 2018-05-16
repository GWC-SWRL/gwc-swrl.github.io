/* jquery.js */
/* jquery.velocity.js */

// Animate the SVG stroke to make it seem like it is writing itself.

$(".path-first")
  .velocity({ "stroke-dashoffset": 1800 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 2550, delay: 0 });


$(".path-second")
  .velocity({ "stroke-dashoffset": 300 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 700, delay: 700 });

$(".path-third")
  .velocity({ "stroke-dashoffset": 200 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 700, delay: 1750 });

$(".path-fourth")
  .velocity({ "stroke-dashoffset": 300 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 1000, delay: 1750 });

$(".path-fifth")
  .velocity({ "stroke-dashoffset": 800 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 1200, delay: 2550 });

$(".path-sixth")
  .velocity({ "stroke-dashoffset": 600 }, 0)
  .velocity({ "stroke-dashoffset": 0 }, { duration: 1000, delay: 3450 });

  