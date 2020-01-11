var kittens = [] //define your array here

// Add your functions and code here

kittens = [ "Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  return kittens.push('Ralph');
}

function destructivelyPrependKitten(name){
  return kittens.unshift('Bob');
}