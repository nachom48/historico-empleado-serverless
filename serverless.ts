import getHistoricoEmpleado from '@functions/getHistoricoEmpleado';
import guardarHistoricoEmpleado from '@functions/guardarHistoricoEmpleado';

import type { AWS, AwsLambdaRuntime } from '@serverless/typescript';


const serverlessConfiguration: AWS = {
  service: 'historico-empleados-api',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: [
    'serverless-webpack',
    'serverless-offline'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x' as AwsLambdaRuntime,
    profile: 'default',
    stage: '${opt:stage}',
    region: 'us-east-1',
    apiGateway: {
      apiKeys:[
        {
          name: "apiKeyHistoricoEmpleados",
          description: "Proteccion de las API´s de historico del empleado"
        }
      ],
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
    iam:{
      role:{
        statements:[
          {
            Effect: 'Allow',
            Action: [
              'dynamodb:PutItem',
              'dynamodb:GetItem'
            ],
            Resource: {
              'Fn::Join':[
                '',
                [
                  'arn:aws:dynamodb:',
                  {Ref: 'AWS::Region'},
                  ':',
                  {
                    "Ref":"AWS::AccountId"
                  },
                  ':table/historico-empleado'
                ]
              ]
            }
          },

        ]
      }
    }
  },
  // import the function via paths
  functions: { 
    getHistoricoEmpleado,
    guardarHistoricoEmpleado
  },
};

module.exports = serverlessConfiguration;

