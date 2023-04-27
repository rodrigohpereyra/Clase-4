let myDom = document; //document es un objeto global

let name = "Firlais";

const myDog = {
    name: "Firulais"
};

const myCat = {
    "name": "Kity"
};

console.log(myDog.name);
console.log(myCat.name);

/*
class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}*/


function Mouse(name, age) {
    this.name = name;
    this.age = age;
}

const myMouse = new Mouse("Perez", 4);

class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
        // completa this.text
    }

    // Invente yo diseño mio...
    render(){
        let myApp = document.getElementById(this.parentID);

        const myButtonHTML = myApp.innerHTML + "<button>"+ this.text + "</button>";

        myApp.innerHTML = myButtonHTML; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
}

// Construir el objeto boton
// y llamar al metodo render de ese objeto.
//let myButon = new Button("app", "Login magico....");
//myButon.render();

//let myButon2 = new Button("app", "Signup..");
//myButon2.render();


// myButon.metodoQueSea()

class Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        // if type != opciones validas... entonces poner un valor por default.
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);

        const myInputHTML = myApp.innerHTML + "<input type="+ this.type + ">";

        myApp.innerHTML = myInputHTML; // VAmos a escribir el html para que se 
       
    }   
}

let myInput = new Input("footer", "checkbox");
myInput.render();

let myInput2 = new Input("footer", "date");
myInput2.render();

let myInput3 = new Input("footer", "password");
myInput3.render();

let mySuperArrayofStrings = ["Login" , "Signup" , "Reset" ];