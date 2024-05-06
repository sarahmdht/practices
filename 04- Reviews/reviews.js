function displayReviews() {
  let review1 = 5; // ex.: first person review
  let review2 = 3;
  let review3 = 1;
  let review4 = 2;
  let review5 = 5;
  let review6 = 2;
  let review7 = 2;
  let review8 = 5;
  let review9 = 5;
  let review10 = 1;
  let review11 = 4;
  let review12 = 1;
  let review13 = 3;
  let review14 = 5;
  let review15 = 4;

  let reviews_rating;
  // Add the Equation to calculate the averge rating for the 15 reviews
  let total = 0;

  // Summing up all the reviews
  total += review1;
  total += review2;
  total += review3;
  total += review4;
  total += review5;
  total += review6;
  total += review7;
  total += review8;
  total += review9;
  total += review10;
  total += review11;
  total += review12;
  total += review13;
  total += review14;
  total += review15;

  // Calculating the average
  reviews_rating = total / 15;

  // displaying the result rounded to integar value
  document.getElementById("result").innerHTML = parseInt(reviews_rating);
}
