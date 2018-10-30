#!/usr/bin/env node

const AWS = require('aws-sdk')
const s3 = new AWS.S3()
const empty = require('./')
const bucket = process.argv[2]

empty({ s3, bucket }).catch(console.error)
