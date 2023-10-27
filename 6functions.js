  // Functions are a way to store a re-usable snippet of code in a block which can
  // be run later. For example, this function would print the current time when invoked:
  const printCurrentTime = () => {
    const currentTime = new Date()
    return currentTime.toLocaleTimeString()
  }

  // Task 1: Invoke the printCurrentTime function inside a console.log():


  console.log(printCurrentTime())

  // Task 2: Write a function which, when invoked, prints your name. Then invoke it twice.

  

 function myFunc(theName) {
    theName.name = "Olle"
  }
  
  const myName = {
    name: "Olle",
  };
  
  myFunc(myName);
  console.log(myName.name , myName.name)
  
  // Task 3: Write a function called `printGreeting`. When invoked using the examples
  // below, it should print "Hello Bob" or "Hello Sue":
  //
  // printGreeting("Bob") // This should print "Hello Bob"
  // printGreeting("Sue") // This should print "Hello Sue"

  let words = [
  "Hello Bob",
  "Hello Sue"
  ]

  function printGreeting(hello) {
      return hello[Math.floor(Math.random() * hello.length)];
  }
  
      console.log(printGreeting(words))


// Olle: Detta var ett exprement för att slumpa fram "Hello Bob" eller "Hello Sue"
// Här nedan kommer Task 3:
       
  function printGreeting1(Bob) {
    return Bob = "Hello Bob";
  }

  function printGreeting1(Sue) {
    return Sue = "Hello Sue";
  }

  let Sue = printGreeting1()

  console.log(Sue)

  // Task 4: Write a function called `multiply` which multiplies two numbers together and returns the value
  // so that it can be stored in a variable. See the example below to see how it should work.
  
  function multiply( a, b) {
    return a * b;
  }

  const first = multiply(2, 2)
  console.log(first) // this should print "4"

  const second = multiply(100, 4)
  console.log(second) // this should print "400"


  // Task 5: Write a function called `warmEnough` which takes the current temperature as an argument and returns
  // `true` if it is greater than 10 and false otherwise. Comment out the code below to invoke the
  // function. It should print "Go for a run!"
  //

function warmEnough(hot) {
    return hot > 10;
}

const result = warmEnough(15);

  if (warmEnough(15)) {
     console.log("Go for a run!", result)
   }
