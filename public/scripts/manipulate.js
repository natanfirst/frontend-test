let count = 0;

const paragraph = document.querySelector('.paragraph');
const changeButton = document.getElementById('changeButton');

const updateParagraph = () => {
  count++;
  paragraph.textContent = `Paragraph after change ${count} times`;
};

changeButton.addEventListener('click', updateParagraph);