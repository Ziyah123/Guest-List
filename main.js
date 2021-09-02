var names_of_people= [];

function submit() {
    var GuestName=document.getElementById("name1").value

    names_of_people.push(GuestName);

    console.log(GuestName);
    
    console.log(names_of_people);

    var length=names_of_people.length;

console.log(length);

document.getElementById("display_name").innerHTML=names_of_people.toString();
    

}


function sorting() {

    names_of_people.sort();  
     var I= names_of_people.join("<br>");

    
     console.log(names_of_people);

    document.getElementById("sorted").innerHTML=I.toString();

}

function show() {
     
    var I= names_of_people.join("<br>");

   
    console.log(names_of_people);

   document.getElementById("p1").innerHTML=I.toString();

   document.getElementById("sort_button").style.display="block";
}

function searching() {
var S= document.getElementById("s1").value;
var found=0;
var j;
for(j=0; j<names_of_people.length; j++) {
if(s==names_of_people[j]){
found=found+1;
}
}
document.getElementById("p2").innerHTML="name found"+found+" time/s";
console.log("name found"+found+"time/s");
}