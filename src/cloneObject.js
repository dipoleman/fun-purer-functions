function cloneObject(targetObj, sourceObj) {
  for (const key in sourceObj) {
    targetObj[key] = sourceObj[key];
  }

  return targetObj;
}

module.exports = cloneObject;
