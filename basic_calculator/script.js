let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.getAttribute('data-value');
    
    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value); // Use eval for basic calculations
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});
