import { DynamoDBClient, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";

const config : DynamoDBClientConfig = {
    region:'us-east-1'
}

const client = new DynamoDBClient(config);


export default client;