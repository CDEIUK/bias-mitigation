import React from "react"
import * as Survey from "survey-react"

export default class Guide extends React.Component {
  json = {
    showQuestionNumbers: "off",
    showCompletedPage: false,
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
          "Does sensitive / personally identifiable information need to be included in the dataset that is shared, or could it be useful without it?",
        visibleIf: "{two}='Raw data'",
        isRequired: true,
        choices: [
          "Sensitive information needs to be included",
          "Data could be useful without sensitive information",
        ],
      },
      {
        type: "radiogroup",
        name: "five",
        title:
          "Is the party you are sharing data with performing computation / analysis on your behalf, or for their own means?",
        visibleIf: "{four}='Sensitive information needs to be included'",
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
        title:
          "Do you want to use their data to train a predictive model or perform more traditional data science/analysis?",
        visibleIf:
          "{one}='You want to leverage data held by other parties / users'",
        isRequired: true,
        choices: [
          "Train a predictive model",
          "Traditional data science/analysis",
        ],
      },
      {
        type: "radiogroup",
        name: "seven",
        title:
          "Could it be possible to run the training algorithm on the other parties'/users' servers/devices?",
        visibleIf: "{three}='Train a predictive model'",
        isRequired: true,
        choices: ["Yes", "No"],
      },
      {
        type: "radiogroup",
        name: "eight",
        title:
          "Do you need to use sensitive/personally identifiable information in the training dataset?",
        visibleIf: "{seven}='No'",
        isRequired: true,
        choices: ["Yes", "No"],
      },
    ],
    navigateToUrlOnCondition: [
      { expression: "{six} = 'Yes'", url: "/he" },
      { expression: "{six} = 'No'", url: "/tees" },
      {
        expression:
          "{four} = 'Data could be useful without sensitive information'",
        url: "/de-id",
      },
      { expression: "{five} = 'For their own means'", url: "/dsa" },
      { expression: "{two} = 'Insights / generalisations'", url: "/dp" },
      { expression: "{seven} = 'Yes'", url: "/fl" },
      { expression: "{eight} = 'Yes'", url: "/min" },
      { expression: "{eight} = 'No'", url: "/de-id" },
      {
        expression: "{three} = 'Traditional data science/analysis'",
        url: "/fa",
      },
    ],
  }

  render() {
    return <Survey.Survey json={this.json} />
  }
}
