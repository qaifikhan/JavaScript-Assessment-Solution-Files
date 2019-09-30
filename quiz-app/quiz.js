$(document).ready(function() {
    // var quizArr = [
    //     {
    //         "id": 1,
    //         "answer": 3,
    //         "question": "Which was not one of Voldemort's Horcruxes?",
    //         "options": ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"]
    //     },
    //     {
    //         "id": 2,
    //         "answer": 1,
    //         "question": "Which of these are not one of Hagrid's many pets?",
    //         "options": ["Grawp", "Fluffy", "Aragog", "Noberta"]
    //     },
    //     {
    //         "id": 3,
    //         "answer": 3,
    //         "question": "Which class did Severus Snape always want to teach?",
    //         "options": ["Potions", "Charms", "Defense Against Dark Arts", "Transfiguration"]
    //     },
    //     {
    //         "id": 4,
    //         "answer": 3,
    //         "question": "Which Hogwarts house did Moaning Myrtle belong in?",
    //         "options": ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
    //     },
    //     {
    //         "ques_id": 5,
    //         "answer": 2,
    //         "question": "What class did Neville end up teaching at Hogwarts?",
    //         "options": [
    //             "Astronomy",
    //             "Herbology",
    //             "Charms",
    //             "Muggle Studies"
    //         ]
    //     }
    // ]

    function createQuizOption(value, id, pos) {
        //     <div class="option-wrapper">
        //         <label>
        //             <input type="radio" required name="q1" value="4" >
        //             <p>Tom Riddle's Diary</p>
        //         </label>
        //     </div>

        var mainDiv = document.createElement('div');
        mainDiv.classList.add('option-wrapper');

        var label = document.createElement('label');
        var inputRadio = document.createElement('input');
        inputRadio.type = 'radio';
        inputRadio.required = true;
        inputRadio.name = 'q'+id;
        inputRadio.value = parseInt(pos) + 1;

        var para = document.createElement('p');
        para.innerHTML = value;

        label.appendChild(inputRadio);
        label.appendChild(para);

        mainDiv.appendChild(label);

        return mainDiv;
    }

    function createQuizQuestion(obj) {
        // <section class="quiz-item">
        //     <h3>Q1.Which was not one of Voldemort's Horcruxes?</h3>
        //     <div class="option-wrapper">
        //         <label>
        //             <input type="radio" required name="q1" value="1">
        //             <p>Harry</p>
        //         </label>
        //     </div>
        //     <div class="option-wrapper">
        //         <label>
        //             <input type="radio" required name="q1" value="2" >
        //             <p>Nagini</p>
        //         </label>
        //     </div>
        //     <div class="option-wrapper">
        //         <label>
        //             <input type="radio" required name="q1" value="3" >
        //             <p>Helga's Diadem</p>
        //         </label>
        //     </div>
        //     <div class="option-wrapper">
        //         <label>
        //             <input type="radio" required name="q1" value="4" >
        //             <p>Tom Riddle's Diary</p>
        //         </label>
        //     </div>
        // </section> 

        var mainSection = document.createElement('section');
        mainSection.classList.add('quiz-item');

        var question = document.createElement('h3');
        question.innerHTML = 'Q'+obj.id + '. ' + obj.question;

        mainSection.appendChild(question);
        for(var i=0; i< obj.options.length; i++) {
            mainSection.appendChild(createQuizOption(obj.options[i], obj.id, i));
        }

        return mainSection;
    }

    function addSubmitButton() {
        // <section id="submit-section">
        //     <input id="btn-submit" type="submit" value="Submit" />
        // </section>

        var mainSection = document.createElement('section');
        var submitBtn = document.createElement('input');
        submitBtn.id = 'btn-submit';
        submitBtn.type = 'submit';
        submitBtn.value = 'Submit';

        mainSection.appendChild(submitBtn);

        return mainSection;
    }

    $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz', function(data) {
        localStorage.setItem('quiz', JSON.stringify(data));
        // quizArr = data;
        $('.quiz').html('');

        for(var i=0; i<data.length; i++) {
            $('.quiz').append(createQuizQuestion(data[i]));
        }

        $('.quiz').append(addSubmitButton());
    })

    if(location.search !== '') {
        var quizArr = localStorage.getItem('quiz');
        quizArr = JSON.parse(quizArr);
        console.log(location.search);
        console.log(quizArr);
        var solution = location.search.split('?');
        solution = solution[1].split('&');

        var correctCount = 0;
        for(var i=0; i<quizArr.length; i++) {
            console.log('i=>', i);
            console.log(solution[i].split('='));
            console.log('q'+quizArr[i].id);

            if(solution[i].split('=')[0] === ('q'+quizArr[i].id)) {
                // console.log(parseInt(solution[i].split('=')[1]))
                // console.log(quizArr[i].answer);
                // console.log('====')
                if(parseInt(solution[i].split('=')[1]) === parseInt(quizArr[i].answer)) {
                    correctCount += 1;
                }
            }
        }

        $('#modal-wrapper').css("display", "block");
        $('#result').html(correctCount + '/' + quizArr.length);
    }

    $('#backdrop').click(function() {
        location.search = '';
        $('#modal-wrapper').css("display", "none");
    })
})