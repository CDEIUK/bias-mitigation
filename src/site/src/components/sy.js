import React from "react"
import * as Survey from "survey-react"

export default class Sy extends React.Component {
  //Define Survey JSON
  //Here is the simplest Survey with one text question
  //  json = {
  //     elements: [
  //      { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
  //     ]
  //    };

  json = {
    showQuestionNumbers: "off",
    completedHtml: "<h3>Use homomorphic encryption</h3>",
    questions: [
      {
        type: "radiogroup",
        name: "one",
        title: "Which of the following best matches your intended use of data?",
        isRequired: true,
        colCount: 1,
        choices: [
          "You hold the data and want to outsource / share the data to a third party / user",
          "You want to leverage data held by other parties / users",
        ],
      },
      {
        type: "radiogroup",
        name: "two",
        title:
          "Do you need to make available the raw data, or make available insights / generalisations derived from the data?",
        visibleIf:
          "{one}='You hold the data and want to outsource / share the data to a third party / user'",
        isRequired: true,
        choices: ["Raw data", "Insights / generalisations"],
      },
      {
        type: "radiogroup",
        name: "four",
        title:
          "Does the raw data contain sensitive or personally identifiable information?",
        visibleIf: "{two}='Raw data'",
        isRequired: true,
        choices: ["Yes", "No"],
      },
      {
        type: "radiogroup",
        name: "five",
        title:
          "Is the party you are sharing data with performing computation / analysis on your behalf, or for their own means?",
        visibleIf: "{four}='Yes'",
        isRequired: true,
        choices: ["On my behalf", "For their own means"],
      },
      {
        type: "radiogroup",
        name: "six",
        title:
          "Is it in important that the computation / analysis is done with low latency?",
        visibleIf: "{five}='On my behalf'",
        isRequired: true,
        choices: ["Yes", "No"],
      },
      {
        type: "radiogroup",
        name: "three",
        title: "What?",
        visibleIf:
          "{one}='You want to leverage data held by other parties / users'",
        isRequired: true,
        choices: ["Yes", "No"],
      },
    ],
  }

  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data))
  }

  model = new Survey.Model(this.json)
  render() {
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.
    // if (typeof window !== "undefined") {
    //   Survey.StylesManager.applyTheme("modern")
    // }

    // return <Survey.Survey model={model} onComplete={this.onComplete} />

    //The alternative way. react Survey component will create survey model internally
    return <Survey.Survey json={this.json} onComplete={this.onComplete} />
    // return ""
    //You may pass model properties directly into component or set it into model
    // <Survey.Survey model={model} mode="display"/>
    //or
    // model.mode="display"
    // <Survey.Survey model={model}/>
    // You may change model properties outside render function.
    //If needed react Survey Component will change its behavior and change UI.
  }
}
