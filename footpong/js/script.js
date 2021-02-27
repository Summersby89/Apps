let fieldHeight = $(".field").height() - $(".ball").height();
let side = 0;
let goalCountRight = 0;
let goalCountLeft = 0;

// function goal () {
//   if (+$(".ball").css("top").slice(0, -2) >= fieldHeight / 2 - 100 && +$(".ball").css("top").slice(0, -2) <= fieldHeight / 2 + 100) {
//   goalCountLeft++
//   $(".football__scoreboard .left").text(goalCountLeft);
//   $(".goal-wrapper").toggleClass("active").toggle("scale");
//   }
//   if (+$(".ball").css("top").slice(0, -2) <= fieldHeight / 2 + 100 && +$(".ball").css("top").slice(0, -2) <= fieldHeight / 2 + 100) {

//   goalCountRight++
//   $(".football__scoreboard .right").text(goalCountRight);
//     $(".goal-wrapper").toggleClass("active").toggle("scale");
//   }
// }

$(".ball").on("click", function () {
  let randomY = Math.floor(Math.random() * Math.floor(fieldHeight));

  if (side == 0) {
    side = 1;
    $(this).animate(
      {
        left: $(".field").width() - $(".ball").width(),
        top: randomY,
      },
      800,
      function () {
        if (
          +$(".ball").css("top").slice(0, -2) >= fieldHeight / 2 - 100 &&
          +$(".ball").css("top").slice(0, -2) <= fieldHeight / 2 + 100
        ) {
          goalCountRight++;
          $(".football__scoreboard .right").text(goalCountRight);
          $(".goal-wrapper").toggleClass("active").toggle("scale");
        }
      }
    );
  } else {
    side = 0;

    $(this).animate(
      {
        left: 0,
        top: randomY,
      },
      800,
      function () {
        if (
          +$(".ball").css("top").slice(0, -2) >= fieldHeight / 2 - 100 &&
          +$(".ball").css("top").slice(0, -2) <= fieldHeight / 2 + 100
        ) {
          goalCountLeft++;
          $(".football__scoreboard .left").text(goalCountLeft);
          $(".goal-wrapper").toggleClass("active").toggle("scale");
        }
      }
    );
  }
});
