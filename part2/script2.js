var actors = [
  {
      name: "Leonardo DiCaprio",
      age: 41,
      numOscars: 1,
      hello: function() {
          console.log("Hello, my name is " + this.name + ".");
          },
      hasMoreOscarsThan: function(x) {
          if(this.numOscars > x.numOscars) {
              return true;
          } else {
              return false;
          }
      }
  },
  {
      name: "Jennifer Lawrence",
      age: 25,
      numOscars: 1,
      hello: function() {
          console.log("Hello, my name is " + this.name + ".");
          },
      hasMoreOscarsThan: function(x) {
          if(this.numOscars > x.numOscars) {
              return true;
          } else {
              return false;
              }
          },
  },
  {
      name: "Samuel L. Jackson", 
      age: 67,
      numOscars: 0,
      hello: function() {
          console.log("Hello, my name is " + this.name + ".");
          },
      hasMoreOscarsThan: function(x) {
          if(this.numOscars > x.numOscars) {
              return true;
          } else {
              return false;
          }
      }
  },
  {
      name: "Meryl Streep",
      age: 66,
      numOscars: 3, 
      hello: function() {
          console.log("Hello, my name is " + this.name + ".");
          },
      hasMoreOscarsThan: function(x) {           
          if(this.numOscars > x.numOscars) {
              return true;
          } else {
              return false;
          }
      }
  },
  {
      name: "John Cho",
      age: 43,
      numOscars: 0, 
      hello: function() {
          console.log("Hello, my name is " + this.name + ".");
          },
      hasMoreOscarsThan: function(x) {  
          if(x.numOscars > this.numOscars) {
               return true;
          } else {
               return false;
          }
      }
  } 
];

var object = [
  { 
      name: "J Law",
      numOscars: 1,
      whatev: function(x) {
          if(this.hasOwnProperty(name)){
              // if(this.numOscars > )
              
          //     console.log(this.name);
          // } else { 
          //     console.log("vfnkljn");
          }  
      }
  },
  { 
      name: "M Streep",
      numOscars: 3 
  },
  ];
  
  // var foo = [
  //     {
  //     name: "Kowalski",
  //     numOscars : 11
  //  }
  
  // ]
  
  // for(var i in object[0]){
  //     // console.log(name[i]); // alerts key
  //     // console.log(foo[0].numOscars); //alerts key's value
  //     console.log(Object.keys(foo[0]))
  //   }
  
    celeb = {
      name : "Jane",
      numOscars : 3
  }
  function Hollywood(x) {
      for(var propName in celeb) {
          if(celeb.hasOwnProperty(propName)) {
              var propValue = celeb[propName];
              // console.log(propValue);
          }
      }
  }
  
  Hollywood();
  
  if(celeb.hasOwnProperty(name)) {
      // console.log(true);
  }
  
  
  // if(object[0].hasOwnProperty(name)){
  //     console.log(object[0].name);
  // } else { 
  //     console.log("vfnkljn");
  // }
  
  // for (var numOscars in object["J Law"]) {
  //   if (numOscars >0) {
  //     console.log(true); // 'a'
  //     // console.log(object[numOscars]); // 'hello'
  //   } else {
  //       console.log(false);
  //   }
  // } 
  
  let obj = {
      name: "abc"
  }
  
  // function showProps(obj, objName) {
  //     var result = '';
  //     for (var i in obj) {
  //       // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
  //       if (obj.hasOwnProperty(i)) {
  //         result += objName + '.' + i + ' = ' + obj[i] + '\n';
  //       }
  //     }
  //     return result;
  //   }
  //   console.log(showProps);
  
  
  // implementowac do kazdej funkcji
  // a potem wyeksportowac do jakiegos objektu, zeby nie powtarzac ciagle tego;
  
  // console.log(actors[0].numOscars);
  // console.log(actors[0]['Meryl Streep'].hasMoreOscarsThan(4));
  