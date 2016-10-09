
function getMessage(a, b) {
  if (typeof a === 'boolean') {
    if (a === true) {
      return 'Я попал в ' + b;
    } else {
      return 'Я никуда не попал';
    }
  }

  if (typeof a === 'number') {
    return 'Я прыгнул на ' + a * 100 + ' сантиметров';
  }

  if (typeof a === 'array') {
    var numberOfSteps = 0;
    for (var i = 0; i < a.length; i++) {
      numberOfSteps = numberOfSteps + a[i];
    }
    return 'Я прошёл ' + numberOfSteps + ' шагов';
  }

  if (typeof a === 'array' && typeof b === 'array') {
    var distancePath = 0;
    for (var j = 0; j < a.length; j++) {
      distancePath = distancePath + (a[j] * b[j]);
    }
    return 'Я прошёл' + distancePath + 'метров';
  }

  return 'Переданы некорректные данные';
}
