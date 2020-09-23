window.onload = function () {
    initColorPicker();
};

function initColorPicker () {
    let colorBox = document.getElementById("color-box")
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue"),
    };
    let colorPickers = document.getElementsByClassName("picker")
    setColorPickerEventListeners(colorBox, rgb, colorPickers)
}


function setColorPickerEventListeners (element, colors, pickerElements) {
    let pickerLen= pickerElements.length;
    for (let i = 0; i < pickerLen; i++) {
        pickerElements[i].addEventListener('change', () => {
            let red=colors.red.value;
            let green=colors.green.value;
            let blue=colors.blue.value;
            setElementBgColor(element, red, green, blue);
            setDisplayValues(red, green, blue)

        });
    }
/*
    rgb.red.addEventListener('change', () => {
        console.log("Red value: ", rgb.red.value);
        setBoxBgColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    });
    rgb.green.addEventListener('change', () => {
        console.log("Green value: ", rgb.green.value);
        setBoxBgColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    });
    rgb.blue.addEventListener('change', () => {
        console.log("Blue value: ", rgb.blue.value);
        setBoxBgColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
    });
*/
    function setElementBgColor (bgElement, red, green, blue) {
       let rgbVal = [red, green, blue].join(',');
        bgElement.style.backgroundColor = "rgb(" + rgbVal + ")";
    }

    function setDisplayValues (red, green, blue) {
        let redVal = document.getElementById("redVal");
        let greenVal = document.getElementById("greenVal");
        let blueVal = document.getElementById("blueVal")

        redVal.innerText = red;
        greenVal.innerText = green;
        blueVal.innerText = blue;

    }

}
