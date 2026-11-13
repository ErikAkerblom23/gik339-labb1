//console.log(footballTeam);
//console.log(floorballTeam);
//console.log(icehockeyTeam);
{
    let footballTeam = "Manchester United";
    const floorballTeam = "IBF Falun";
    var icehockeyTeam = "Leksands IF";

    //console.log(footballTeam);
    //console.log(floorballTeam);
    //console.log(icehockeyTeam);
}
//console.log(footballTeam);
//console.log(floorballTeam);
//console.log(icehockeyTeam);

/* Uppgift 2
1. Både let och const fungerar bara inom blocket, medans var fortfarande kan nås utanför blocket.
2. Innan blocket så kommer bara var att nås, men det kommer stå undefined eftersom det inte har fått något värde då. 
   I blocket så fungerar alla de tre lika bra där de skriver ut värdet på variablerna. 
   Efter blocket är det bara var som fungerar igen, men då får vi också fram värdet på varabeln. */


//const add = (num1, num2) => num1 + num2;
//console.log(add(20, 50));


/* Uppgift 3
1. Om jag hade använt let hade jag kunnat ändra hur funktionen i add vid ett senare tillfälle i koden.
2. function add(num1, num2) {
    return num1 + num2;
    }
    console.log(add(20, 50));
3. Return innebär att funktionen skickar tillbaka resultatet av det den gjort. 
   Det kan till exempel sparas i en variabel eller skrivas ut. */


const num1 = 0;
let arg1;
let sum = false;


function add(num1, num2) {
    console.log(num1 == 0);
    console.log(num2 === "0");
    console.log(num2 === 0);
    console.log(num1 == NaN);

    console.log(num1 ? "truthy" : "falsy");

    if ((num1 !== null || num2 !== null) &&
    (num1 !== undefined || num2 !== undefined) &&
    (typeof num1 === "number" && typeof num2 === "number"))
    {
        return num1 + num2;
    }
    else
    {
        console.log("Felaktigt värde");
    }

} 
console.log(add(sum, 1));
console.log(add("0", 3));
console.log(add(3, "num1"));
console.log(add(-5, num1));
console.log(add(arg1, 7));
//comsole.log(add()); // Blir error, add måste ha två argument. 
console.log(num1);
console.log(sum);

/* Uppgift 4
1. En tenary operator är en kortare version av en if-sats. 
   Skillnaden är att en ternary operator bara har två olika utfall, medans en if-sats kan ha flera olika utfall.
2. Skillnaden mellan == och === är att 2 likhetstecken jämför värdena, medans 3 likhetstecken jämför både värdena och datatyperna.
3. Jag använde mig av att skriva (num1 !== null || num2 !== null) för ifall ett tal är null så kommer denna if-sats att vara false och retunera else villkoret.  */


/* Uppgift 5
1. Parameter är i detta exempel num1 och num2 som används i funktionen. 
   En varieblen är en behållare som lagrar ett värde i programmet. 
   Ett argument är det faktiska värdet som skickas in i funktionen, t.ex add(20, 10) är 20 och 10 argumenten.
2. Jag får värdet 0 allra sist eftersom jag har tilldelat num1 värdet 0 och sen anropar den variabeln så blir outputen 0.
3. Jag börjar med att tilldela num1 = "0" och num2 = 3. Efter det så jämförs de värderna med argumenten som finns i funktionen, 
   console.log(num1 == 0);
   console.log(num2 === "0");
   console.log(num2 === 0);
   console.log(num1 == NaN);
   console.log(num1 ? "truthy" : "falsy");. 
   Svaren på arguemten är antingen true eller false. I detta fall så blev svaren:
   true
   false
   false
   false
   truthy
   Efter dessa argument så kommer vi fram till if-satsen där den kollar igenom värdena om de är null eller undefined. 
   if ((num1 !== null || num2 !== null) && // Här bryter den inte mot null eftersom inget av talen är null.
    (num1 !== undefined || num2 !== undefined) && // Här bryter den inte mot undefined eftersom inget av talen är undefined.
    (typeof num1 === "number" && typeof num2 === "number")) // Här bryter den mot typeof eftersom num1 är en string och inte ett nummer (number).
    {
        return num1 + num2;
    }
    else
    {
        console.log("Felaktigt värde");
    }
   Om det inte är något av dessa så returnerar den summan av de två värdena, men ifall den är antingen null eller undefined så kommer det ett felmeddelande.
   I detta exempel fick jag svaret Felaktigt värde eftersom "0" inte är ett nummer.
*/
