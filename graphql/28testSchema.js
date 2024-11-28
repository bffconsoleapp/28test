import { gql } from 'apollo-server';

-resolver
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
//

export default typeDefs;