function multiPurposeFunction(action) {
    if (action) {
      console.log(action(3));
    }
  }
  
  function exampleNonAnonymFunction(param) {
    return param * param;
  }
  
  function frameFunction() {
    // this function call shows an example,
    // but it is not using anonym functions
    multiPurposeFunction(exampleNonAnonymFunction());
    // write your code here
    //function
    multiPurposeFunction(function(param){
        return param * param;
    });
    //Arrow
    multiPurposeFunction(param => param * param);
  }
  
  frameFunction();

  function multiPurposeFunction(action) {
    if (action) {
      console.log(action('John', 'Smith'));
      console.log(action('', 'Bond'));
    }
  }
  
  function frameFunction() {
    // Write your code here
    multiPurposeFunction(function(a,b){
        a? [a,b].join(' ') : b;
    });

    multiPurposeFunction((a,b) => a ? [a,b].join(' ') : b);
  }
  
  frameFunction();