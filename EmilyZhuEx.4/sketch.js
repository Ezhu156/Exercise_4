function setup() {
  createCanvas(600, 700);
  background(0);

}

function draw() {
  //legs
  for (var l = 240; l <= 340; l += 100) {
    var y = 425
    noStroke();
    fill(255, 165, 0);
    rect(l, y, 25, 75);
  }

  //top horn
  noStroke();
  fill(255, 246, 215);
  triangle(292, 150, 302, 100, 312, 150);

  //left horn
  noStroke();
  fill(255, 246, 215);
  triangle(252, 180, 258, 120, 272, 170);

  //right horn
  noStroke();
  fill(255, 246, 215);
  triangle(332, 170, 347, 120, 352, 180);

  //left arm
  stroke(255, 151, 148);
  strokeWeight(20);
  noFill();
  arc(390, 370, 67, 200, 0, PI / 2, OPEN);

  //right arm
  stroke(255, 151, 148);
  strokeWeight(20);
  noFill();
  arc(210, 370, 67, 200, PI / 2, PI, OPEN);

  // Body
  noStroke();
  fill(215, 193, 255);
  ellipse(300, 300, 300, 300);

  // Left and right eyes
  for (var e = 220; e <= 380; e += 160) {
    var y = 250;
    noStroke();
    fill(255);
    ellipse(e, y, 40, 40);
  }

  // Left and right pupils
  for (var p = 220; p <= 380; p += 160) {
    var y = 257;
    noStroke();
    fill(0, 0, 255);
    ellipse(p, y, 20, 20);
  }

  //one eye
  noStroke();
  fill(255);
  ellipse(300, 250, 100, 120);

  // one eye pupil   
  // quad(330, 250, 300, 280, 280, 250, 300, 220);
  noStroke();
  fill(0, 0, 255);
  quad(332, 250, 300, 290, 267, 250, 300, 210);

  // Mouth
  noStroke();
  fill(0);
  rect(231, 340, 141, 75);

  //top teeth
  for (var t = 247; t <= 337; t += 30) {
    var y = 340;
    noStroke();
    fill(255);
    triangle(t, y, t + 10, y + 25, t + 20, y)
  }

  //bottom teeth
  for (var t = 232; t <= 352; t += 30) {
    var y = 415;
    noStroke();
    fill(255);
    triangle(t, y, t + 10, y - 25, t + 20, y)
  }
  // feet
  for (var f = 270; f <= 370; f += 100) {
    var y = 500;
    noStroke();
    fill(136, 236, 155);
    quad(f, y, f - 35, y, f - 45, y + 30, f + 10, y + 30);
  }

}