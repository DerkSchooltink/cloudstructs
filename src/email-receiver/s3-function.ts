// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for S3Function
 */
export interface S3FunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/email-receiver/s3.
 */
export class S3Function extends lambda.Function {
  constructor(scope: Construct, id: string, props?: S3FunctionProps) {
    super(scope, id, {
      description: 'src/email-receiver/s3.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/email-receiver/s3.lambda')),
    });
  }
}