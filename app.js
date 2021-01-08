// chap # 1
// 1.
// alert("Hello! Welcome to My site....")

// 2.
// alert("Error! Please a valid password.")

// 3.
// alert("Welcome to js land.... \n Happy coding!")

// 4.
// alert("Welcome to js land.")
// alert("Happy coding! \n prevent this  page from creating additiniol dialogs.")


// chap # 2
// 1.
// var userName

// 2.
// var myName = "Anas Aijaz"

// 3.
// var message = "Hello World"
// alert(message)


// 4.
// alert("Anas Aijaz")
// alert("20 yrs")
// alert("Certified Web Developer.")

// 5.
// alert("pizza \npizz \npiz \npi \np")

// 6.
// var email = " example@example.com"
// alert("my email address is"+email)

// 7.
// var book = "I am trying to learn from a book A smarter \n way to learn javascript."
// alert(book)

// 8.
// document.write ("Yah! I can write HTML content through java script.")

// 9.
// var store = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(store)


// chap # 3

// 1.
// var age = 20
// alert("My age is" + " " + age + " " + "yrs")

// 2.
// var visit = "you have visited this site 20 times."
// alert(visit)

// 3.
// var birthYear = 2000
// document.write("My birth year is" + " " + birthYear)

// 4.
// var visitor = prompt("your name");
// var product = prompt("enter product");
// var quantity = prompt("quantity");
// document.write("<b>"+visitor+"</b>" +" " +"ordered" + " " + quantity+product+ " " + "on xyz clothing store.");

// chap # 4

// 1.

// var var1 = "value1" , var2 = "value2" , var3 = "value3" ;

// 2.
// [legal variables]

// var myName = "abc", age = "20yrs", _123abc = 1234, $$$$ = 555 ;

// [illegal variables]

// var 123 = "abc", 55age = "20yrs", myage = 1234, 444 = 555 ;

// 3.

// document.write("<h2>"+"Rules for naming JS variables"+"</h2>" +"\n" );
// document.write( "Variable names can only contain Alphabets, Numbers, $ and _. For example $my_1stVariable" +"<br>")
// document.write("Variables must begin with a letter, $ or_. For example $name, _name or name" +"<br>")
// document.write(" Variable names are case sensitive" +"<br>")
// document.write(" Variable names should not be JS keyword" +"<br>")

// chap # 5

// 1.

// var a = +prompt("enter first value")
// var b = +prompt("enter second value")
// var c = a+b
// document.write("sum of" + " " + a +" " + "and" + " " + b + " " + "is" + " " + c)

// 2.

// var a = +prompt("enter first value")
// var b = +prompt("enter second value")
// var c = a-b
// document.write("sum of" + " " + a +" " + "and" + " " + b + " " + "is" + " " + c)

// var a = +prompt("enter first value")
// var b = +prompt("enter second value")
// var c = a*b
// document.write("sum of" + " " + a +" " + "and" + " " + b + " " + "is" + " " + c)

// var a = +prompt("enter first value")
// var b = +prompt("enter second value")
// var c = a/b
// document.write("sum of" + " " + a +" " + "and" + " " + b + " " + "is" + " " + c)

// var a = +prompt("enter first value")
// var b = +prompt("enter second value")
// var c = a%b
// document.write("sum of" + " " + a +" " + "and" + " " + b + " " + "is" + " " + c)

// 3.

// var a = +prompt("enter value");
// document.write("initial value :" + " " + a +"<br>" );
// a = ++a
// document.write("value after increment is :" + " " + a + "<br>");
// a = a++ + a
// document.write("value after addition is" + " " + a +"<br>" );
// a = --a
// document.write("value after decrement is :" + " " + a + "<br>");
// a = a%a
// document.write("remainder :" + a)

// 4.

// var a = +prompt("enter ticket price")
// var b = +prompt("tickets to buy")
// var c = a*b
// document.write("Total cost to buy" +" "+ b + " " + " tickets of a movie is" +" "+ c)

// 5.

// var a = prompt("enter a number")
// for(i=1; i<=10;i++){
//     var b = a*i
//     document.write(a + "x" + i + "=" +b + "<br>")
// }

// 6.
// var F = prompt("enter temp in Farenhite")
// var C = (F-32)*5/9
// document.write( F + "<sup>o</sup>" + "F" + " " + "is" + " " + C + "<sup>o</sup>" + "C" +"<br>" )

// var C = prompt("enter temp in celcius")
// var F = (C*9/5)+32
// document.write( C + "<sup>o</sup>" + "C" + " " + "is" + " " + F + "<sup>o</sup>" + "F")

// 7.

// var a = (650)
// var b = +prompt("enter quantity")
// var c = (100)
// var d = +prompt("enter quantity" +"<br>")
// var e = (100)
// document.write("<h1>" + "Shopping Cart" + "</h1>" + "<br>")
// document.write("price of item 1 is" + " "+ a + "<br>")
// document.write("quantity of item 1 is" + " "+ b + "<br>")
// document.write("price of item 2 is" + " "+ c + "<br>")
// document.write("quantity of item 2 is" + " "+ d + "<br>")
// document.write("Total price is"+" "+((a*b)+(c*d)+e ))

// 8.

// var a = 980
// var b = 804
// var c = b*100/a
// document.write("<h1>"+"Marks Sheet"+ "</h1>" +"<br>")
// document.write("Total Marks :" + a+"<br>")
// document.write("Marks Obtained :" + b+"<br>")
// document.write("Percentage Obtained :" + c+"<br>")

// 9.
// var a = 10
// var b = 25
// var pkrU = 104.80
// var pkrS = 28
// document.write("<h1>" + "Currency in PKR" + "</h1>")
// document.write("Total Curency in PKR is:" + ((a*pkrU)+(b*pkrS)) )

// 10.

// var anyNum = +prompt("Enter any num")
// document.write("sum of "+anyNum+" and 5 is = " + (anyNum+5) +"<br>", "product of "+anyNum+" and 10 is = " + (anyNum*10) +"<br>", "division of "+anyNum+" and 2 is = " + (anyNum/2))

// 11.

// var currentYear = prompt("Enter current year")
// var birthYear = prompt("Enter your birth year")
// var age = currentYear-birthYear
// document.write("Current year " + currentYear + "<br>")
// document.write("Birth year " + birthYear + "<br>")
// document.write("Your age is " + age)

// 12.
// var r = prompt("Enter radius")
// var c = 2*(3.142)*r
// var a = (3.142)*(r*r)
// document.write("The radius is = "+r +"<br>")
// document.write("The circumference is = "+c +"<br>")
// document.write("Area of the circle is = "+a)

// 13.

// var snack = prompt("Enter your favourit snack")
// var currentAge = prompt("Enter your curent age")
// var maxAge = prompt("Enter you maximum age expected")
// var needPerDay = prompt("Enter amount of snack needed per day")
// var ageInDay = ((maxAge-currentAge)*365)
// document.write("Favourite snack " + "<b>" + snack + "</b>" + "<br>")
// document.write("Current age "+ "<b>" + currentAge + "</b>" +"<br>")
// document.write("Estimated age " + "<b>" + ageInDay + "</b>" + " days" +"<br>")
// document.write("Amount of snacks per day : " + "<b>" + needPerDay  + "</b>" + "<br>")
// document.write("You need " + "<b>" + (needPerDay*ageInDay) + "</b>" + "<b>" + snack + "</b>" + " until you live" + "<b>" + maxAge + "</b>" + " years")

// Chap # 6 to 9

// 1.
// var a = prompt("Enter any num")
// document.write("The value of a is " + a + "<br> The value of ++a is " + ++a +"<br> Now the value of a is" + a + "<br> The value of a++ is" + a++ + "<br> Now the value of a is" + a +  "<br> The value of --a is" + --a + '<br> Now the value of a is' + a +  "<br> The value of a-- is" + a-- +  "<br> Now the value of a is" +a)

// 2.
// var a = 2, b = 1 ;
// var result = --a - --b + ++b + b-- ;
// document.write("Reasul of following calculation is: " + result)

// 3.

// var a = prompt("Please enter your name.")
// var b = alert ("Hello! " + a + " " + "Wellcome to our site.")

// 4.

// var table = prompt("Enter a number to print the table");
// for(i = 1; i <= 10; i++)
//      if(table !== ""){
//         document.write(table + "x" + i + "=" + i*table +"<br/>")

//        }
//       else{
//         document.write(5 + "x" + i + "=" + i*5 +"<br/>")

//       } 

// 5.

// var sub1Name = prompt("Enter first subject name");
// var sub2Name = prompt("Enter second subject name");
// var sub3Name = prompt("Enter third subject name");
// var totalMarks = 100;
// var totalMarksOfAllSub = totalMarks * 3;
// var sub1Marks = +prompt("Enter" + " " + sub1Name + " " + "marks");
// var sub2Marks = +prompt("Enter" + " " + sub2Name + " " + "marks");
// var sub3Marks = +prompt("Enter" + " " + sub3Name + " " + "marks");
// var grandTotal = sub1Marks + sub2Marks + sub3Marks;
// var percentage = grandTotal * 100 / totalMarksOfAllSub
// document.write("Your total marks of each subject are" + " " + totalMarks + "<br />");
// document.write("Your total marks of all subjects are" + " " + totalMarksOfAllSub + "<br />");
// document.write("You obtained" + " " + grandTotal + " " + "Marks in all subjects" + "<br />");
// document.write("Your Percentage is" + " " + percentage +" %");


// Chap # 9 to 11


// 1.

// var cityName = prompt("Enter your city name");
// cityName = cityName.toUpperCase()
// if(cityName === "KARACHI"){
//         alert("Welcome to city of lights")
// }


// 2.

// var gender = prompt("Enter your Gender");
// gender = gender.toUpperCase();
// if(gender === "MALE"){
//         alert("Good Morning Sir");
// }
// else{
//         alert ("Good Morning Ma'am");
// }

// 3.

// var trafficLights = prompt("Enter color of road traffic light")
// trafficLights = trafficLights.toUpperCase();
// if(trafficLights === "RED"){
//         alert("Must Stop");
// }
// else if(trafficLights === "YELLOW"){
//         alert("Ready to move");
// }
// else if(trafficLights === "GREEN"){
//         alert("Move now")
// }

// 4.

// var remainingFuel = prompt("Enter remaining fuel(in litres)");
// if(remainingFuel <= 0.25){
//         alert("Please refill the fuel in your car");
// }
// else{
//     alert("No need to refill")
// }

// 5.

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Output is true


// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//Output is false


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//Output: Condition 2 AND 4 is true


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//Output : The cost equals


// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//Output: True


// if("car" < "cat"){
//         alert("car is smaller than cat");
//         }
//Output : Car is smaller than cat

// 6.

// var marksObtained = +prompt("Enter Obtained marks");
// var marksTotal = +prompt("Enter Total marks");
// var Percentage = marksObtained * 100 / marksTotal;
// var per = Percentage.toFixed(2)
// if(marksTotal > marksObtained){
//         document.write("<h2>Marks Sheet</h2>")
//         document.write("Total Marks" + " " + ":" + " " + marksTotal + "<br />");
//         document.write("Obtained Marks" + " " + ":" + " " + marksObtained + "<br />");
//         document.write("Percentage" + " " + ":" + " " + per + "<br />");

//         if(per >= 80 && per <=100){
//                 document.write("Grade" + " " + ":" + "A<sup>+</sup>" + "<br />")
//                 document.write("Remarks" + " " + ":" + "Excellent" + "<br />");
//         }
//         else if(per >= 70 && per <=80){
//                 document.write("Grade" + " " + ":" + "A" + "<br />")
//                 document.write("Remarks" + " " + ":" + "Good" + "<br />");
//         }
//         else if(per >= 60 && per <=70){
//                 document.write("Grade" + " " + ":" + "B" + "<br />")
//                 document.write("Remarks" + " " + ":" + "You need to improve" + "<br />");
//         }
//         else if(per < 60){
//                 document.write("Grade" + " " + ":" + "Fail" + "<br />")
//                 document.write("Remarks" + " " + ":" + "Better luck next time" + "<br />");
//         }
// } 
// else{
//         alert("Enter correct marks")
// }

// 7.

// var guess = +prompt("Guess the secret number");
// var secretNum = 44;
// if(guess === secretNum){
//         alert("“Bingo! Correct answer")
// }
// else if(guess === secretNum + 1 || guess === secretNum - 1 ){
//         alert("Close enough to the correct answer")
// }
// else{
//         alert("Sorry")
// }

// 8.

// var divisible = prompt("Enter a number");
// if(divisible % 3 === 0){
//         alert("It is divisible by three")
// }
// else{
//         alert("It is not divisible by three")
// }

// 9.

// var divisible = prompt("Enter a number");
// if(divisible % 3 === 0){
//         alert("It is divisible by three")
// }
// else{
//         alert("It is not divisible by three")
// }

// 10.

// var enterNum = prompt("Enter number to check even or odd");
// if(enterNum % 2 === 0){
//         alert("It is Even Number")
// }
// else{
//      alert("It is Odd Number")   
// }

// 11.

// var temperature = prompt("Enter Temperature");
// if(temperature >= 40) {
//         alert("It is too hot outside.")
// }  
// else if(temperature >= 30 && temperature < 40) {
//         alert("The Weather today is Normal.")
// }
// else if(temperature >= 20 && temperature < 30) {
//         alert("Today’s Weather is cool.”")
// }    
// else if(temperature >=10 && temperature < 20){
//         alert("WOW! Today’s weather is so Cool.")
// }      

// 12.

// var firstNum = +prompt("Enter First Number");
// var operator = prompt("Enter Operator");
// var secondNum = +prompt("Enter Second Number");
// if(operator === "+"){
//         alert(firstNum + secondNum)
// }
// else if(operator === "-"){
//         alert(firstNum - secondNum)
// }
// else if(operator === "*"){
//         alert(firstNum * secondNum)
// }
// else if(operator === "/"){
//         alert(firstNum / secondNum)
// }
// else if(operator === "%"){
//         alert(firstNum % secondNum)
// }

// Chap # 12 to 13

// 1.

// var charact = prompt("Enter a string")
// if(charact === charact.toUpperCase()){
//         alert("Upper Case String")
// }
// else{
//        alert("Lower Case String")
// }

// 2.

// var firstint = +prompt("Enter first number")
// var secondint = +prompt("Enter second number")
// if(firstint > secondint){
//         alert("First number is larger")
// }
// else if(firstint === secondint){
//         alert("Both are equal")
// }
// else{
//         alert("Second number is larger")
// }

// 3.

// var x = +prompt("Enter number")
// if(x > 0){
//         alert("Positive number")
// }
// else if(x === 0){
//         alert("Zero")
// }
// else{
//         alert("Negative number")
// }

// 4.

// var character = prompt("Enter a single character");
// if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
//         alert("True")
// }
// else{
//         alert("False")
// }

// 5.

// var storePass = "12345";
// var enterPass = prompt("Enter your Password");
// if(enterPass !== ""){
//         if(enterPass === storePass){
//                 alert("“Correct! The password you entered matches the original password")
//         }
//         else{
//                 alert("Incorrect password")
//         }
// }
// else{
//         alert("Please enter your password")
// }

// 6.

// var greet = "";
// var hour = 13;
// if (hour < 18) {
// greet = alert("Good day");
// }
// else{
// greet = alert("Good evening");
// }

// 7.

// var greeting = "";
// var hour = prompt("Enter hours");
// if (hour <= 3 && hour >0) {
// greeting = "Good Night";
// alert(greeting)
// }
// else if(hour >= 4 && hour <= 11){
// greeting = "Good Morning"
// alert(greeting)        
// }
// else if(hour >= 12 && hour <= 16){
// greeting = "Good After Noon" 
// alert(greeting)      
// }
// else if(hour >= 17 && hour <= 19){
// greeting = "Good Evening"
// alert(greeting)
// }
// else if(hour >= 20 && hour <= 24){
// greeting = "Good Night"
// alert(greeting)
// }
// else{
// greeting = "Enter correct time";
// alert(greeting)
// }


// Chap # 14 to 16

// 1.

// var stdName = [];

// 2.

// var stdName = [];

// 3.

// var stringArra = ["Ali","Ahmed","Rizwan","Aziz"]
// alert(stringArra)

// 4.

// var numberArra = [22,33,44,55,66,77,88]
// alert(numberArra)

// 5.

// var booleanArra = ["True","False"]
// alert(booleanArra)

// 6.

// var mixedArra = ["Murree",33,43,"Karachi","true",88]
// alert(mixedArra)

// 7.

// var qualification = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]
// document.write("<h1>Qualification</h1>")
// document.write("1)" + " " + qualification[0] + "<br />");
// document.write("2)" + " " + qualification[1] + "<br />");
// document.write("3)" + " " + qualification[2] + "<br />");
// document.write("4)" + " " + qualification[3] + "<br />");
// document.write("5)" + " " + qualification[4] + "<br />");
// document.write("6)" + " " + qualification[5] + "<br />");
// document.write("7)" + " " + qualification[6] + "<br />");
// document.write("8)" + " " + qualification[7] + "<br />");

// 8.

// var stdName = ["Okasha","Ali","Asad"];
// var score = [484,456,368]
// var totalScore = 500;
// var percentage1 = score[0] * 100 / totalScore;
// var percentage2 = score[1] * 100 / totalScore;
// var percentage3 = score[2] * 100 / totalScore;
// document.write("Score of" + " " + stdName[0] + " " + "is" + " " + score[0] + ". Percentage :" + " " + percentage1 +"%" + "<br />")
// document.write("Score of" + " " + stdName[1] + " " + "is" + " " + score[1] + ". Percentage :" + " " + percentage2 +"%" + "<br />")
// document.write("Score of" + " " + stdName[2] + " " + "is" + " " + score[2] + ". Percentage :" + " " + percentage3 +"%" + "<br />")

// 9.

// var colorName = ["Green","Yellow","Orange","Pirple","Blue"]
//       alert(colorName);
// var addColorToBeginning = prompt("what color you want to add to the beginning")
// colorName.unshift(addColorToBeginning)
//        alert(colorName)
// var addColorToEnd = prompt("what color you want to add to the end");
// colorName.push(addColorToEnd)
//        alert(colorName)
// var addOneColor = prompt("Enter first color")
// var addOneMoreColor = prompt("Enter second color")
// colorName.unshift(addOneColor,addOneMoreColor)
//        alert(colorName)
// colorName.shift();
//        alert(colorName)
// colorName.pop();
//        alert(colorName) ;
// var s = prompt("At which index you want to add a color")
// var t = prompt("Which color you want to add")
// colorName.splice(s,0,t)
//          alert(colorName)
//  var u = prompt("At which index you want to delete color(s)")
//  var v = prompt("How many colors you want to delete")
//  colorName.splice(u,v)
//          alert(colorName)

// 10.

// var stdScore = [334,434,533,234,545,564,423,232]
//         document.write("Score of Students : " + " " + stdScore + "<br />")
// stdScore.sort()
//         document.write("Ordered Scores of Students : " + " " + stdScore)

// 11.

// var cityNames = ["Karachi","Peshawar","Lahore","Quetta","Isalamabad","Murree"];
//          document.write("<h1>Cities list </h1>" + "<br /> " + cityNames + "<br />")
// var selectedCities = cityNames.slice(0,2)
//          document.write("<h1>Selected cities list</h1> " + "<br /> " + selectedCities)

// 12.

// var arraays = ["My","name","is","Anas Khan"];
//           document.write("<h1>ARRAY :</h1>" + "<br />" + arraays)
// var arrayJoin = arraays.join(" ");
//           document.write("<h1>STRING :</h1>" + "<br />" + arrayJoin)

// 13.

// var computer = ["Keyboard","Mouse","Printer","Monitor"];
// document.write("<h2>Devices</h2>" + "<br />" + computer + "<br />"+ "<br />" )
// document.write("Out :" + "<br / >" + computer[0] + "<br />" )
// document.write("Out :" + "<br / >" + computer[1] + "<br />" )
// document.write("Out :" + "<br / >" + computer[2] + "<br />" )
// document.write("Out :" + "<br / >" + computer[3] + "<br />" )

// 14.

// var computer = ["Keyboard","Mouse","Printer","Monitor"];
// document.write("<h2>Devices</h2>" + "<br />" + computer + "<br />"+ "<br />" )
// document.write("Out :" + "<br / >" + computer[3] + "<br />" )
// document.write("Out :" + "<br / >" + computer[2] + "<br />" )
// document.write("Out :" + "<br / >" + computer[1] + "<br />" )
// document.write("Out :" + "<br / >" + computer[0] + "<br />" )

// 15.

// var brands = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// Brandss = brands.join("<br />")
//   document.write(Brandss)


// CHAP # 17 to 20

// 1.

// var arr = [["Ali",30,"Male"],["Ahmed",49,"Male"],["Ayesha",33,"Female"]]

// 2.

// var multidimensional = [
//                            [0,1,2,3],
//                            [1,0,1,2],
//                            [2,1,0,1]
//                         ]

// for(var i = 0; i <= 2; i++){
//         for(var j = 0; j <= 3; j++){
//                 document.write(multidimensional[i][j] + " ")
//         }
//         document.write("<br />")
// }

// 3.

// for(var i = 1; i <= 10; i++){
//         document.write(i + "<br />")
// }

// 4.

// var tableNum = prompt("Enter number to print its Table");
// var tableLength = prompt("Enter the length of table");
//         document.write("<h3>Multiplication Table of :" + tableNum + "<br /></h3>");
//         document.write("<h3>Length :" + tableLength+ "<br /></h3>")
// for(var i = 1; i <= tableLength; i++){
//         document.write(tableNum + " " + "x" + " " + i + " " + "=" + " " + i*tableNum + "<br />")
// }

// 5.

// var fruits =  ["apple", "banana", "mango", "orange","strawberry"]
// for(var i = 0; i < fruits.length; i++){
//         document.write(fruits[i] + "<br />")
// }
// document.write("<br />")
// for(var j = 0; j < fruits.length; j++){
//         document.write("Element at index " + " " + j + " " + "is" + " " + fruits[j] + "<br />")
// }

// 6.

//         document.write("<h2>Counting</h2>") 
// for(var i = 1; i <= 15; i++){
//         document.write(i + ",")
// }
//         document.write("<h2>Reverse Counting</h2>") 
// for(var j = 10; j >= 1; j--){
//         document.write(j + ",")
// }
//         document.write("<h2>Even</h2>") 
// for(var k = 0; j <= 20; j=j+2){
//         document.write(j + ",")
// }
//         document.write("<h2>Odd</h2>") 
// for(var l = 1; l <= 20; l=l+2){
//         document.write(l + ",")
// }
//         document.write("<h2>Series</h2>") 
// for(var m = 2; m <= 20; m=m+2){
//         document.write(m + "k" + "," + " ")
// }
 
// 7.

// var bakery = ["cake","cookie","milk","chips","paties","nimco"];
// var type = prompt("Enter your choice");
// var lowerType = type.toLowerCase();
// if(bakery.indexOf(lowerType) !== -1){
//        document.write(lowerType + " " + "is available in our bakery at index"  + " " + bakery.indexOf(lowerType))
// }
// else{
//         document.write("We are sorry . " + " " + lowerType + " " + "is not available in our bakery")
// }


// 8.

// var array = [22,33,32,44,21,40]
//     document.write("<h1>Array items :" + array + "</h1>")
// var arrayArrange = array.sort();
// var separate = arrayArrange.slice(5,6)
//     document.write("<h1>The largest Number is " + separate + "</h1>") 


// 9.
        
// var array2 = [22,33,32,44,21,40]
//     document.write("<h1>Array items :" + array2 + "</h1>")
// var arrayArrange2 = array2.sort();
// var separate2 = arrayArrange2.slice(0,1)
//     document.write("<h1>The smallest Number is " + separate2 + "</h1>") 

// 10.

// for(var i = 5; i <= 100; i=i+5){
//         document.write(i + ", ")
// } 







