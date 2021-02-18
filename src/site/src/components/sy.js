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
    completedHtml: "<h3>Get a fish</h3>",
    questions: [
      {
        type: "dropdown",
        name: "wantPet",
        title: "Do you want a PET to love and care for?",
        isRequired: true,
        choices: ["Yes", "No"],
        // colCount: 0
      },
      {
        type: "dropdown",
        name: "forgetPet",
        title: "Are you likely to forget you have a PET?",
        visibleIf: "{wantPet}='Yes'",
        isRequired: true,
        choices: ["Yes", "No"],
      },
      {
        type: "dropdown",
        name: "lessThanFourDays",
        title: "For less than 4 days in a row?",
        visibleIf: "{forgetPet}='Yes'",
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
    if (typeof window !== "undefined") {
      Survey.StylesManager.applyTheme("modern")
    }

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
