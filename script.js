//Creating an object using object literal
/* 
   Used when you need to create a single object.
   Ideal for cases where you don't need to create multiple instances of an object.
*/
let object = {
    name : "Harshal",
    age : 27,
    gender : "male",
    switch : function(){
        console.log("ON");
    }
}
console.log(object);


//Creating an object using object constructor
/* 
 Constructors are useful when you need to create multiple instances of similar objects (e.g., multiple cars with different makes and models).
*/
let constructorObject = new Object();
constructorObject.name = "Harshal";
constructorObject.age = 27;
constructorObject.gender = "male";
constructorObject.switch = function(status){
    return "On";
}
console.log(constructorObject);


//Accessing properties of object using dot notation
/* 
 Syntax :- objectName.propertyName
 1.The property name must follow JavaScript identifier naming rules (e.g., no spaces, cannot start with a number, no special characters except _ and $).
 2.Dot notation doesn't allow you to use variables or expressions to access properties.
*/
let property = object.name;
console.log(property);

//Accessing properties of object using bracket notation
/*
Syntax :- objectName["propertyName"];
1.Bracket notation allows the use of property names that are not valid identifiers (e.g., property names with spaces or special characters).
2.Supports dynamic property names: You can use variables or expressions inside the brackets to access or set properties.
3.Handles reserved words and special characters: If the property name is a reserved word or includes characters like spaces, you must use bracket notation.
*/
let property_1 = constructorObject["age"];
console.log(property_1);


//Update a property
object.age = 26;
//Add a new property
object.style = "Versatile";
//Deleting property from an object
delete object.switch;

console.log(object); //Age is updated, style property is added and switch property is deleted


//Checking if a property exists or not in an object using in operator
/*
Syntax :- propertyName in objectName
1.Checks both own and inherited properties: The in operator returns true if the property exists in the object, whether it is a direct property of the object or an inherited one (from the prototype chain).
2.Works on any property in the prototype chain: If a property is defined somewhere in the object's prototype chain, in will return true.
*/
let checkProperty = ("name" in object);
console.log(checkProperty);//It will return boolean value

//Checking if a property exists or not in an object using hasOwnProperty() method
/* 
Syntax:- objectName.hasOwnProperty("propertyName");
1.Checks only own properties: hasOwnProperty returns true only if the property exists directly on the object itself, not if it is inherited from the prototype chain.
2.Does not check inherited properties: If a property exists in the prototype chain but not directly on the object, hasOwnProperty will return false.
*/
let checkedProperty = constructorObject.hasOwnProperty("name");
console.log(checkedProperty);


//Iterate over properties of an object using for...in loop
// It iterates over all enumerable properties, including those inherited from the prototype.
for(key in object){
    console.log(key + ": " + object[key]);
}


//Objects can have functions stored as properties
object.greet = function(){
    console.log("Hii my name is: " + object.name);
}
object.greet();


//To create shallow copy of an object using object.assign
/*
Syntax :- Object.assign(target,source);
1.Returns the target object (the first parameter).
2.Modifies the target object in place.
3.If null or undefined is passed as a source, they are ignored
4.When used with arrays, Object.assign() copies array elements as properties, not as array elements.
*/
let shallowCopy = Object.assign({},object);
console.log(shallowCopy);


//Creating shallow copy using ...spread operator
/*
Syntax :- {...objectName1, ...objectName2};
1.Returns a new object without modifying the original object(s)
2.Attempting to spread null or undefined directly throws an error
3.The spread operator correctly spreads array elements into a new array
*/
let shallowCopy_1 = {...object};
console.log(shallowCopy_1);
/*
Both Object.assign() and the spread operator can merge multiple objects into one. However, Object.assign() requires the first argument to be the target object, which will be modified. The spread operator directly merges into a new object.
*/


//Extracting multiple properties from an object at once using destructuring
let {name,age} = object;
console.log(name);
console.log(age);


//Combine two or more objects using Object.assign()
//Syntax:- Object.assign({target},objectName,{key:value})
let newObject_1 = Object.assign({},object, {job:"Engineer"});
console.log(newObject_1);

//Combine two or more objects using spread operator
//Syntax:- {...objectName, key:value};
let newObject_2 = {...object,job:"Engineer"};
console.log(newObject_2);


//Retrieve the keys of an object as arrays.
//Syntax:- Object.keys(objectName);
let ObjectKeys = Object.keys(object);
console.log(ObjectKeys);

//Retrieve the values of an object as arrays
//Syntax:- Object.values(objectName);
let ObjectValues = Object.values(object);
console.log(ObjectValues);

//Retrieve the key-value pair of an object as arrays
//Syntax:- Object.entries(objectName);
let ObjectPairs = Object.entries(object);
console.log(ObjectPairs);


//Object.freeze(): Prevents modification of existing properties and addition of new properties.
//Syntax:- Object.freeze(objectName);

//Object.seal(): Allows modification of existing properties but prevents addition of new properties
//Syntax:- Object.seal(objectName);