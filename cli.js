#!/usr/bin/env node

const empty = require('./');
const bucket = process.argv[2];

empty(bucket).catch(console.error);
