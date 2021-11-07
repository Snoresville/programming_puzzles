/*
    Given a set of numbers, 
    determine if a subset can be created
    such that the sum of the elements equals a target value
*/
var global_array = [1, 2, 3, 4, 5];
var global_target_value = 11;
var debug = true

function SubsetSum(set_array, target_value, search_index = 0){
    // Base Case
    if(target_value == 0) return true;
    if(search_index >= set_array.length && target_value != 0) return false;

    // Debug
    if(debug){
        console.log("Current Sum:", target_value);
        console.log("Exploring Integer:", set_array[search_index])
        console.log("--");
    }

    // Recursion
    let current_value = set_array[search_index];
    return SubsetSum(set_array, target_value - current_value, search_index + 1) || SubsetSum(set_array, target_value, search_index + 1);
}

function main(){
    console.log(SubsetSum(global_array, global_target_value));
}
main();