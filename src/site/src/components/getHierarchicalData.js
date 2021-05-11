function getHierarchicalData() {
  var data = {
    id: 1,
    name: "Q1",
    type: "Root",
    description:
      "Which of the following best matches your intended use of data?",
    children: [
      {
        id: 2,
        name: "A1-1",
        type: "Type",
        description:
          "You hold the data and want to outsource / share the data to a third party / user",
        children: [
          {
            id: 3,
            name: "Q2",
            type: "Family",
            description:
              "Do you need to make available the raw data, or make available insights / generalisations derived from the data?",
            children: [
              {
                id: 4,
                name: "A2-1",
                type: "Organism",
                description: "Raw data",
                children: [
                  {
                    id: 6,
                    name: "Q3",
                    type: "Organism",
                    description:
                      "Does sensitive / personally identifiable information need to be included in the dataset that is shared, or could it be useful without it?",
                    children: [
                      {
                        id: 7,
                        name: "A3-1",
                        type: "Organism",
                        description:
                          "Sensitive information needs to be included",
                        children: [
                          {
                            id: 9,
                            name: "Q4",
                            type: "Organism",
                            description:
                              "Is the party you are sharing data with performing computation / analysis on your behalf, or for their own means?",
                            children: [
                              {
                                id: 10,
                                name: "A4-1",
                                type: "Organism",
                                description: "On my behalf",
                                children: [
                                  {
                                    id: 12,
                                    name: "Q5",
                                    type: "Organism",
                                    description:
                                      "Is it in important that the computation / analysis is done with low latency?",
                                    children: [
                                      {
                                        id: 13,
                                        name: "A5-1",
                                        type: "Organism",
                                        description: "Yes",
                                        children: [
                                          {
                                            id: 15,
                                            name: "RESULT",
                                            type: "Organism",
                                            description:
                                              "Homomorphic encryption. Click for further information.",
                                            link:
                                              "/adoption-guide/homomorphic-encryption",
                                            children: [],
                                          },
                                        ],
                                      },
                                      {
                                        id: 14,
                                        name: "A5-2",
                                        type: "Organism",
                                        description: "No",
                                        children: [
                                          {
                                            id: 16,
                                            name: "RESULT",
                                            type: "Organism",
                                            description:
                                              "Trusted execution environment. Click for further information.",
                                            link:
                                              "/adoption-guide/trusted-execution-environments",
                                            children: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                id: 11,
                                name: "A4-2",
                                type: "Organism",
                                description: "For their own means",
                                children: [
                                  {
                                    id: 17,
                                    name: "RESULT",
                                    type: "Organism",
                                    description:
                                      "Data sharing agreement. Click for further information.",
                                    link:
                                      "/adoption-guide/data-sharing-agreement",
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: 8,
                        name: "A3-2",
                        type: "Organism",
                        description:
                          "Data could be useful without sensitive information",
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                id: 5,
                name: "A2-2",
                type: "Organism",
                description: "Insights / generalisations",
                children: [
                  {
                    id: 18,
                    name: "RESULT",
                    type: "Organism",
                    description:
                      "Differential privacy. Click for further information.",
                    link: "/adoption-guide/differential-privacy",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 19,
        name: "A1-2",
        type: "Type",
        description: "You want to leverage data held by other parties / users",
        children: [
          {
            id: 20,
            name: "Q2",
            type: "Family",
            description:
              "Do you want to use their data to train a predictive model or perform more traditional data science/analysis?",
            children: [
              {
                id: 21,
                name: "A2-1",
                type: "Organism",
                description: "Train a predictive model",
                children: [
                  {
                    id: 23,
                    name: "Q3",
                    type: "Organism",
                    description:
                      "Could it be possible to run the training algorithm on the other parties'/users' servers/devices?",
                    children: [
                      {
                        id: 24,
                        name: "A3-1",
                        type: "Organism",
                        description: "Yes",
                        children: [
                          {
                            id: 26,
                            name: "RESULT",
                            type: "Organism",
                            description:
                              "Federated learning. Click for further information.",
                            link: "/adoption-guide/federated-learning",
                            children: [],
                          },
                        ],
                      },
                      {
                        id: 25,
                        name: "A3-2",
                        type: "Organism",
                        description: "No",
                        children: [
                          {
                            id: 27,
                            name: "Q4",
                            type: "Organism",
                            description:
                              "Do you need to use sensitive/personally identifiable information in the training dataset?",
                            children: [
                              {
                                id: 28,
                                name: "A4-1",
                                type: "Organism",
                                description: "Yes",
                                children: [
                                  {
                                    id: 30,
                                    name: "RESULT",
                                    type: "Organism",
                                    description:
                                      "Data minimisation. Click for further information.",
                                    link: "/adoption-guide/data-minimisation",
                                    children: [],
                                  },
                                ],
                              },
                              {
                                id: 29,
                                name: "A4-2",
                                type: "Organism",
                                description: "No",
                                children: [
                                  {
                                    id: 31,
                                    name: "RESULT",
                                    type: "Organism",
                                    description: "De-identification",
                                    link: "/adoption-guide/de-identification",
                                    children: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                id: 22,
                name: "A2-2",
                type: "Organism",
                description: "Traditional data science/analysis",
                children: [
                  {
                    id: 32,
                    name: "RESULT",
                    type: "Organism",
                    description:
                      "Federated analytics. Click for further information.",
                    link: "/adoption-guide/federated-analytics",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }

  return data
}

export default getHierarchicalData
