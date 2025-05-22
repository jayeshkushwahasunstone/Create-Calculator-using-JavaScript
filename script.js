let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let themeToggle = document.getElementById('themeToggle');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    let buttonText = e.target.innerHTML;

    if (buttonText === '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } else if (buttonText === 'Ac') {
      string = "";
      input.value = string;
    } else if (buttonText === 'DEL') {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += buttonText;
      input.value = string;
    }
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  let key = e.key;
  if (/[\d\.\+\-\*\/\%]/.test(key)) {
    string += key;
    input.value = string;
  } else if (key === 'Enter') {
    try {
      string = eval(string);
      input.value = string;
    } catch {
      input.value = "Error";
      string = "";
    }
  } else if (key === 'Backspace') {
    string = string.slice(0, -1);
    input.value = string;
  } else if (key === 'Escape') {
    string = "";
    input.value = string;
  }
});

// Theme toggle
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light');
});
