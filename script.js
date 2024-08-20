let inputCount = 0;
let dataList = []; // Array to store entered data

function countInput() {
    const inputField = document.getElementById('dataInput');
    const countDisplay = document.getElementById('inputCount');

    const inputValue = inputField.value.trim();
    if (inputValue !== '') {
        inputCount++;
        dataList.push(inputValue); // Add input data to the list
        inputField.value = ''; // Clear the input field after counting
        countDisplay.textContent = inputCount;
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission behavior
        countInput();
    }
}

function downloadFile() {
    if (dataList.length > 0) {
        // Create a Blob from the dataList array
        const blob = new Blob([dataList.join('\n')], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.txt'; // Name of the file to be downloaded
        a.click();
        URL.revokeObjectURL(url); // Clean up the URL object

        // Clear the dataList after download
        dataList = [];
    }
}
