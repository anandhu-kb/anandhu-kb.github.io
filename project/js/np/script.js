document.addEventListener('DOMContentLoaded', function() {
  var saveBtn = document.getElementById('saveBtn');
  var saveInputContainer = document.getElementById('saveInputContainer');
  var fileNameInput = document.getElementById('fileNameInput');
  var saveFileBtn = document.getElementById('saveFileBtn');
  var cancelSaveBtn = document.getElementById('cancelSaveBtn');
  var txtOption = document.getElementById('txtOption');
  var htmlOption = document.getElementById('htmlOption');
  var jsOption = document.getElementById('jsOption');
  var codeInput = document.getElementById('codeInput');

  saveBtn.addEventListener('click', function() {
    saveInputContainer.style.display = 'flex';
  });

  cancelSaveBtn.addEventListener('click', function() {
    saveInputContainer.style.display = 'none';
  });

  saveFileBtn.addEventListener('click', function() {
    var fileName = fileNameInput.value.trim();
    if (fileName !== '') {
      saveTextAsFile(codeInput.value, fileName);
      saveInputContainer.style.display = 'none';
    }
  });

  txtOption.addEventListener('click', function() {
    saveInputContainer.style.display = 'flex';
    fileNameInput.placeholder = 'Enter file name with .txt extension';
  });

  htmlOption.addEventListener('click', function() {
    saveInputContainer.style.display = 'flex';
    fileNameInput.placeholder = 'Enter file name with .html extension';
  });

  jsOption.addEventListener('click', function() {
    saveInputContainer.style.display = 'flex';
    fileNameInput.placeholder = 'Enter file name with .js extension';
  });

  function saveTextAsFile(text, fileName) {
    var blob = new Blob([text], {type: 'text/plain'});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }


});

// Function to toggle dark mode and set the cookie
function toggleDarkMode() {
  const container = document.querySelector('.container');
  container.classList.toggle('dark-mode');

  // Save the dark mode preference in a cookie
  const darkModeToggle = document.querySelector('#darkModeToggle');
  const darkModeEnabled = darkModeToggle.checked;
  setCookie('darkModeEnabled', darkModeEnabled.toString(), 30);
}

// Function to set a cookie with a specified name, value, and expiration days
function setCookie(name, value, days) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + expirationDate.toUTCString();
  document.cookie = name + '=' + value + '; ' + expires + '; path=/';
}

// Function to get the value of a cookie with a specified name
function getCookie(name) {
  const cookieName = name + '=';
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return '';
}

// Function to check the user's preferred mode from the cookie and apply it
function checkPreferredMode() {
  const darkModeEnabled = getCookie('darkModeEnabled');
  const darkModeToggle = document.querySelector('#darkModeToggle');
  if (darkModeEnabled === 'true') {
darkModeToggle.checked = true;
toggleDarkMode();
}
}

// Event listener for opening a file
document.querySelector('#openBtn').addEventListener('click', function() {
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = '.txt, .html, .js';

fileInput.addEventListener('change', function(e) {
const file = e.target.files[0];
if (file) {
const reader = new FileReader();
reader.onload = function(e) {
const contents = e.target.result;
document.querySelector('#codeInput').value = contents;
};
reader.readAsText(file);
}
});

fileInput.click();
});

// Event listener for saving a file
document.querySelector('#saveBtn').addEventListener('click', function() {
document.querySelector('#saveInputContainer').style.display = 'flex';
});

// Event listener for canceling the save action
document.querySelector('#cancelSaveBtn').addEventListener('click', function() {
document.querySelector('#saveInputContainer').style.display = 'none';
});

// Event listener for saving the file with a specified name
document.querySelector('#saveFileBtn').addEventListener('click', function() {
const fileName = document.querySelector('#fileNameInput').value;
const fileType = document.querySelector('.dropdown-content .selected').getAttribute('id');
const codeContents = document.querySelector('#codeInput').value;

const blob = new Blob([codeContents], { type: 'text/plain' });
const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = fileName + '.' + fileType;
a.click();

document.querySelector('#saveInputContainer').style.display = 'none';
});

// Event listener for selecting the file type in the dropdown
const dropdownOptions = document.querySelectorAll('.dropdown-content a');
dropdownOptions.forEach(function(option) {
option.addEventListener('click', function() {
const selectedOption = document.querySelector('.dropdown-content .selected');
if (selectedOption) {
selectedOption.classList.remove('selected');
}
this.classList.add('selected');
document.querySelector('.dropbtn').textContent = this.textContent;
});
});

// Call the function to check the user's preferred mode on page load
checkPreferredMode();