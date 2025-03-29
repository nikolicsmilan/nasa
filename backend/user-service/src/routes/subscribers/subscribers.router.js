const express = require('express');

const { httpGetAllsubscriptions,
    httpAddNewSubscriber,
    httpAbortSubscriber} = require('./subscribers.controller')

const subscriptionsRouter = express.Router();

subscriptionsRouter.get('/', httpGetAllsubscriptions);
subscriptionsRouter.post('/', httpAddNewSubscriber);
subscriptionsRouter.delete('/:id', httpAbortSubscriber);