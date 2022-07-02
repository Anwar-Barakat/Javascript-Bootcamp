/*
  Higher order function (Reduce)
*/

let nums = [10, 20, 30, 40, 50];

let add = nums.reduce(function(accumlator, current_value, current_index, source_array) {
    console.log(`Accumlator is                    => ${accumlator}`);
    console.log(`Current Element is               => ${current_value}`);
    console.log(`Current Element index is         => ${current_index}`);
    console.log(`Array is                         => ${source_array}`);
    console.log(`Accumlator + Current Element is  => ${accumlator + current_value}`);
    console.log(`###################################`);
    return accumlator + current_value;
});
console.log(add);

/*
  Accumlator is                    => 10
  Current Element is               => 20
  Current Element index is         => 1
  Array is                         => 10,20,30,40,50
  Accumlator + Current Element is  => 30
  ###################################
  Accumlator is                    => 30
  Current Element is               => 30
  Current Element index is         => 2
  Array is                         => 10,20,30,40,50
  Accumlator + Current Element is  => 60
  ###################################
  Accumlator is                    => 60
  Current Element is               => 40
  Current Element index is         => 3
  Array is                         => 10,20,30,40,50
  Accumlator + Current Element is  => 100
  ###################################
  Accumlator is                    => 100
  Current Element is               => 50
  Current Element index is         => 4
  Array is                         => 10,20,30,40,50
  Accumlator + Current Element is  => 150
  ###################################
  150
*/

add = nums.reduce(function(accumlator, current_value, current_index, source_array) {
    console.log(`Accumlator is                    => ${accumlator}`);
    console.log(`Current Element is               => ${current_value}`);
    console.log(`Current Element index is         => ${current_index}`);
    console.log(`Array is                         => ${source_array}`);
    console.log(`Accumlator + Current Element is  => ${accumlator + current_value}`);
    console.log(`###################################`);
    return accumlator + current_value;
}, 50);
console.log(add);

/*
  Accumlator is                    => 50
  Current Element is               => 10
  Current Element index is         => 0
  Array is                         => 10,20,30,40,50
  Accumlator + Current Element is  => 60
  ###################################
  Accumlator is                    => 60
  Current Element is               => 20
  Current Element index is         => 1
  Array is                         => 10,20,30,40,50
  Accumlator + Current Element is  => 80
  ###################################
  Accumlator is                    => 80
  Current Element is               => 30
  Current Element index is         => 2
  Array is                         => 10,20,30,40,50
  Accumlator + Current Element is  => 110
  ###################################
  Accumlator is                    => 110
  Current Element is               => 40
  Current Element index is         => 3
  Array is                         => 10,20,30,40,50
  Accumlator + Current Element is  => 150
  ###################################
  Accumlator is                    => 150
  Current Element is               => 50
  Current Element index is         => 4
  Array is                         => 10,20,30,40,50
  Accumlator + Current Element is  => 200
  ###################################
  200
*/