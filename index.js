console.log("html and js are connected");

function joinElements(array, joinString) {
  let result = "";
  for (let i = 0; i < array.length-1; i++) {
    result += array[i] + joinString;
  }
  return result + array[array.length-1];
}

console.log(joinElements(["h", "llo viol", "t"], "e"));
