/**
 * 4. default parameter
 */

const print = function(strs, end='\n') {
    console.log(strs.join(end))
}

print(['Always', 'width','me']);
print(['Always', 'width','me'], ' ');