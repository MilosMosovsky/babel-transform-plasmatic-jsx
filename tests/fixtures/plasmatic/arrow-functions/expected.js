var foo = function () {
  var _this = this;

  return function () {
    return Plasmatic.createElement(_this, null);
  };
};

var bar = function () {
  var _this2 = this;

  return function () {
    return Plasmatic.createElement(_this2.foo3, null);
  };
};
