const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  return kitten.push(name);
}

function destructivelyPrependKitten(name){
  return kitten.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kitten.pop();
}

function destructivelyRemoveFirsttKitten(){
  return kitten.shift();
}

function appendKitten(name){
  return [...kitten, name];
}