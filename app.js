//***********CHAPTER 1************** 
// //Task-1
// alert("Welcome To our website","javascript Alert");

// // Task-2
// alert("Error! Please enter a valid passsword.");

// //Task-3
// alert("Welcome to JS Land... \nHappy Coding!");

// //Task-4
// alert("Welcome to JS Land..");
// alert("Happy Coding! \nPrevent this page from creating additional dialogs.");

// //Task-5
// alert("Hello..I can run JS through my web browser's console");

// // Task-6 and 7 are in index.html page



// *****************CHAPTER 2***********

//Task-1
// var username;

// //Task-2
// var myName="Yasrab Memon";

// //Task-3
// var message;
// message="Hello World";
// alert(message);

// //Task-4
// var name="Jhone Doe";
// var age="15 years old";
// var cert="Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(cert);

// //Task-5
// var pizzaAlert="PIZZA \nPIZZ \nPIZ \nPI \nP";
// alert(pizzaAlert);


// //Task-6
// var email="yasrab7memon@gmail.com";
// alert("My email address is "+ email);

// //Task-7
// var book="A smarter way to learn JavaScript";
// alert("I am tryiing to learn from the book "+book);

// //Task-8
// var msg="Yah! I can write HTML content through JavaScript";
// document.write(msg);

// document.write("<br>");

// //Task-9
// var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);
// document.write(design);




// *****************CHAPTER 3***********

//Task-1
// var age ;
// age = 21;
// alert("I am "+ age +" years old");

// //Task-2
// var count=0;
// count=count+14;
// alert("You have visited this site "+ count +" times");

// //Task-3
// var birthYear=1998;
// document.write("My birth Year is "+birthYear);
// document.write("<br>");
// document.write("Data type of my declared variable is "+typeof(birthYear));

// document.write("<br><br>")

// //Task-5
// var visitors_name="John Doe";
// var product="T-shirt";
// var quantity="5";
// document.write('\"<b>John Doe</b> ordered ' + "<b>" +quantity+' '+product+'</b>(s) on XYZ Clothing store');

// *****************CHAPTER 4***********
//Task-1
// var var1 ,var2 ,var3;

// //Task-2
// //legal
// var name1;
// var name_1;
// var ali_mughal;
// var yasrabMemon;
// var $yasrab;

// //Task-3
// //illegal
// // var 1name;
// // var a&b;
// // var name-1;
// // var %name;
// // var name 1;


// //Task-4
// document.write("<h1>Rules for naming JS variables</h1><br>");
// document.write("Variable names can only contain letter, numbers, dollar signs and underscores. For example <b>$my_1stVariable</b><br>");
// document.write("Variables must begin with a letter, $ and _. For example: <b> $name, _name or name.</b><br>");
// document.write("Variable names are case sensitive.<br>");
// document.write("Variable names should not be JS keywords.<br>");




// *****************CHAPTER 5***********
//Task-1
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var sum=num1+num2;
// document.write("Sum of "+num1+ " and "+num2+ " is "+sum+ "<br>");


// //Task-2
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var subtraction=num1-num2;
// document.write("Subtraction of "+num1+ " and "+num2+ " is "+subtraction+ "<br>");

// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var multiplication=num1*num2;
// document.write("Multiplication of "+num1+ " and "+num2+ " is "+multiplication+ "<br>");

// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var division=num1/num2;
// document.write("Division of "+num1+ " and "+num2+ " is "+division+ "<br>");

// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var modulus=num1%num2;
// document.write("Modulus of "+num1+ " and "+num2+ " is "+modulus+ "<br><br><br>");


// //Task-3
// var a;
// document.write("Value after variable declaration is: "+a+"<br>");
// var a=5;
// document.write("Initial value: "+a+"<br>");
// ++a;
// document.write("Value after increment is: "+a+"<br>");
// a=a+7;
// document.write("Value after addition is: "+a+"<br>");
// --a;
// document.write("Value after decrement is: "+a+"<br>");
// a=a%3;
// document.write("The remainder is: "+a+"<br>");


// document.write("<br><br><br>");

// //Task-4
// var ticket_cost=600;
// var buy=5;
// document.write("Total cost to buy "+buy+ " tickets to a movie is "+ (ticket_cost*buy)+ "PKR");


// document.write("<br><br><br>");

// //Task-5
// var n=+prompt("Enter a number for Table");
// var c=0;
// for(var i=1; i<=10; i++){
//     c=i*n
//     document.write(n+'x'+i+'='+c+"<br>");
// }



// document.write("<br><br><br>");


// //Task-6
// var cel=25;
// var f=(cel*9/5)+32;
// document.write(cel+"<sup>o</sup>C is " + f + "<sup>o</sup>F <br>");
// f=70;
// cel=(f-32)*5/9;
// document.write(f+"<sup>o</sup>F is " + cel + "<sup>o</sup>C <br>")


// document.write("<br><br><br>");


//Task-7
// var item1=650;
// var item2=100;
// var q_item1=3;
// var q_item2=7;
// var shipping_charges=100;
// var total=(item1*q_item1)+(item2*q_item2)+shipping_charges;

// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is "+ item1 +"<br>");
// document.write("Quantity of item 1 is "+ q_item1 +"<br>");
// document.write("Price of item 2 is "+ item2 +"<br>");
// document.write("Quantity of item 2 is "+ q_item2 +"<br>");
// document.write("Shipping Charges "+ shipping_charges +"<br><br>");
// document.write("The total cost of your order is "+total+"<br>");


//Task-8
// document.write("<h1>Marks Sheet</h1><br><br>");
// var total_marks=980;
// var marks_obtained=804;
// var pert=(marks_obtained*100)/total_marks;

// document.write("Total marks: "+total_marks+"<br>");
// document.write("Marks obtained: "+marks_obtained+"<br>");
// document.write("Percentage: "+pert+"%<br>");


//Task-9
// var us_dollar=10;
// var saudi_riyal=25;
// var dollar_to_rupees=104.80*us_dollar;
// var riyal_to_rupees=28*saudi_riyal;

// document.write("<h1>Currency in PKR</h1>")
// document.write("Total curreny in PKR: "+ (dollar_to_rupees+riyal_to_rupees));


//Task-10
// var num=4;
// // num=num+5;
// // num=num*10;
// // num=num/2;
// num=(((num+5)*5)/2);
// document.write("Answer is: "+num+"<br>");


//Task-11
// var c_year1=2020;
// var b_year1=1998;

// var c_year2=2020;
// var b_year2=2009;

// document.write("Current Year: "+c_year1+"<br>");
// document.write("Birth Year: "+b_year1+"<br>");
// document.write("Pireh, Your Age is: "+(c_year1-b_year1)+"<br><br>");

// document.write("Current Year: "+c_year2+"<br>");
// document.write("Birth Year: "+b_year2+"<br>");
// document.write("Hadiya, Your Age is: "+(c_year2-b_year2)+"<br>");



//Task-12
// var radius=20;
// var pi=3.142;
// var circumference=2*radius*pi;
// var area=pi*(radius*radius);

// document.write("<h1>The Geometrizer</h1><br>")
// document.write("Radius of a circle: "+radius+"<br>");
// document.write("The circumference: "+circumference+"<br>");
// document.write("The area is: "+area+"<br>");


//task-13
// var snack="Chocolate chip";
// var cur_age=15;
// var est_max_age=65;
// var amount=3;
// var lifetime=(est_max_age-cur_age)*amount;

// document.write("<h1>The Lifetime Supply Calculator</h1><br>")
// document.write("Favourite Snack: "+snack+"<br>");
// document.write("Current age: "+cur_age+"<br>");
// document.write("Estimated Maximum Age: "+est_max_age+"<br>");
// document.write("Amount of snacks per day: "+amount+"<br>");
// document.write("You will need "+lifetime+" to last you until the ripe old age of "+est_max_age+"<br>");




// *****************CHAPTER 6 to 9***********

//Task-1
// var a=10;
// document.write("Result:<br>");
// document.write("The value of a is: "+(a)+"<br><br>");


// document.write("The value of ++a is: "+(++a)+"<br>");
// document.write("Now the value of a is: "+a+"<br><br>");

// document.write("The value of a++ is: "+(a++)+"<br>");
// document.write("Now the value of a is: "+a+"<br><br>");

// document.write("The value of --a is: "+(--a)+"<br>");
// document.write("Now the value of a is: "+a+"<br><br>");

// document.write("The value of a-- is: "+(a--)+"<br>");
// document.write("Now the value of a is: "+a+"<br><br>");

//Task-2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is "+a+"<br>");
// document.write("b is "+b+"<br>");
// document.write("Result: "+result+"<br>");
// document.write("The answer will be the 3 beacuse first a will decrement and then b will decrement then both will subtract answer is 1-0=1 then b will increment b=1 then add with previous answer 1+1=2 then b will post decrement and then add with previous answer post decrement so still b=1 then 2+1=3 <br><br>");


//Task3
// var name=prompt("Enter your full name");
// alert("Welcome "+name+", to our website");

//Task-4
//not shown

//Task-5
// n=+prompt("Enter a number for a table: ");
// var c=0;
// if(n==0){
// for(var i=1; i<=10; i++){
//     c=5*i;
//     document.write(5+" x "+i+" = "+c+"<br>");
// }
// }
// else{
//     for(var i=1; i<=10; i++){
//         c=n*i;
//         document.write(n+" x "+i+" = "+c+"<br>");
// }
// }


//Task-6
// var sub1=prompt("Enter first subject name:");
// var sub2=prompt("Enter second subject name:");
// var sub3=prompt("Enter third subject name:");
// var total_marks_sub1=100;
// var total_marks_sub2=100;
// var total_marks_sub3=100;
// var ob_marks_sub1=+prompt("Enter obtained marks for first subject:");
// var ob_marks_sub2=+prompt("Enter obtained marks for second subject:");
// var ob_marks_sub3=+prompt("Enter obtained marks for third subject:");

// var total_marks=total_marks_sub1+total_marks_sub2+total_marks_sub3;
// var marks_obtained=ob_marks_sub1+ob_marks_sub2+ob_marks_sub3;
// var percentage_sub1=(ob_marks_sub1*total_marks_sub1)/100;
// var percentage_sub2=(ob_marks_sub2*total_marks_sub2)/100;
// var percentage_sub3=(ob_marks_sub3*total_marks_sub3)/100;
// var percentage=((percentage_sub1+percentage_sub2+percentage_sub3)*100)/300;
// document.write("<b>Subject &nbsp; Total marks &nbsp; Obtained marks &nbsp; Percentage</b>"+"<br>");
// document.write(sub1+" &nbsp;&nbsp;&nbsp; "+total_marks_sub1+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+ob_marks_sub1+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+percentage_sub1+"%"+"<br>");
// document.write(sub2+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+total_marks_sub2+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+ob_marks_sub2+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+percentage_sub2+"%"+"<br>");
// document.write(sub3+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+total_marks_sub3+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+ob_marks_sub3+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+percentage_sub3+"%"+"<br>");
// document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+total_marks+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+marks_obtained+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+percentage+"%"+"<br>");



// **************CHAPTER 9 TO 11********************

//Task-1
// var city_name = prompt("Enter any city name: ");
// if(city_name==="karachi" || city_name==="Karachi"){
//     document.write("Welcome to city of lights!");
// }
// else{
//     document.write("Welcome to "+city_name);
// }

//Task-2
// var gender = prompt("Enter oyur gender: ");
// if(gender==="male" || gender==="Male"){
//     document.write("Good Morning Sir!");
// }
// else if(gender==="female" || gender==="Female"){
//     document.write("Good Morning Ma'am!");
// }
// else{
//     document.write("Welcome!");
// }


//Task-3
// var signal_color=prompt("Enter any Signal color:");
// var message=" ";
// if(signal_color==="Red" || signal_color==="red"){
//     document.write("Must Stop");
// }
// else if(signal_color==="Yellow" || signal_color==="yellow"){
//     document.write("Ready to move");
// }
// else if(signal_color==="Green" || signal_color==="green"){
//     document.write("Move now");
// }
// else{
//     document.write("No message <br> For that color!");
// }


//Task-4
// var fuel=prompt("Enter the remaining fuel in car(in litres): ");
// if(fuel<0.25){
//     document.write('\“Please refill the fuel in your car\”')
// }
// else{
//     document.write("No need to refill till now!");
// }


//Task-5
//5-a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }//output will show

//5-b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// //no nay msg comes beacuse first  b is check then increment b/c it is post increment.


//5-c
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
////only second and third if will run

//5-d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }//correct output


//5-e
// if (true){
//     alert("True");
// }
// if (false){
// alert("False");
// }  //first if is infinity and second is fails not run

//5-f
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


//Task-6
// var eng_marks=+prompt("Enter English subject marks:");
// var math_marks=+prompt("Enter Maths subject marks:");
// var urdu_marks=+prompt("Enter Urdu sibject marks");
// var total_marks=300;
// var marks_obtained=eng_marks+math_marks+urdu_marks;
// var percentage=((eng_marks+math_marks+urdu_marks)*100)/300;

// document.write("<h1>Marks Sheet</h1><br>");
// document.write("Total marks : "+total_marks+"<br>");
// document.write("Marks obtained : "+marks_obtained+"<br>");
// document.write("Percentage : "+percentage+"%<br>");

// if(percentage>=80){
//     document.write("Grade : A-1"+"<br>"+"Remarks : Excellent");
// }
// else if(percentage>=70){
//     document.write("Grade : A"+"<br>"+"Remarks : Good");
// }
// else if(percentage>=60){
//     document.write("Grade : B"+"<br>"+"Remarks : You need to improve");
// }
// else if(percentage<60){
//     document.write("Grade : Fail"+"<br>"+"Remarks : Sorry");
// }


//Task-7
// var store_num=4;
// var secret_num=+prompt("Guess a secret number between 1 to 10 : ");
// if(secret_num===store_num){
//     document.write("<h1>Bingo! Correct answer.</h1><br>");
// }
// else if(store_num==(secret_num-1) || store_num===(secret_num+1)){
//     document.write("<h1>Close enough to the correct answer.</h1><br>");
// }
// else{
//     document.write("No correct! Better luck for next time");
// }


//Task-8
// var num=+prompt("Enter a number: ");
// if(num%3===0){
//     document.write(num+" is divisible by 3");
// }
// else{
//     document.write(num+" is not divisible by 3");
// }


//Task-9
// var num=+prompt("Enter a number: ");
// if(num%2===0){
//     document.write(num+" is even number");
// }
// else{
//     document.write(num+" is an odd number");
// }

//Task-10
// var temp=+prompt("Enter the Temperature: ");
// if(temp>40){
//     document.write("“It is too hot outside.<br>");
// }
// else if(temp>30){
//     document.write("The Weather today is Normal.<br>");
// }
// else if(temp>20){
//     document.write("Today’s Weather is cool.<br>");
// }
// else{
//     document.write("OMG! Today’s weather is so Cool.<br>");
// }

//Task-11
// var val1=+prompt("Enter your first vlaue");
// var val2=+prompt("Enter your second vlaue");
// var sign=prompt("Enter your operator");

// console.log(val1+sign+val2);


// if(sign==='+'){
//     alert(val1+val2);
// }
// else if(sign==='-'){
//     alert(val1-val2);
// }
// else if(sign==='*'){
//     alert(val1*val2);
// }
// else if(sign==='/'){
//     alert(val1/val2);
// }
// else if(sign==='%'){
//     alert(val1/val2);
// }




// ******************CHAPTER 12 TO 13**************
//Task-1
// var ch=prompt("Enter any Character whether string or number");
// if (ch>=65 && ch<=90)
// 		document.write("Character is a capital letter, that is "+ch);
// 	else if (ch>=97 && ch<=122)
// 		document.write("Character is a small letter, that is "+ch);
// 	else if (ch>=48 && ch<=57)
// 		document.write("Character is a digit, that is "+ch);
// 	else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)||
//                (ch>=91 && ch<=96)||(ch>=123 && ch<=127))
// 		document.write("Character is a number, that is "+ch);


//Task-2
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// if(num1==num2){
//     alert("Both numbers are equal");
// }
// else if(num1>num2){
//     alert("Number 1 is Greater than number 2");
// }
// else if(num1<num2){
//     alert("Number 2 is Greater than number 1");
// }


//Task-3
// var num=+prompt("Enter a number");
// if(num>0){
//     alert("Number is Positive");
// }
// else if(num<0){
//     alert("Number is Negative");
// }
// else if(num==0){
//     alert("Number is Zero");
// }


//Task-4
// var ch=prompt("Enter a character: ");
// if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"){
//     alert("It is a vowel")
// }
// else{
//     alert("The character you enter is not vowel");
// }

//Task-5
// var original_pass="YasrabMemon";
// var password=prompt("Enter your password: ");
// if(password===original_pass){
//     alert("Correct! The password you entered matches the original password");
// }
// else if(password===""){
//     alert(" Please enter your password");
// }
// else{
//     alert("Incorrect Password");
// }


//Task-6
// var greeting="";
// var h = 13;
// if (h < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else{
// greeting = "Good evening";
// alert(greeting);
// }


//Task-7
// var time=+prompt('Enter time: ');
// if(time>=0000 && time <1200){
//     alert("Good Morning!");
// }
// else if(time>=1200 && time <1700){
//     alert("Good Afternoon!");
// }
// else if(time>=1700 && time<2100){
//     alert("Good Evening!");
// }
// else if(time>=2100 && time <=2359){
//     alert("Good Night!");
// }


// **********CHAPTER-14-16 *****************
//Task-1
//var student=[];

//Task-2
//var student=[];


//Task-3
//var arr=["Ali", "Humza", "Ayaz"];
//document.write(arr[0]);

//Task-4
//var arr=[1,2,3,4,5];
//document.write(arr[2]);

//Task-5
//var arr=[true,false];
//document.write(arr[1]);

//Task-6
//var arr=["Ali",411,7.5,true];
//document.write(arr[3]);

//Task-7
// var edu_qualifications=['SSC','HSC','BCS','BS','BCOM','MS','M.Phil.','PhD'];
// document.write("<h1>Qualifications:</h1>"+"<br>");
// for(var i=0; i<edu_qualifications.length; i++){
//     document.write((i+1) + ") "+ edu_qualifications[i]+"<br>");
// }

//Task-8
// var arr=["Michael", "John","Tony"];
// var score=[320,230,480];
// var percentage=[(320*100)/500,(230*100)/500,(480*100)/500]

// for(var i=0; i<arr.length; i++){
//     document.write("Score of "+ arr[i]+ " is "+ score[i] + ". Percentage: "+percentage[i]+"%<br>")
// }

//Task-9
// var color=["red","green","blue","pink","grey"];
// document.write(color+"<br>");
// var add_color1=prompt("Enter a color you want to see in beginning");
// color.unshift(add_color1);
// document.write("After one Updation in the beginning: <br>["+color+"]<br><br>");

// var add_color2=prompt("Enter a color you want to see in end");
// color.push(add_color2);
// document.write("After one Updation in end: <br>["+color+"]<br><br>");

// var add_color3=prompt("Enter a color you want to see in beginning");
// var add_color4=prompt("Enter a color you want to see in beginning");
// color.unshift(add_color3,add_color4);
// document.write("After Updation of 2 element in the beginning: <br>["+color+"]<br><br>");

// color.shift();
// document.write("After Deletion of 1 element in the beginning: <br>["+color+"]<br><br>");

// color.pop();
// document.write("After Deletion of 1 element in the end: <br>["+color+"]<br><br>");

// var add_color5=prompt("Enter a color you want to see");
// var index1=+prompt("Enter at which index you want to see: ");
// color[index1]=add_color5;
// document.write("After one Updation: <br>["+color+"]<br><br>");


// var index1=+prompt("Enter at which index you want to see: ");
// color[index1]="";
// document.write("After one deletion : <br>["+color+"]<br><br>");


//Task-10
// var arr=[320,230,480,120];
// var arr2=arr.sort();
// document.write("Scores of Students: "+arr+"<br>");
// document.write("Ordered Scores of Students: "+arr2+"<br>");


//Task-11
// var city=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var selectedCities=city.slice(2,5);
// document.write("Cities list:"+"</br>");
// document.write(city+"</br><br>");

// document.write("Slelected cities list:"+"</br>");
// document.write(selectedCities+"</br>");

//Task-12
// var arr = ['This','is','my','cat'];
// var arr2=arr.join(" ");
//  document.write("Array: "+arr+"<br><br>");
//  document.write("String: "+arr2+"<br>");


// //Task-13
// var arr=["keyboard","mouse","printer","monitor"];
// document.write("Devices:<br>"+arr+"<br><br>")
// for(var i=0; i<arr.length; i++){
//     document.write("Out: <br>"+arr[i]+"<br>");
// }

//Task-14
// var arr=["keyboard","mouse","printer","monitor"];
// document.write("Devices:<br>"+arr+"<br><br>")
// for(var i=arr.length-1; i>=0; i--){
//     document.write("Out: <br>"+arr[i]+"<br>");
// }





// ***********CHAPTER-17-20***********
// //Task-1
// var arr=[[],[]];

// //Task-2
// for(var i=0; i<3; i++){
//     for(var j=0; j<4; j++){
//        document.write(j+" ")       
//     }
//     document.write("<br>");
// }


//Task-3
// for(var i=1; i<=10; i++){
//     document.write(i+"<br>");
// }

// //Task-4
// var n=+prompt("Enter a number for Table");
// var len=+prompt("Enter the length of multiplication table");
// var c=0;
// document.write("Multiplication table of "+n+"<br>");
// document.write("Length : "+len+"<br><br>")
// for(var i=1; i<=len; i++){
//     c=i*n
//     document.write(n+'x'+i+'='+c+"<br>");
// }


//Task-5
// var items=['apple','banana','mango','orange','strawberry'];
// for(var i=0; i<items.length; i++){
//     document.write(items[i]+"<br>");
// }
// document.write("<br>");

// for(var i=0; i<items.length; i++){
//     document.write("Element at index "+i+" is "+items[i]+"<br>");
// }


//Task-6
// //a
// document.write("<h3>Counting: </h3>");
// for(var i=1; i<=15; i++){
//     document.write(i+", ");
// }
// document.write("<br>");

// //b
// document.write("<h3>Reverse Counting: </h3>");
// for(var i=15; i>0; i--){
//     document.write(i+", ");
// }
// document.write("<br>");

// //c
// document.write("<h3>Even: </h3>");
// for(var i=1; i<=20; i++){
//     if(i%2===0){
//     document.write(i+", ");
// }
// }
// document.write("<br>");

// //d
// document.write("<h3>Odd: </h3>");
// for(var i=1; i<=20; i++){
//     if(i%2!==0){
//     document.write(i+", ");
// }
// }
// document.write("<br>");

// //e
// document.write("<h3>Series: </h3>");
// for(var i=1; i<=20; i++){
//     if(i%2===0){
//     document.write(i+"k, ");
// }
// }
// document.write("<br>");


//Task-7
// var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var search=prompt("Welcome to ABC Bakery. What do you want to order sir/ma\'am? ");
// var flag=true;
// for(var i=0; i<a.length; i++){
//     if(search===a[i]){
//         document.write(a[i]+" is <b>available</b> at index "+i+" in our bakery.");
//         flag=false;
//     }
// }

// if(flag){
//     document.write("We are sorry. "+search+" is <b>not available</b> in our bakery.");
// }

//Task=8
// var arr = [24, 53, 78, 91, 12];
// var max=0;
// for(var i=0; i<arr.length; i++){
//     max=arr[i]
//     for(var j=0; j<arr.length; j++){
//           if(max<arr[j]){
//               max=arr[j];
//           }
//     }
// }
// document.write("Array items: "+arr+"<br>");
// document.write("The largest number is "+max);

//Task=9
// var arr = [24, 53, 78, 91, 12];
// var max=0;
// for(var i=0; i<arr.length; i++){
//     max=arr[i]
//     for(var j=0; j<arr.length; j++){
//           if(max>arr[j]){
//               max=arr[j];
//           }
//     }
// }
// document.write("Array items: "+arr+"<br>");
// document.write("The smallest number is "+max);

//Task-10
// var c=0;
// for(var i=0; i<100/5; i++){

//     c=c+5;
//     document.write(c+", ");
// }
// document.write("<br>");



// **********CHAPTER 21-25*************

//Task-1
// var fistname = prompt("Enter your first name: ");
// var lastname = prompt("Enter your last name");
// var fullname = fistname + " " + lastname;
// alert("Welcome "+fullname+"!");

//Task-2
// var fav_mobile = prompt("Enter your favorite mobile phone model: ");
// var mob_length = fav_mobile.length;
// document.write("My favorite phone is: "+fav_mobile+"<br>");
// document.write("Length of string: "+mob_length)

//Task-3
// var name = "Pakistani";
// var find_index = name.indexOf('n');
// document.write("String: "+name+"<br>");
// document.write("Index of \'n\': "+find_index);

//Task-4
// var name = "Hello World";
// var find_index = name.lastIndexOf('l');
// document.write("String: "+name+"<br>");
// document.write("Last index of \'l\': "+find_index);

//Task-5
// var name = "Pakistani";
// var find_char = name.charAt(3);
// document.write("String: "+name+"<br>");
// document.write("Character at index 3: "+find_char);

//Task-6
// var fistname = prompt("Enter your first name: ");
// var lastname = prompt("Enter your last name");
// var fullname = fistname.concat(" "+lastname);
// alert("Welcome "+fullname+"!");

//Task-7
// var city = "Hyderabad";
// var replacing = city.replace("Hyder","Islam");
// document.write("City: "+city+"<br>");
// document.write("After replacement: "+replacing);

//Task-8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var replacing = message.replace(/and/g , "&");
// document.write("Before replacing:  "+message+"<br><br>");
// document.write("After replacement:  "+replacing);

//Task-9
// var str = "472";
// var num = Number(str);
// document.write("Value: "+str+"<br>");
// document.write("Type: "+typeof str+"<br>");
// document.write("Value: "+num+"<br>");
// document.write("Type: "+typeof num+"<br>");

//Task-10
// var name = prompt("Enter any Dry fruit");
// document.write("User input: "+name+"<br>");
// document.write("Upper case: "+name.toUpperCase()+"<br>");

//Task-11
// var name = prompt("Enter any subject name");
// var firstchar=name.slice(0,1);
// var otherchar=name.slice(1);
// document.write("User input: "+name+"<br>");
// document.write("Upper case: "+firstchar.toUpperCase()+otherchar.toLowerCase()+"<br>");

//Task-12
// var num=35.36;
// var str=num.toString().replace(".","");
// document.write("Number: "+num+"<br>");
// document.write("Result: "+str);

//Task-13
// var name=prompt("Enter a your name: ");
// for(var i=0; i<name.length; i++){
//     if(name.slice(i,i+1)=="!" || name.slice(i,i+1)=="," || name.slice(i,i+1)=="." || name.slice(i,i+1)=="@"){
//         alert("Please enter a valid username. ");
//     }
// }

//Task-14
// var arr=['cake','apple pie','cookie','chips','patties'];
// var fruit=prompt("Welcome to ABC bakery, What you want to order Sir/ma\'am");
// fruit=fruit.toLowerCase();
// var flag=true;
// for(var i=0; i<arr.length; i++){
//     if(arr[i]===fruit){
//         document.write(fruit+" is <b>available</b> at index "+i+" in our bakery");
//         flag=false;
//     }
// }
// if(flag){
//     document.write("We are sorry. "+fruit+" is <b>not available</b> in our bakery");
// }

//Task-15


//Task-16
// var university="University of karachi";
// var uni_split=university.split("");
// for(var i=0; i<university.length; i++){
//     document.write(university[i]+"<br>")
// }

//Task-17
// var name=prompt("Enter any Country name:");
// var lastchar=name.length-1;
// document.write("User input: "+name+"<br>");
// document.write("Last character of user input: "+name[lastchar]+"<br>");

//Task-18
// var str="“The quick brown fox jumps over the lazy dog";
// var count=0;
// for(var i=0; i<str.length; i++){
//     if(str.slice(i,i+3)=="the" || str.slice(i,i+3)=="The"){
//         count=count+1;
//     }
// }
// document.write("Text: "+str+"<br>");
// document.write("There are "+ count+" occurence(s) of word \'the'\ ")


// *************CHAPTER-26-30************
//Task-1
// var value=+prompt("Enter any value in float");
// document.write("Number: "+value+"<br>");
// document.write("Round odd value: "+Math.round(value)+"<br>");
// document.write("Floor value: "+Math.floor(value)+"<br>");
// document.write("Ceil value: "+Math.ceil(value)+"<br>");

//Task-2
// var value=+prompt("Enter any value in float");
// document.write("Number: "+value+"<br>");
// document.write("Round odd value: "+Math.round(value)+"<br>");
// document.write("Floor value: "+Math.floor(value)+"<br>");
// document.write("Ceil value: "+Math.ceil(value)+"<br>");

//Task-3
// var value=+prompt("Enter any value: ");
// document.write("The absolute value of "+value+" is "+Math.abs(value));

//Task-4
// var dice = Math.floor(Math.random()*6+1);
// document.write("Random dice value: "+dice);

//Task-5
// var coin = Math.floor(Math.random()*2+1);
// document.write(coin+"<br>");
// if(coin===1){
//     document.write("Random coin value: Tails");
// }
// else{
//     document.write("Random coin value: Heads");
// }

// Task-6
// var num = Math.floor(Math.random()*100+1);
// document.write("Random number between 1 and 100: "+num+"<br>");

//Task-7
// var weight=prompt("Enter your weight: ");
// weight = parseFloat(weight);
// document.write("The weight of user is "+weight+" kilograms");

//Task-8
// var secret_num = Math.floor(Math.random()*10+1);
// var user_input = +prompt("Enter a number between 1 to 10");
// if(secret_num===user_input){
//     alert("congratulations! \nYou Enter a correct number");
// }
// else{
//     alert("Try again! \nSecret number was "+secret_num);
// }



// *************CHAPTER-31-34************

//Task-1
// var date = new Date();
// document.write(date);

//Task-2
// var date = new Date();
// var current_month = date.getMonth();
// if(current_month===0){
//     document.write("Current month: January");
// }
// else if(current_month===1){
//     document.write("Current month: February");
// }
// else if(current_month===2){
//     document.write("Current month: March");
// }
// else if(current_month===3){
//     document.write("Current month: April");
// }
// else if(current_month===4){
//     document.write("Current month: May");
// }
// else if(current_month===5){
//     document.write("Current month: June");
// }
// else if(current_month===6){
//     document.write("Current month: July");
// }
// else if(current_month===7){
//     document.write("Current month: August");
// }
// else if(current_month===8){
//     document.write("Current month: September");
// }
// else if(current_month===9){
//     document.write("Current month: October");
// }
// else if(current_month===10){
//     document.write("Current month: November");
// }
// else if(current_month===11){
//     document.write("Current month: December");
// }


//Task-3
// var date = new Date();
// var day = date.toString().slice(0,3);
// alert("Today is "+day);

//Task-4
// var date = new Date();
// var day = date.getDay();
// if(day == 0 || day == 6){
//     document.write("It\'s Fun day");
// }

//Task-5
// var date = new Date();
// date = date.getDate();
// if(date < 16){
// document.write("First fifteen days of the month");
// }
// else{
// document.write("Last days of the month");
// }

//Task-6

// var today = new Date();
// var todaymili = today.getTime();
// var todayminutes = today.getTime()/(1000*60*60);
// document.write("Current date: "+today+"<br>");
// document.write("Elapsed milliseconds since january 1, 1970: "+todaymili+"<br>");
// document.write("Elapsed minutes since January 1, 1970: "+todayminutes+"<br>");


//Task-7
// var date = new Date();
// var hour = date.getHours();
// if(hour < 12){
//     document.write("It's AM");
// }
// else{
//     document.write("It's PM");
// }

//Task-8
// var msDiff = new Date("Dec 31, 2020");
// document.write("Lasr date: "+msDiff);

// var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
// var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));

//Task-9
// var date = new Date();
// var datemili = date.getTime();
// var ranmdan = new Date("Jun 18,2015");
// var ramdanmili = ranmdan.getTime();
// var diff = datemili-ramdanmili;
// var passed = Math.floor(diff/(1000*60*60*24));
// document.write(passed+" days have passed since 1st Ramadan, 2015");

//Task-10
// var date = new Date();
// var datemili = date.getTime();
// var begin = new Date("Jan 1,2020");
// var beginmili = begin.getTime();
// var diff = datemili-beginmili;
// var passed = Math.floor(diff/(1000*60));

// document.write("On reference date "+date+"<br>");
// document.write(passed+" seconds had passed since beginning of 2020<br>");


//task 11
// var date=new Date();
// alert(date);
// var currentHour=date.setHours(date.getHours()-1);
// alert(date);


//task 12
// var date=new Date();
// alert("Current date: "+date);
// var currentyear=date.setFullYear(date.getFullYear()-100);
// alert("100 years back: "+date);


//Task-13
// var today = new Date();
// var todaymili = today.getTime();
// var dob = new Date(prompt("Enter your date of birth","July 7,1998"));
// var dobmili = dob.getTime();

// var diff = todaymili - dobmili;
// var diffyear = diff/(1000*60*60*24*12*30);
// var accurate_age = Math.floor(diffyear);
// alert("You are "+accurate_age+" years old.");

//Task-14
// var cust_name=prompt("Enter your name");
// var cur_month =prompt("Enter Current month");
// var unit_num = +prompt("Enter number in units");
// var char_per_unit =+prompt("Enter Charges per unit");

// var net_amount= unit_num*char_per_unit;
// var late_payment = 350;
// var gross_amount = net_amount + late_payment;

// document.write("<h1>K-Electric Bill</h1><br>");

// document.write("Customer Name: <b>"+cust_name+"</b><br>");
// document.write("Month: <b>"+cur_month+"</b><br>");
// document.write("Number of units: <b>"+unit_num+"</b><br>");
// document.write("Charges per unit: <b>"+char_per_unit+"</b><br><br>");

// document.write("Net Amount Payable (within Due Date): <b>"+net_amount+"</b><br>");
// document.write("Late Payment Surcharge: <b>"+late_payment+"</b><br>");
// document.write("Gross Amount Payable (after Due Date): <b>"+gross_amount+"</b><br>");


// **********CHAPTER-35 TO 38**************

//Task-1
// function cur_time(){
//     var date = new Date();
//     document.write(date);
// }
// cur_time();

//Task-2
// function fullname(firstname,lastname){
//     alert("Welcome! \n"+firstname+" "+lastname);
// }
// var firstname = prompt("Enter your first name: ");
// var lastname = prompt("Enter your last name: ");
// fullname(firstname,lastname);

//Task-3
// function add(firstnum,lastnum){
//     alert(firstnum+lastnum);
// }
// var firstnum = +prompt("Enter your first name: ");
// var lastnum = +prompt("Enter your last name: ");
// add(firstnum,lastnum);

//Task-4
// function calc(num1,opr,num2){
//     if(opr==="+"){
//         return num1 + num2;
//     }
//     else if(opr==="-"){
//         return num1 - num2;
//     }
//     else if(opr==="*"){
//         return num1 * num2;
//     }
//     else if(opr==="/"){
//         return num1 / num2;
//     }
//     else if(opr==="%"){
//         return num1 % num2;
//     }
//     else{
//         return "Enter correct operator";
//     }  
// }
// var num1=+prompt("Enter first number: ");
// var num2=+prompt("Enter second number");
// var opr=prompt("Enter operation do you want to perform");
// alert(calc(num1,opr,num2));

//Task-5
// function sqr(a){
//     return a*a;
// }
// alert(sqr(+prompt("Enter a number: ")));

//Task-6
// function fac(n){
//     return n*(n-1)*(n-2);
// }
// alert(fac(+prompt("Enter a number: ")));

//Task-7
// function add(firstnum,lastnum){
//     for(var i=firstnum; i<=lastnum; i++){
//         document.write(i+" ");
//     }
// }
// var firstnum = +prompt("Enter your first name: ");
// var lastnum = +prompt("Enter your last name: ");
// add(firstnum,lastnum);


//Task-8
// function calculateSquare(n){
//     return n*n
// }
// function calculateHypotenuse(b,p){
//     var h=calculateSquare(b)+calculateSquare(p);
//     alert(h);
// }
// var base = +prompt("Enter base:");
// var perp = +prompt("Enter perpendicular:");
// calculateHypotenuse(base,perp);

//Task-9
// i
// function area(w,h){
//     var a=w*h;
//     alert("Area is: "+a);
// }
// area(4,5);

// ii
// function area(w,h){
//     var a=w*h;
//     alert("Area is: "+a);
// }
// var w = +prompt("Enter width:");
// var h = +prompt("Enter height:");
// area(w,h);

//Task-10
// function palindrome(word){
//     var check="";
//     for(var i=word.length-1 ; i>=0; i--){
//         check=check+word[i];
//     }
//     if(word==check){
//         document.write(word+" is Palindrome word");
//     }
//     else{
//         document.write(word+" is not Palindrome word")
//     }
// }
// palindrome(prompt("Enter a word: "));

// //Task-11
// function uppercase(str){
//     str=str.toUpperCase();
//     alert(str);
// }
// var string = prompt("Enter any String");
// uppercase(string);

//Task-12
// function find_longest_word(str){
//   var arr = str.match(/\w[a-z]{0,}/gi);
//   var result = arr[0];

//   for(var x = 1 ; x < arr.length ; x++){
//     if(result.length < arr[x].length){
//     result = arr[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word(prompt("Enter the String to find the longest word within it!")));

//Task-13
// function number_of_occurance(str,ch){
//     var count=0;
//     for(var i=0; i<str.length; i++){
//         if(str[i]==ch){
//             count++;
//         }
//     }
//     return count;
// }
// var str=prompt("Enter a string:");
// var ch=prompt("Enter a character:");
// document.write(number_of_occurance(str,ch))

//Task-14
// function calcCircumference(r){
//     var cir=2*r*3.14;
//     alert("The circumference is "+cir);
// }
// function calcArea(r){
//     var area=3.14*r*r;
//     alert("The area is "+area);
// }
// var radius=+prompt("Enter radius: ");
// calcCircumference(radius);
// calcArea(radius);










// ***************CHAPTER-38-42***********
//Task-1
// function pow( a, b)  
// {  
//     if (b == 0)  
//         return 1;  
//     var ans = a;  
//     var inc = a;  
//     var i, j;  
//     for(i = 1; i < b; i++)  
//     {  
//         for(j = 1; j < a; j++)  
//         {  
//             ans += inc;  
//         }  
//         inc = ans;  
//     }  
//     return ans;  
// }  

// var a=+prompt("Enter the value")
// var b=+prompt("Enter the power you want in value")
// document.write(pow(a,b));

//Task 2
// function leapYear(n){
//     var leap=(n % 100 === 0) ? (n % 400 === 0) : (n % 4 === 0);
//     return leap;
// }
// var a=+prompt("Enter a year to check whether it is a leap year or not");
// document.write(leapYear(a));


// Task-3
// function area(a,b,c){
//     var s= ( a + b + c ) / 2;
//     var area= s*(s - a)*(s - b)*(s - c);
//     console.log("Area is : "+area);
// }
// var a=+prompt("Enter a value of a: ");
// var b=+prompt("Enter a value of b: ");
// var c=+prompt("Enter a value of c: ");
// area(a,b,c);

// Task-4
// function marks(eng,urdu,comp){
//     avg=(eng+comp+urdu)/3;
//     pert=((eng*urdu*comp)*100)/300; 
//     console.log("Percentage of these marks: "+pert+"%")
//     console.log("Average of these marks: "+avg)
// }

// function mainFunc(){
//     var eng=+prompt("Enter eng subject marks: ")
//     var urdu=+prompt("Enter urdu subject marks: ")
//     var comp=+prompt("Enter comp subject marks: ")
//     marks(eng,urdu,comp);
// }
// mainFunc();

//Task-5
// var text='yasrab'
// var y=text.indexOf('a');
// console.log(y)

// function indexFind(text,char){
//     for(var i=0;i<text.length;i++){
//         if(char==text[i]){
//             console.log(char+" is at "+ i + " place")
//         }
//     }
// }
// var text="Yasrab memon"
// var char='a';
// indexFind(text,char);

//Task-6
// function deleteVowels(){
//     var sent=prompt("Enter sentence:");    
// if(sent.length<=25){
//     alert(sent.replace(/[aeiouAEIOU]/g, ""));
// }
// else{
//     alert("Sentence length is more than 25");
// }
// }
// deleteVowels();


//Task-7
// function findOccurrences() {
//     var str = 'Pleases read this application and give me gratuity';
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'u':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());


// Task-8
// function meter(value){
//     var inMeter=value*1000;
//     return inMeter;
// }
// function feet(value){
//     var inFeet=(value*1000)*3.28;
//     return inFeet;
// }
// function inches(value){
//     var inInches=((value*1000)*3.28)*12;
//     return inInches;
// }
// function centimeter(value){
//     var inCm=(((value*1000)*3.28)*12)*30;
//     return inCm;
// }
// var distance=+prompt("Enter the distance in km : ");
// console.log("The distance in meters = "+meter(distance));
// console.log("The distance in feets = "+feet(distance));
// console.log("The distance in inches = "+inches(distance));
// console.log("The distance in centimeters = "+centimeter(distance));

// Task-9
// var working_hours, overtime, overtime_pay=0;
//     var working_hours=+prompt("Enter the working hours of employee number");
//     if(working_hours>40){
//         overtime=working_hours-40;
//         overtime_pay=(overtime*12.00);
//         console.log("\nTotal overtime pay of employees is "+overtime_pay);
// }


//Task-10
// function wdrawAmount(){
//     var wdrawAmount=prompt("Enter three digit amount to withdraw");
//     if(wdrawAmount.length==3){
//     var hund=wdrawAmount.charAt(0);
//     alert("Hundred notes:"+hund);
//     var tens=parseInt(wdrawAmount.charAt(1)+wdrawAmount.charAt(2));
//     
   
//     if(tens/50>0){
//         alert("Fifty notes:"+Math.floor(tens/50));
//     }else{
//         alert("Fifty notes:"+0);
//     } 
 
//     if(tens-50>0){
//        var amount=Math.floor(tens-50).toString();
//        alert("Tens note:"+amount.replace('0',""));

//     }else if(tens<50){
//         var amount=tens.toString();
//        alert("Tens note:"+amount.replace('0',""));
//     }else if(tens=50){
//         alert("Tens note:"+0);
//     }
// }
// else{

//     wdrawAmount();
// }
// }
// wdrawAmount();




// ***************CHAPTER-43-48***************
 //Task-1
//  function alertme(){
//      alert("You have clicked on the link")
//  }

// Task-2
// function response(){
//     alert("Thanks for purchasing a phone from us")
// }

// Task-3
// function SomeDeleteRowFunction(o) {
//    
//     var p=o.parentNode.parentNode;
//         p.parentNode.removeChild(p);
//    }


// Task-4
// function changeimage(){
    
//     var img = document.getElementById('car');
//     img.src = "https://th.bing.com/th/id/OIP.2MS9NyW6LG1IANjBQustcgHaE7?pid=Api&rs=1"
//     //img.width="60%";
// }

// function mouseout(){
//     var img = document.getElementById('car');
//     img.src="https://i.ytimg.com/vi/MIyY8iAEvZ8/maxresdefault.jpg"   
// }

//Task-5
// n=1;
// c=0;
// function inc(){
//    n++;
//    document.getElementById("click").innerHTML=eval(n);
// }

// function dec(){
//    n--;
//    document.getElementById("click").innerHTML=eval(n);
// }


// ***********Chapter-49-52****************8
//Task-1
// function submit(){
//     var email=document.getElementById('email');
//     var password=document.getElementById('password').value;

//     alert("Your reponse has been submitted ")
//     alert("Your email is "+email.value+" is your password is "+password.value)
// }


//Task-2
// function readMore(){
//     var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium delectus reiciendis cum corrupti obcaecati autem expedita doloribus voluptate magnam debitis voluptates exercitationem, in culpa iure. Quasi similique quis maxime!";
//     var pera = document.getElementById('pera')
//     pera.innerHTML=text;
// }


//Task-3



// *********CHAPTER-58-67*************

//Task-1
//i
//var main_content=document.getElementById('main-content')
//ii
//console.log(main_content.childNodes);
//iii
//var render1=document.getElementsByClassName('render');
//console.log(render1)
//iv
//document.getElementById("first-name").value = "First Name";
//v
//document.getElementById("last-name").value = "Last Name";
//document.getElementById("email").value = "Email";

// Task-2
//i
var parent=document.getElementById('main-content')
//ii
var second=document.getElementById('main-content').childNodes[1]
//iii
var textnode = document.createTextNode("Last Name: Memon");
var item = document.getElementById("main-content").childNodes[1];
item.replaceChild(textnode, item.childNodes[0]);
//iv
var first=document.getElementById('main-content').childNodes[0]
var secont=document.getElementById('main-content').childNodes[1]
//v
var previous=document.getElementById('last-name').previousSibling;
var next=document.getElementById('last-name').nextSibling;
//vi
var parent=document.getElementById('email').parentNode;








