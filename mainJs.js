         //Used onClick
    function clickMe() {

        var ranOne = Math.floor(Math.random() * 123);
        var ranTwo = Math.floor(Math.random() * ranOne);
        var ranThree = Math.floor(Math.random() * ranTwo);

        document.querySelector('body').style.backgroundColor = "rgb( " + ranOne + "," + ranTwo + "," + ranThree + ")";


    }