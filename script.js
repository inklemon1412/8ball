 let responses = [
        'Joda, hvorfor ikke',
        'Nå ble jeg litt usikker',
        'Absolutt ikke',
        'Mest sannsynligvis',
        'Nja',
        'Ja, definitivt',
        'Ser bra ut, det!',
        'Burde jeg være bekymret?',
    ];


        show()
        function show(){
            document.getElementById('app').innerHTML = `
            <div id="content">
            <input type="text" id="question" />
            <div id="magic-eight-ball" class="magic-eight-ball">
                <div class="response" onclick="myFunction()">
                    <p id="number8">8</p>
                    <p id="response"></p>
                </div>
            </div>
        </div>
            `
        }
        function myFunction (){
            if(question.value.length < 1){
                alert('Oops! Du glemte å spørre meg om noe gitt!');
            } else {
                number8.innerText = "";
                var num = Math.floor(Math.random() * responses.length);
                response.innerText = responses[num];
            }

        }