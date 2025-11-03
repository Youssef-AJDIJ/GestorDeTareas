const input = document.querySelector('#task');
const form = document.querySelector('form');
const resulta = document.querySelector('#resulta');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        checkbox.type = 'checkbox';
        checkbox.id = `task-${Date.now()}`;
        label.textContent = taskText;
        label.htmlFor = checkbox.id;
        li.appendChild(checkbox);
        li.appendChild(label);
        li.style.listStyle = 'none';
        resulta.appendChild(li);
        input.value = '';
    }
}); 

// cuando checkbox esta marcado, el texto se tacha
resulta.addEventListener('change', (e) => {
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') { 
        const label = e.target.nextSibling;
        if (e.target.checked) {
            label.style.textDecoration = 'line-through';
            label.style.color = 'gray';
        } else {
            label.style.textDecoration = 'none';
            label.style.color = 'black';
        }
    }
});