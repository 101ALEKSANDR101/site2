let keys = document.querySelectorAll('.key');

for (let item of keys) {
	item.onclick = onMouse;
};

let a = '';
let b = '';
let oper = '';
let disp = document.querySelector('.disp');

function onMouse(event) {
	for (let item of keys) {
		if (item.getAttribute('data') == this.getAttribute('data')) {
			itemA(item);
			itemOper(item);
			itemB(item);
			clear(item);
			sum(item);
			dif(item);
			mult(item);
			div(item);
			perc(item);
			deg(item);
			sound(item);
			console.log(a);
			console.log(oper);
			console.log(b);
		}
	}
	if (disp.innerHTML.length > 10) {
		disp.classList.add('small');
	} else if (disp.innerHTML.length <= 10) {
		disp.classList.remove('small');
	}
};

function itemA(elem) {
		if (b == '' && oper == '' && elem.getAttribute('data') !== '+' && elem.getAttribute('data') !== '-' && elem.getAttribute('data') !== '*' && elem.getAttribute('data') !== '/' && elem.getAttribute('data') !== '^' && elem.getAttribute('data') !== '%' && a.length !== 9) {
			a += elem.getAttribute('data');
			document.querySelector('.disp').innerHTML = a;
		}
};

function itemOper(elem) {
	if (elem.getAttribute('data') == '+' || elem.getAttribute('data') == '-' || elem.getAttribute('data') == '*' || elem.getAttribute('data') == '/' || elem.getAttribute('data') == '^' || elem.getAttribute('data') == '%') {
		oper = elem.getAttribute('data');
		document.querySelector('.disp').innerHTML = a + oper;
	}
};

function itemB(elem) {
	if (a !== '' && oper !== '' && elem.getAttribute('data') !== '+' && elem.getAttribute('data') !== '-' && elem.getAttribute('data') !== 'c' && elem.getAttribute('data') !== '=' && elem.getAttribute('data') !== '*' && elem.getAttribute('data') !== '/' && elem.getAttribute('data') !== '^' && elem.getAttribute('data') !== '%' && b.length !== 9) {
		b += elem.getAttribute('data');
		document.querySelector('.disp').innerHTML = a + oper + b;
	}
};

function clear(elem) {
	if (elem.getAttribute('data') == 'c') {
		a = '';
		b = '';
		oper = '';
		document.querySelector('.disp').innerHTML = 0;
	}
};

function sum(elem) {
	if (oper == '+' && elem.getAttribute('data') == '=') {
		a = Number(a) + Number(b);
		b = '';
		oper = '';
		document.querySelector('.disp').innerHTML = a;
	} else if (elem.getAttribute('data') == '+') {
		a = Number(a) + Number(b);
		b = '';
		document.querySelector('.disp').innerHTML = a + oper;
	}
};

function dif(elem) {
	if (oper == '-' && elem.getAttribute('data') == '=') {
		a = Number(a) - Number(b);
		b = '';
		document.querySelector('.disp').innerHTML = a;
	} else if (elem.getAttribute('data') == '-') {
		a = Number(a) - Number(b);
		b = '';
		document.querySelector('.disp').innerHTML = a + oper;
	}
};

function mult(elem) {
	if (oper == '*' && elem.getAttribute('data') == '=') {
		a = Number(a) * Number(b);
		b = '';
		document.querySelector('.disp').innerHTML = a;
	} else if (elem.getAttribute('data') == '*' && b !== '') {
		a = Number(a) * Number(b);
		b = '';
		document.querySelector('.disp').innerHTML = a + oper;
	}
};

function div(elem) {
	if (oper == '/' && elem.getAttribute('data') == '=') {
		a = Number(a) / Number(b);
		b = '';
		document.querySelector('.disp').innerHTML = a;
	} else if (elem.getAttribute('data') == '/' && b !== '') {
		a = Number(a) / Number(b);
		b = '';
		document.querySelector('.disp').innerHTML = a + oper;
	}
};

function perc(elem) {
	if (oper == '%' && elem.getAttribute('data') == '=') {
		a = (Number(a) / 100) * Number(b);
		b = '';
		document.querySelector('.disp').innerHTML = a;
	} else if (elem.getAttribute('data') == '%' && b !== '') {
		a = (Number(a) / 100) * Number(b);
		b = '';
		document.querySelector('.disp').innerHTML = a + oper;
	}
};

function deg(elem) {
	if (oper == '^' && elem.getAttribute('data') == '=') {
		a = Number(a) ** Number(b);
		b = '';
		document.querySelector('.disp').innerHTML = a;
	} else if (elem.getAttribute('data') == '^' && b !== '') {
		a = Number(a) ** Number(b);
		b = '';
		document.querySelector('.disp').innerHTML = a + oper;
	}
};

function sound(elem) {
	let soundClick1 = new Audio();
	let soundClick2 = new Audio();
	soundClick1.src = "button_press_single_001_11983.mp3";
	soundClick2.src = "calculator_button_press_single_002_11984.mp3";
	if (elem.getAttribute('data') == '+' && elem.getAttribute('data') == '-' && elem.getAttribute('data') == 'c' && elem.getAttribute('data') == '=' && elem.getAttribute('data') == '*' && elem.getAttribute('data') == '/' && elem.getAttribute('data') == '^' && elem.getAttribute('data') == '%') {
		soundClick2.autoplay = true;
	} else {
		soundClick1.autoplay = true;
	}
};

