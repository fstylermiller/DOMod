'use strict';

const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const parser = require('himalaya');

console.log('here');

router.post('/trips', (req, res, next) => {
  console.log('posting!');
});

module.exports = router;
