var kittens = [] //define your array here

// Add your functions and code here

kittens = [ "Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  return kittens.push('Ralph');
}

function destructivelyPrependKitten(name){
  return kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  kittens.concat("Broom")
  return kittens
}