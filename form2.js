

function myfunc2(event) {
    event.preventDefault();

    var hsc_name = document.getElementById('hsc-name').value;
   

    var hsc_board = document.getElementById('board-name1').value;
   // var email = document.getElementById('email').value;

    var score_board1 = document.getElementById('score-board1').value;
    // var temp_gender = document.getElementById('sectionidb').value;

    var ssc_name = document.getElementById('ssc-name').value;
   // var father_last_name = document.getElementById('father-last-name').value;

    var ssc_board = document.getElementById('board-name2').value;




    var board_score2 = document.getElementById('score-board2').value;

    var current_pursue = document.getElementById('current-pur').value;
    var current_edu = document.getElementById('current-edu').value;

    var overall_marks = document.getElementById('overall').value;

    var backlogs = document.getElementById('current-back').value;
  //  var telephone_home = document.getElementById('telephone-home').value;


    localStorage.setItem('hsc_name', hsc_name);
    localStorage.setItem('hsc_board', hsc_board);

    localStorage.setItem('score_board1',score_board1);
    localStorage.setItem('ssc_name', ssc_name);

    localStorage.setItem('ssc_board', ssc_board);
   // localStorage.setItem('father_last_name', father_last_name);

    localStorage.setItem('board_score2', board_score2);

    localStorage.setItem('current_pursue', current_pursue);

    localStorage.setItem('current_edu', current_edu);
    localStorage.setItem('overall_marks', overall_marks);
    localStorage.setItem('backlogs', backlogs);
   

    //  localStorage.setItem('Is_temp_gender', temp_gender);




    // telephone number validation
    /*
        }
        }
        */
       document.getElementById('next').addEventListener('click', move );
       function move (){
        window.location.assign("imageupload.html");
        alert("successfully submitted ");
       }

      
}

 
       
       

