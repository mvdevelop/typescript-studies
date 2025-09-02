
// -- Recomendado --
// Conditional
const body01 = document.querySelector('body');
if (body01) body01.style.background = 'red';

// Type assertion
const body03 = document.querySelector('body') as HTMLBodyElement;
body03.style.background = 'red';

// HTMLELEMENT
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer valor';
input.focus();

// -- Não Recomendado --
// Non-null assertion (!)
const body02 = document.querySelector('body')!;
body02.style.background = 'red';

// Type assertion
const body04 = (document.querySelector('body') as unknown) as number;
