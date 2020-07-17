let marks=prompt("Enter your marks here:");

//Using Conditional Statement Else-if

if (marks < 60){
    console.log("Grade : F");      
    } 
  else if (marks < 70) {
          console.log("Marks are"+marks+" and grade is D"); 
            } 
  else if (marks< 80) 
       {
          console.log(" Marks are"+marks+" and grade is C"); 
       } 
  else if (marks < 90) {
          console.log("Marks are"+marks+" and grade is B"); 
        } 
  else if (marks < 100) {
    console.log("Marks are"+marks+" and grade is A");
        }


//Using Switch-case

switch(true){
    case (marks < 60):
    console.log("Marks are" +marks+ "and grade is F");
    break;
    case (marks < 70):
    console.log("Marks are" +marks+ "and grade is D");
    break;
    case (marks < 80):
    console.log("Marks are" +marks+ "and grade is C");
    break;
    case (marks < 90):
    console.log("Marks are" +marks+ "and grade is B");
    break;
    case (marks < 100):
    console.log("Marks are" +marks+ "and grade is A");
    break;
    default:
    console.log("Failed");
            
}



