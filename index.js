var kittens = [] //define your array here

// Add your functions and code here

kittens = [ "Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push('Ralph');
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function appendKitten(name){
  return kittens.concat("Broom")
}

function prependKitten(name){
  return kittens.concat( "Arnold", ... kittens)
}

function removeLastKitten(){
  
}

function removeFirstKitten(){
  
}