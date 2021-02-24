#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkBackEndStack } from '../lib/cdk_back_end-stack';

const app = new cdk.App();
new CdkBackEndStack(app, 'CdkBackEndStack');
