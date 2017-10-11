function justInvoke(someFunction) {
  return someFunction();
}

function setThisWithCall(someFunction, name) {
  return someFunction.call(name);
}

function setThisWithApply(someFunction, name) {
  return someFunction.apply(name);
}

function returnNewFunctionOf(functionToBeCopied, name) {
  return functionToBeCopied.bind(name);
}
