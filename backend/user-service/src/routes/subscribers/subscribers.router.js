const express = require('express');

const { httpGetAllsubscriptions,
    httpAddNewSubscriber,
    httpAbortSubscriber} = require('./subscribers.controller')

const subscriptionsRouter = express.Router();
console.log("subscriptionsRouter run ")
subscriptionsRouter.get('/', httpGetAllsubscriptions);
subscriptionsRouter.post('/', httpAddNewSubscriber);
subscriptionsRouter.delete('/:id', httpAbortSubscriber);

module.exports = subscriptionsRouter;