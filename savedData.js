import {DecisionTree} from "./libraries/decisiontree.js"


//HTML
const display = document.getElementById("display");
const testButton = document.querySelector("#test");

testButton.addEventListener("click", () => loadSavedModel() && console.log("Loading saved model.."));

function loadSavedModel() {
    fetch("./model.json")

        .then((response) => response.json())
        .then((model) => modelLoaded(model))

}

function modelLoaded(model) {
    let decisionTree = new DecisionTree(model)

    let ageValue = document.getElementById('Age').value;
    let bpValue = document.getElementById('BP').value;
    let cholesterolValue = document.getElementById('Cholesterol').value;
    let na_to_kValue = document.getElementById('Na_to_K').value;

    console.log(`${ageValue} + ${bpValue} + ${cholesterolValue} + ${na_to_kValue}`)

    // TEST DATA
    let data = {Age: ageValue, BP: bpValue, Cholesterol: cholesterolValue, Na_to_K: na_to_kValue}

    let prediction = decisionTree.predict(data)
    console.log("Predicted: " + prediction)

    if (prediction) {
        display.innerText = `The outcome is ${prediction}.`
    }
}