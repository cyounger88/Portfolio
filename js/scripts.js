
function makeCoffee (sugar, milk) 
{
    var instructions = "Boil water";
    instructions += " pour into cup,";
    instructions += " add coffee granules,";
    instructions += " add " + sugar + " spoons of sugar,";
    instructions += " add " + milk + "% milk.";
    return instructions;

}

var car = {
    make : "volvo",
    color : "red", 
    speed : 200, 
    engine : {
        size: 2.0,
        make: "bmw",
        fuel: "gas",
        pistons: [ { maker: "BMW"}, {maker: "BMW2"} ]
    },
    drive: function() { return "Drive"; }
};

var shoppingList = [
    "Grape",
    "apple",
    "pear",
    {list: "paper"}
];

