var timer;
var timeLeft;
var running = false;

function startTimer() {
    var hoursInput = parseInt(document.getElementById("hoursInput").value) || 0;
    var minutesInput = parseInt(document.getElementById("minutesInput").value) || 0;
    var secondsInput = parseInt(document.getElementById("secondsInput").value) || 0;

    if ( hoursInput<0 || hoursInput > 12 || minutesInput<0|| minutesInput > 59 || secondsInput<0 || secondsInput > 59) {
        Swal.fire({
            icon: "error",
            title: "Timer Başladılmadı",
            text: "(Hour:0-12 Minute:0-59 Second:0-59)!",
          });
        return;
    }
    else{
        let timerInterval;
        Swal.fire({
          title: "Geri Sayım  Başlasın",
          html: " Uğurlar!<b></b>",
          timer: 2596,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
         
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });

    }

    if(hoursInput=="" && minutesInput=="" && secondsInput==""){
        Swal.fire({
            icon: "warning",
            title: "Sorry",
            text: "Please Enter Number!",
          });
          return;
    }

    var hours = hoursInput;
    var minutes = minutesInput;
    var seconds = secondsInput;

    timeLeft = hours * 3600 + minutes * 60 + seconds;

    if (timeLeft > 0) {
        running = true;
        timer = setInterval(updateTimer, 1000);
        document.getElementById("startBtn").disabled = true;
    }
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        var hours = Math.floor(timeLeft / 3600);
        var minutes = Math.floor((timeLeft % 3600) / 60);
        var seconds = timeLeft % 60;

        document.getElementById("timer").innerHTML =
            (hours < 10 ? "0" : "") + hours + ":" +
            (minutes < 10 ? "0" : "") + minutes + ":" +
            (seconds < 10 ? "0" : "") + seconds;
    } else {
        stopTimer();
        resetInputs();
    }
}

function stopTimer() {
    clearInterval(timer);
    running = false;
    document.getElementById("startBtn").disabled = false;
}

function resetInputs() {
    document.getElementById("hoursInput").value = "";
    document.getElementById("minutesInput").value = "";
    document.getElementById("secondsInput").value = "";
}

document.getElementById("startBtn").addEventListener("click", startTimer);
