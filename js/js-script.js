// $(function(){
//   // ========== Form-select-option ========== //
//   $(".step_1").on('click', function(){
//     $(".step_1").removeClass("active");
//     $(this).addClass("active");
//   });
//   $(".step_2").on('click', function(){
//     $(".step_2").removeClass("active");
//     $(this).addClass("active");
//   });
//   $(".step_3").on('click', function(){
//     $(".step_3").removeClass("active");
//     $(this).addClass("active");
//   });
//   $(".step_4").on('click', function(){
//     $(".step_4").removeClass("active");
//     $(this).addClass("active");
//   });
//   $(".step_5").on('click', function(){
//     $(".step_5").removeClass("active");
//     $(this).addClass("active");
//   });
// });

// var currentTab = 0; // Current tab is set to be the first tab (0)
// showTab(currentTab); // Display the current tab

// function showTab(n) {
//   var x = document.getElementsByClassName("multisteps_form_panel");
//   x[n].style.display = "block";
//   if (n == 0) {
//     document.getElementById("prevBtn").style.display = "none";
//   } else {
//     document.getElementById("prevBtn").style.display = "inline";
//   }
//   if (n == (x.length - 1)) {
//     document.getElementById("nextBtn").innerHTML = "Submit";
//   } else {
//     document.getElementById("nextBtn").innerHTML = "Next Question";
//   }
//   fixStepIndicator(n);
// }

// function nextPrev(n) {
//   var x = document.getElementsByClassName("multisteps_form_panel");
//   if (n == 1 && !validateForm()) return false;
//   x[currentTab].style.display = "none";
//   currentTab += n;

//   if (currentTab >= x.length) {
//     // Calculate score and show result
//     calculateScore();
//     return true;
//   }
//   showTab(currentTab);
// }

// function validateForm() {
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("multisteps_form_panel");
//   y = x[currentTab].getElementsByTagName("input");
//   for (i = 0; i < y.length; i++) {
//     if (y[i].value == "") {
//       y[i].className += " invalid";
//       valid = false;
//     }
//   }
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid;
// }

// function fixStepIndicator(n) {
//   var i, x = document.getElementsByClassName("step");
//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   x[n].className += " active";
// }

// function calculateScore() {
//   // Define the scoring system (replace with your scoring logic)
//   const scores = {
//     'opt_1': 10,
//     'opt_2': 22,
//     'opt_3': 33,
//     'opt_4': 44,
//     'opt_5': 55,
//     'opt_6': 10,
//     'opt_7': 22,
//     'opt_8': 33,
//     'opt_9': 44,
//     'opt_10': 55,
//     'opt_11': 10,
//     'opt_12': 22,
//     'opt_13': 33,
//     'opt_14': 44,
//     'opt_15': 55,
//     'opt_16': 10,
//     'opt_17': 22,
//     'opt_18': 33,
//     'opt_19': 44,
//     'opt_20': 55,
//     'opt_21': 10,
//     'opt_22': 22,
//     'opt_23': 33,
//     'opt_24': 44,
//     'opt_25': 55
//   };

//   let totalScore = 0;

//   // Calculate the total score
//   for (let i = 1; i <= 5; i++) {
//     const selectedOption = document.querySelector(`input[name="stp_${i}_select_option"]:checked`);
//     if (selectedOption) {
//       totalScore += scores[selectedOption.id];
//     }
//   }

//   // Determine the user's level based on the total score
//   let level;
//   if (totalScore <= 150) {
//     level = "Beginner";
//   } else if (totalScore <= 200) {
//     level = "Intermediate";
//   } else {
//     level = "Advanced";
//   }

//   // Store the user's level in local storage
//   localStorage.setItem('userLevel', level);

//   // Redirect to the result page
//   window.location.href = 'result.html';
// }



















$(function(){
  // ========== Form-select-option ========== //
  $(".step_1").on('click', function(){
    $(".step_1").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_2").on('click', function(){
    $(".step_2").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_3").on('click', function(){
    $(".step_3").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_4").on('click', function(){
    $(".step_4").removeClass("active");
    $(this).addClass("active");
  });
  $(".step_5").on('click', function(){
    $(".step_5").removeClass("active");
    $(this).addClass("active");
  });
});

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  var x = document.getElementsByClassName("multisteps_form_panel");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next Question";
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("multisteps_form_panel");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab += n;

  if (currentTab >= x.length) {
    // Calculate score and show result
    calculateScore();
    return true;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("multisteps_form_panel");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

function calculateScore() {
  // Define the scoring system (replace with your scoring logic)
  const scores = {
    'opt_1': 5,
    'opt_2': 1,
    'opt_3': 1,
    'opt_4': 1,
    'opt_5': 10,
    'opt_6': 1,
    'opt_7': 5,
    'opt_8': 1,
    'opt_9': 1,
    'opt_10': 10,
    'opt_11': 1,
    'opt_12': 1,
    'opt_13': 1,
    'opt_14': 1,
    'opt_15': 10,
    'opt_16': 1,
    'opt_17': 1,
    'opt_18': 1,
    'opt_19': 5,
    'opt_20': 10,
    'opt_21': 1,
    'opt_22': 5,
    'opt_23': 1,
    'opt_24': 1,
    'opt_25': 10
  };

  let totalScore = 0;

  // Calculate the total score
  for (let i = 1; i <= 5; i++) {
    const selectedOption = document.querySelector(`input[name="stp_${i}_select_option"]:checked`);
    if (selectedOption) {
      totalScore += scores[selectedOption.id];
    }
  }

  // Determine the user's level based on the total score
  let level;
  if (totalScore <= 10) {
    level = "Beginner";
  } else if (totalScore <= 25) {
    level = "Intermediate";
  } else {
    level = "Advanced";
  }

  showCustomAlert("Score: " + level);


}

// Function to display the custom alert
function showCustomAlert(message) {
  // Check if the alert already exists, if not create one
  let alertBox = document.getElementById('customAlert');
  if (!alertBox) {
    alertBox = document.createElement('div');
    alertBox.id = 'customAlert';

    // Create a message container
    let messageContainer = document.createElement('div');
    messageContainer.id = 'alertMessage';
    alertBox.appendChild(messageContainer);

    // Create the OK button
    let okButton = document.createElement('button');
    okButton.id = 'alertOkButton';
    okButton.innerHTML = 'OK';
    okButton.addEventListener('click', function() {
      // Hide the alert and redirect when OK is clicked
      alertBox.style.display = 'none';
      window.location.href = 'thankyou.html';  // Redirect to thank you page
    });
    alertBox.appendChild(okButton);

    // Append the alert box to the body
    document.body.appendChild(alertBox);
  }

  // Set the message in the alert box
  document.getElementById('alertMessage').innerHTML = message;

  // Show the alert box
  alertBox.style.display = 'block';
}
