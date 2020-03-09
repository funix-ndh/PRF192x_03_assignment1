noStroke();

// position of the car
var car1_x = 0;
var car1_y = 260;

var car2_x = 0;
var car2_y = car1_y + 100;

var car3_x = 0;
var car3_y = car2_y + 100;

var car1_speed_x = Math.floor(random(1, 5));
var car2_speed_x = Math.floor(random(1, 5));
var car3_speed_x = Math.floor(random(1, 5));

var car1_speed_y = Math.floor(random(-1, 2));
var car2_speed_y = Math.floor(random(-1, 2));
var car3_speed_y = Math.floor(random(-1, 2));

// rock position
var rock1_x = Math.floor(random(200, 600));
var rock1_y = Math.floor(random(200, 600));

var rock2_x = Math.floor(random(200, 600));
var rock2_y = Math.floor(random(200, 600));

var rock3_x = Math.floor(random(200, 600));
var rock3_y = Math.floor(random(200, 600));

// end line
var endLine_x = 700;

// car hit box
var car_hit_radius = 50;

void setup()
{
  size(800, 800);
  background(125);
};

draw = function () {
  background(151, 244, 247);

  drawSky();

  drawEndLine(endLine_x);

  drawRock(rock1_x, rock1_y);
  drawRock(rock2_x, rock2_y);
  drawRock(rock3_x, rock3_y);

  textSize(32);
  if (is_win(car1_x, endLine_x)) {
    fill(255, 0, 115);
    text("car pink win", 300, 100);
    return;
  } else if (is_win(car2_x, endLine_x)) {
    fill(0, 0, 204);
    text("car blue win", 300, 100);
    return;
  } else if (is_win(car3_x, endLine_x)) {
    fill(0, 179, 60);
    text("car green win", 300, 100);
    return;
  }

  // bound back y axis
  if (car1_y > 750 || car1_y < 150) {
    car1_speed_y *= -1;
  }
  if (car2_y > 750 || car2_y < 150) {
    car2_speed_y *= -1;
  }
  if (car3_y > 750 || car3_y < 150) {
    car3_speed_y *= -1;
  }

  var center_car1_x = get_center_car_x(car1_x, 100);
  var center_car2_x = get_center_car_x(car2_x, 50);
  var center_car3_x = get_center_car_x(car3_x, 75);

  if (!is_crash(center_car1_x, car1_y, rock1_x, rock1_y) &&
    !is_crash(center_car1_x, car1_y, rock2_x, rock2_y) &&
    !is_crash(center_car1_x, car1_y, rock3_x, rock3_y) &&
    !(is_crash(center_car1_x, car1_y, center_car2_x, car2_y) ||
      is_crash(center_car1_x, car1_y, center_car3_x, car3_y))) {
    car1_x += car1_speed_x;
    car1_y += car1_speed_y;
    drawCar(car1_x, car1_y, color(255, 0, 115), color(255, 255, 153), 100);
  }
  if (!is_crash(center_car2_x, car2_y, rock1_x, rock1_y) &&
    !is_crash(center_car2_x, car2_y, rock2_x, rock2_y) &&
    !is_crash(center_car2_x, car2_y, rock3_x, rock3_y) &&
    !(is_crash(center_car2_x, car2_y, center_car1_x, car1_y) ||
      is_crash(center_car2_x, car2_y, center_car3_x, car3_y))) {
    car2_x += car2_speed_x;
    car2_y += car2_speed_y;
    drawCar(car2_x, car2_y, color(0, 0, 204), color(255, 112, 77), 50);
  }
  if (!is_crash(center_car3_x, car3_y, rock1_x, rock1_y) &&
    !is_crash(center_car3_x, car3_y, rock2_x, rock2_y) &&
    !is_crash(center_car3_x, car3_y, rock3_x, rock3_y) &&
    !(is_crash(center_car3_x, car3_y, center_car1_x, car1_y) ||
      is_crash(center_car3_x, car3_y, center_car2_x, car2_y))) {
    car3_x += car3_speed_x;
    car3_y += car3_speed_y;
    drawCar(car3_x, car3_y, color(0, 179, 60), color(121, 121, 210), 75);
  }
};

drawRock = function (x, y) {
  fill(95, 32, 32);
  ellipse(x, y, 50, 50);
}

drawSky = function () {
  // cloud
  fill(240, 240, 245);
  ellipse(100, 50, 150, 50);
  ellipse(100, 50, 75, 75);

  ellipse(400, 50, 150, 50);
  ellipse(400, 50, 75, 75);

  ellipse(700, 50, 150, 50);
  ellipse(700, 50, 75, 75);

  // sun
  fill(255, 0, 0);
  ellipse(800, 0, 200, 200);
};

drawEndLine = function (x) {
  fill(0, 0, 0);
  rect(x, 100, 50, 50);
  fill(255, 255, 255);
  rect(x, 150, 50, 50);
  fill(0, 0, 0);
  fill(0, 0, 0);
  rect(x, 200, 50, 50);
  fill(255, 255, 255);
  rect(x, 250, 50, 50);
  fill(0, 0, 0);
  rect(x, 300, 50, 50);
  fill(255, 255, 255);
  rect(x, 350, 50, 50);
  fill(0, 0, 0);
  rect(x, 400, 50, 50);
  fill(255, 255, 255);
  rect(x, 450, 50, 50);
  fill(0, 0, 0);
  rect(x, 500, 50, 50);
  fill(255, 255, 255);
  rect(x, 550, 50, 50);
  fill(0, 0, 0);
  rect(x, 600, 50, 50);
  fill(255, 255, 255);
  rect(x, 650, 50, 50);
  fill(0, 0, 0);
  rect(x, 700, 50, 50);
  fill(255, 255, 255);
  rect(x, 750, 50, 50);
}

drawCar = function (x, y, colorBody, colorWheels, w) {
  // draw the car body
  fill(colorBody);
  rect(x, y, w, w * 0.2);
  rect(x + w * 0.15, y - w * 0.2, w * 0.7, w * 0.4);

  // draw the wheels
  fill(colorWheels);
  ellipse(x + w * 0.25, y + w * 0.2, w * 0.24, w * 0.24);
  ellipse(x + w * 0.75, y + w * 0.2, w * 0.24, w * 0.24);
};

get_center_car_x = function (x, w) {
  return x + w / 2;
}

is_crash = function (x1, y1, x2, y2) {
  var x = Math.pow(x2 - x1, 2);
  var y = Math.pow(y2 - y1, 2);
  return Math.sqrt(x + y) <= car_hit_radius;
}

is_win = function (x, end) {
  return x >= end;
}
