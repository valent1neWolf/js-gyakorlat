//összeköt kettő array-t, eggyé
//az eredeti array-k nem változnak
function nonMutatingConcat(original, attach) {
    // Only change code below this line
  let third = original.concat(attach);
  return third;
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  console.log(nonMutatingConcat(first, second));
  console.log(first);
  console.log(second);