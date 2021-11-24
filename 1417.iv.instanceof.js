function myInstanceof(target, origin) {
  const proto = target.__proto__;
  if (proto) {
    if (origin.prototype === proto) {
      return true;
    } else {
      return myInstanceof(proto, origin);
    }
  } else {
    return false;
  }
}

function instanceOf(targer, proto) {
  const _proto = target.__proto__;
  if (_proto) {
    if (_proto.prototype === proto) {
      return true;
    } else {
      return instanceOf(target, _proto);
    }
  } else {
    return false;
  }
}
