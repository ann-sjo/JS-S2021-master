function firstButton(){

    var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
  
    var data = JSON.parse(text);
    var firstName = data.employees[0].firstName;
    var lastName = data.employeed[0].lastName;

    document.getElementById("").innerHTML = firstName + " " + lastName;
  }
  
  // looppi taulukon tulostukseen
  function thirdButton(){
    var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    var data = JSON.parse(text);

    document.getElementById("jsondata").innerHTML = " ";

  for(i=0; i<2; i++){
    var firstName = data.employees[i].firstName;
    var lastName = data.employees[i].lastName;

    document.getElementById("jsondata").innerHTML += firstName + " " + lastName + "<br>";
  }
  
  }
