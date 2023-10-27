
  // JavaScript includes many built-in methods which provide
  // functionality on the core types we've been using so far.
  //
  // You can invoke these methods by using a . and then the method name
  // followed by parenthesis. For example, to make a string uppercase,
  // you could use .toUpperCase() like this:
  console.log("Hello world!".toUpperCase()) // prints "HELLO WORLD!"

  // Task 1: Use console.log to print your name in uppercase

  console.log("Olle".toUpperCase())

  // Task 2: Find a function from the JavaScript string documentation (link below)
  //         to remove the whitespace around the string in the console.log() below.
  //
  // Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
  console.log("    No whitespace   ".trim())


  // Task 3: Find a function in the documentation to count the number of characters in a
  //         string and update the console.log() below to print the number instead of the string:

  function countChars(text) {
    return text
      .split('')
  }
  console.log(countChars("How many characters long is this string?"));

