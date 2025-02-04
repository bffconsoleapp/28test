```
const typeDefs = `
    schema {
        query: Query
        mutation: Mutation
    }

    type Credit_Union {
        id: ID!
        Contract_Number: String!
        Credit_Union_Name: String!
        Premium_Reports: [Premium_Report]
        Premium_Adjustments: [Premium_Adjustment]
        Single_Premium_Certificate_Returns: [Single_Premium_Certificate_Return]
    }

    type Premium_Report {
        id: ID!
    }

    type Premium_Adjustment {
        id: ID!
        Product_Name: String!
        Report_Period: String!
        Status: String!
        Last_Update: String!
        Period_Ending: String!
        Adjustment_Type_to_the_Credit_Union: String!
        Comment: String!
        Total_Borrower_Fees_: Float!
        CU_Retail_Rate: Float!
        Protected_Loan_Amount: Float!
        Pay_Rate: Float!
        Premium_Due: Float!
        Total_Amount: Float!
    }

    type Single_Premium_Certificate_Return {
        id: ID!
    }

    input Credit_UnionInput {
        id: ID!
        Contract_Number: String!
        Credit_Union_Name: String!
    }

    input Premium_AdjustmentInput {
        id: ID!
        Product_Name: String!
        Report_Period: String!
        Status: String!
        Last_Update: String!
        Period_Ending: String!
        Adjustment_Type_to_the_Credit_Union: String!
        Comment: String!
        Total_Borrower_Fees_: Float!
        CU_Retail_Rate: Float!
        Protected_Loan_Amount: Float!
        Pay_Rate: Float!
        Premium_Due: Float!
        Total_Amount: Float!
    }

    type Query {
        getCreditUnionById(id: ID!): Credit_Union
        getAllCreditUnions: [Credit_Union]
        getPremiumAdjustmentById(id: ID!): Premium_Adjustment
        getAllPremiumAdjustments: [Premium_Adjustment]
    }

    type Mutation {
        createCreditUnion(input: Credit_UnionInput): Credit_Union
        createPremiumAdjustment(input: Premium_AdjustmentInput): Premium_Adjustment
    }
`;
```

```js
// codegen-start-resolver
const resolvers = {
    Query: {
        getCreditUnionById: (parent, args, context, info) => {
            // Placeholder data, replace with actual data fetching logic
            return {
                id: args.id,
                Contract_Number: "CN-1234",
                Credit_Union_Name: "Union Ltd."
            };
        },
        getAllCreditUnions: () => {
            // Placeholder data
            return [
                {
                    id: "1",
                    Contract_Number: "CN-1234",
                    Credit_Union_Name: "Union Ltd."
                }
            ];
        },
        getPremiumAdjustmentById: (parent, args, context, info) => {
            // Placeholder data
            return {
                id: args.id,
                Product_Name: "Product A",
                Report_Period: "Q1",
                Status: "Active",
                Last_Update: "2023-01-01",
                Period_Ending: "2023-03-31",
                Adjustment_Type_to_the_Credit_Union: "Type A",
                Comment: "No comment",
                Total_Borrower_Fees_: 1000.0,
                CU_Retail_Rate: 2.5,
                Protected_Loan_Amount: 50000.0,
                Pay_Rate: 1.5,
                Premium_Due: 1500.0,
                Total_Amount: 1650.0
            };
        },
        getAllPremiumAdjustments: () => {
            // Placeholder data
            return [
                {
                    id: "101",
                    Product_Name: "Product A",
                    Report_Period: "Q1",
                    Status: "Active",
                    Last_Update: "2023-01-01",
                    Period_Ending: "2023-03-31",
                    Adjustment_Type_to_the_Credit_Union: "Type A",
                    Comment: "No comment",
                    Total_Borrower_Fees_: 1000.0,
                    CU_Retail_Rate: 2.5,
                    Protected_Loan_Amount: 50000.0,
                    Pay_Rate: 1.5,
                    Premium_Due: 1500.0,
                    Total_Amount: 1650.0
                }
            ];
        }
    },
    Mutation: {
        createCreditUnion: (parent, args, context, info) => {
            // Simulate creating a new credit union
            return args.input;
        },
        createPremiumAdjustment: (parent, args, context, info) => {
            // Simulate creating a new premium adjustment
            return args.input;
        }
    }
};
// codegen-end-resolver
```