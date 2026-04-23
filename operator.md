mongodb operators
to use any operatore use dollar $ symbol
# comparison operators
$gt, $lt, $gte, $lte, $ne
gt -> greater than
gte -> greater than or equal
lt -> less than 
lte -> less than or equal
ne -> not equal

# logical operators
$or $and $not $nor
$or -> atleast one condition should match
$and -> all conditions should match
$not -> reverse the condition
$nor -> none of the conditions should match

# array operators
$push $pull $pop $addToSet $in $nin 
push -> add item to array
pull ->remove item from array
addToSet-> add only if value does not exist
pop-> remove the first or last element from array
in -> match any value from array
nin -> not in list

# Search Operator
$regex->used fro search

# Existance Operator

$exists->check the feild exists or not
eg:{
    location:{
        exists:true
    }
}

# update operator
$set -> replace or update the value
$unset ->remove the field
$inc -> increment 