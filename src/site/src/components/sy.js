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
    completedHtml:
      "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
    completedHtmlOnCondition: [
      {
        expression: "{nps_score} > 8",
        html:
          "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>",
      },
      {
        expression: "{nps_score} < 7",
        html:
          "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>",
      },
    ],
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "rating",
            name: "nps_score",
            title:
              "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
            isRequired: true,
            rateMin: 0,
            rateMax: 10,
            minRateDescription: "(Most unlikely)",
            maxRateDescription: "(Most likely)",
          },
          {
            type: "checkbox",
            name: "promoter_features",
            visibleIf: "{nps_score} >= 9",
            title: "What features do you value the most?",
            isRequired: true,
            validators: [
              {
                type: "answercount",
                text: "Please select two features maximum.",
                maxCount: 2,
              },
            ],
            hasOther: true,
            choices: [
              "Performance",
              "Stability",
              "User Interface",
              "Complete Functionality",
            ],
            otherText: "Other feature:",
            colCount: 2,
          },
          {
            type: "comment",
            name: "passive_experience",
            visibleIf: "{nps_score} > 6  and {nps_score} < 9",
            title: "What is the primary reason for your score?",
          },
          {
            type: "comment",
            name: "disappointed_experience",
            visibleIf: "{nps_score} notempty",
            title:
              "What do you miss and what was disappointing in your experience with us?",
          },
        ],
      },
    ],
    showQuestionNumbers: "off",
  }
  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data))
  }
  render() {
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.
    Survey.StylesManager.applyTheme("modern")

    var model = new Survey.Model(this.json)
    return <Survey.Survey model={model} onComplete={this.onComplete} />
    /*
    //The alternative way. react Survey component will create survey model internally
    return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
    */
    //You may pass model properties directly into component or set it into model
    // <Survey.Survey model={model} mode="display"/>
    //or
    // model.mode="display"
    // <Survey.Survey model={model}/>
    // You may change model properties outside render function.
    //If needed react Survey Component will change its behavior and change UI.
  }
}
