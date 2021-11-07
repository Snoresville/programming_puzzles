/*
    Given a set of numbers, 
    determine if two subsets can be created
    such that the sum of the elements in one subset equals another
*/
var global_array = [1, 2, 3, 4];
var debug = true

function SubsetPartition(){
    let total = 0
    for(let i = 0; i < global_array.length; i++){
        total += global_array[i];
    }
    return SubsetPartitionRecursion(total);
}

function SubsetPartitionRecursion(partition_1_sum, partition_2_sum = 0, search_index = 0){
    // Debug
    if(debug){
        console.log("{", partition_1_sum, "} = {", partition_2_sum, "}");
        console.log("Exploring Integer:", global_array[search_index] || "none")
        console.log("--");
    }

    // Base Case
    if(partition_1_sum == partition_2_sum) return true;
    if(search_index >= global_array.length && partition_1_sum != partition_2_sum) return false;

    // Recursion
    let current_value = global_array[search_index];
    return SubsetPartitionRecursion(partition_1_sum - current_value, partition_2_sum + current_value, search_index + 1) || SubsetPartitionRecursion(partition_1_sum, partition_2_sum, search_index + 1);
}

function main(){
    console.log(SubsetPartition());
}
main();