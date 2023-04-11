import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

//
// DATA
//
const csvFile = "data/drug200.csv"
const trainingDrug = "Drug"
const ignored = ["Drug",
    // "Age",
    // "BP",
    // "Cholesterol",
    // "Na_to_K",
      "Sex",
]


const display = document.getElementById("display");
//Drug type A
const atypeAtype = document.getElementById("atypeAtype");
const btypeAtype = document.getElementById("btypeAtype");
const ctypeAtype = document.getElementById("ctypeAtype");
const xtypeAtype = document.getElementById("xtypeAtype");
const ytypeAtype = document.getElementById("ytypeAtype");

//Drug type B
const atypeBtype = document.getElementById("atypeBtype");
const btypeBtype = document.getElementById("btypeBtype");
const ctypeBtype = document.getElementById("ctypeBtype");
const xtypeBtype = document.getElementById("xtypeBtype");
const ytypeBtype = document.getElementById("ytypeBtype");

//Drug type C
const atypeCtype = document.getElementById("atypeCtype");
const btypeCtype = document.getElementById("btypeCtype");
const ctypeCtype = document.getElementById("ctypeCtype");
const xtypeCtype = document.getElementById("xtypeCtype");
const ytypeCtype = document.getElementById("ytypeCtype");

//Drug type X
const atypeXtype = document.getElementById("atypeXtype");
const btypeXtype = document.getElementById("btypeXtype");
const ctypeXtype = document.getElementById("ctypeXtype");
const xtypeXtype = document.getElementById("xtypeXtype");
const ytypeXtype = document.getElementById("ytypeXtype");

//Drug type Y
const atypeYtype = document.getElementById("atypeYtype");
const btypeYtype = document.getElementById("btypeYtype");
const ctypeYtype = document.getElementById("ctypeYtype");
const xtypeYtype = document.getElementById("xtypeYtype");
const ytypeYtype = document.getElementById("ytypeYtype");

//
// Laad csv data als json
//
function loadData() {
    Papa.parse("data/drug200.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => trainModel(results.data)   // Gebruik deze data om te trainen
    })
}

// MACHINE LEARNING - Decision Tree
//
function trainModel(data) {

    // todo : splits data in traindata en testdata
    data.sort(() => (Math.random() - 0.5))

    let trainData = data.slice(0, Math.floor(data.length * 0.8))
    let testData = data.slice(Math.floor(data.length * 0.8) + 1)


    // maak het algoritme aan
    let decisionTree = new DecisionTree({
        ignoredAttributes: ignored,
            trainingSet: trainData,
            categoryAttr: trainingDrug,
            maxTreeDepth: 15
    })

    // Teken de boomstructuur - DOM element, breedte, hoogte, decision tree
    let visual = new VegaTree('#view', 800, 400, decisionTree.toJSON())

    let amountCorrect = 0;

    //Type A
    let predictedAtypeButActuallyAtype = 0;
    let predictedAtypeButActuallyBtype = 0;
    let predictedAtypeButActuallyCtype = 0;
    let predictedAtypeButActuallyXtype = 0;
    let predictedAtypeButActuallyYtype = 0;

    //TypeB
    let predictedBtypeButActuallyAtype = 0;
    let predictedBtypeButActuallyBtype = 0;
    let predictedBtypeButActuallyCtype = 0;
    let predictedBtypeButActuallyXtype = 0;
    let predictedBtypeButActuallyYtype = 0;

    //TypeC
    let predictedCtypeButActuallyAtype = 0;
    let predictedCtypeButActuallyBtype = 0;
    let predictedCtypeButActuallyCtype = 0;
    let predictedCtypeButActuallyXtype = 0;
    let predictedCtypeButActuallyYtype = 0;

    //TypeX
    let predictedXtypeButActuallyAtype = 0;
    let predictedXtypeButActuallyBtype = 0;
    let predictedXtypeButActuallyCtype = 0;
    let predictedXtypeButActuallyXtype = 0;
    let predictedXtypeButActuallyYtype = 0;

    //TypeY
    let predictedYtypeButActuallyAtype = 0;
    let predictedYtypeButActuallyBtype = 0;
    let predictedYtypeButActuallyCtype = 0;
    let predictedYtypeButActuallyXtype = 0;
    let predictedYtypeButActuallyYtype = 0;

    for (let row of testData) {
        let prediction = decisionTree.predict(row)
        if (prediction == row.Drug) {
            amountCorrect++
        }

        //A type
        if (prediction =="drugA" && row.Drug == "drugA") {
            predictedAtypeButActuallyAtype++
            console.log()
        }
        if (prediction == "drugA"  && row.Drug == "drugB") {
            predictedAtypeButActuallyBtype++
        }
        if (prediction == "drugA"  && row.Drug == "drugC") {
            predictedAtypeButActuallyCtype++
        }
        if (prediction == "drugA"  && row.Drug == "drugX") {
            predictedAtypeButActuallyXtype++
        }
        if (prediction == "drugA"  && row.Drug == "drugY") {
            predictedAtypeButActuallyYtype++
        }

        //B type
        if (prediction == "drugB" && row.Drug == "drugA") {
            predictedBtypeButActuallyAtype++
        }
        if (prediction == "drugB" && row.Drug == "drugB") {
            predictedBtypeButActuallyBtype++
        }
        if (prediction == "drugB" && row.Drug == "drugC") {
            predictedBtypeButActuallyCtype++
        }
        if (prediction == "drugB"  && row.Drug == "drugX") {
            predictedBtypeButActuallyXtype++
        }
        if (prediction == "drugB"  && row.Drug == "drugY") {
            predictedBtypeButActuallyYtype++
        }

        //C type
        if (prediction == "drugC" && row.Drug == "drugA") {
            predictedCtypeButActuallyAtype++
        }
        if (prediction == "drugC" && row.Drug == "drugB") {
            predictedCtypeButActuallyBtype++
        }
        if (prediction == "drugC" && row.Drug == "drugB") {
            predictedCtypeButActuallyCtype++
        }
        if (prediction == "drugC" && row.Drug == "drugX") {
            predictedCtypeButActuallyXtype++
        }
        if (prediction == "drugC" && row.Drug == "drugY") {
            predictedCtypeButActuallyYtype++
        }

        //X type
        if (prediction == "drugX" && row.Drug == "drugA") {
            predictedXtypeButActuallyAtype++
        }
        if (prediction == "drugX" && row.Drug == "drugB") {
            predictedXtypeButActuallyBtype++
        }
        if (prediction == "drugX" && row.Drug == "drugC") {
            predictedXtypeButActuallyCtype++
        }
        if (prediction == "drugX" && row.Drug == "drugX") {
            predictedXtypeButActuallyXtype++
        }
        if (prediction == "drugX" && row.Drug == "drugY") {
            predictedXtypeButActuallyYtype++
        }

        //Y type
        if (prediction == "drugY" && row.Drug == "drugA") {
            predictedYtypeButActuallyAtype++
        }
        if (prediction == "drugY" && row.Drug == "drugB") {
            predictedYtypeButActuallyBtype++
        }
        if (prediction == "drugY" && row.Drug == "drugC") {
            predictedYtypeButActuallyCtype++
        }
        if (prediction == "drugY" && row.Drug == "drugX") {
            predictedYtypeButActuallyXtype++
        }
        if (prediction == "drugY" && row.Drug == "drugY") {
            predictedYtypeButActuallyYtype++
        }

    }

    // todo : maak een prediction met een sample uit de testdata
    let accuracy = amountCorrect / testData.length
    console.log(accuracy)
    display.innerText = `Accuracy: ${accuracy}`;

    // todo : bereken de accuracy met behulp van alle test data
    // A type
    atypeAtype.innerText = `${predictedAtypeButActuallyAtype}`;
    btypeAtype.innerText = `${predictedAtypeButActuallyBtype}`;
    ctypeAtype.innerText = `${predictedAtypeButActuallyCtype}`;
    xtypeAtype.innerText = `${predictedAtypeButActuallyXtype}`;
    ytypeAtype.innerText = `${predictedAtypeButActuallyYtype}`;

    //B type
    atypeBtype.innerText = `${predictedBtypeButActuallyAtype}`;
    btypeBtype.innerText = `${predictedBtypeButActuallyBtype}`;
    ctypeBtype.innerText = `${predictedBtypeButActuallyCtype}`;
    xtypeBtype.innerText = `${predictedBtypeButActuallyXtype}`;
    ytypeBtype.innerText = `${predictedBtypeButActuallyYtype}`;

    //C type
    atypeCtype.innerText = `${predictedCtypeButActuallyAtype}`;
    btypeCtype.innerText = `${predictedCtypeButActuallyBtype}`;
    ctypeCtype.innerText = `${predictedCtypeButActuallyCtype}`;
    xtypeCtype.innerText = `${predictedCtypeButActuallyXtype}`;
    ytypeCtype.innerText = `${predictedCtypeButActuallyYtype}`;

    //X type
    atypeXtype.innerText = `${predictedXtypeButActuallyAtype}`;
    btypeXtype.innerText = `${predictedXtypeButActuallyBtype}`;
    ctypeXtype.innerText = `${predictedXtypeButActuallyCtype}`;
    xtypeXtype.innerText = `${predictedXtypeButActuallyXtype}`;
    ytypeXtype.innerText = `${predictedXtypeButActuallyYtype}`;

    //Y type
    atypeYtype.innerText = `${predictedYtypeButActuallyAtype}`;
    btypeYtype.innerText = `${predictedYtypeButActuallyBtype}`;
    ctypeYtype.innerText = `${predictedYtypeButActuallyCtype}`;
    xtypeYtype.innerText = `${predictedYtypeButActuallyXtype}`;
    ytypeYtype.innerText = `${predictedYtypeButActuallyYtype}`;


    //Save
    let json = decisionTree.stringify()
    console.log(`JSON: ${json}`)
}


loadData()