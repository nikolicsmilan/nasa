const {subscribers} =require('../../models/subscriber.model');

function httpGetAllsubscriptions(req,res){
//return res.status(200).json(subscribers.values())
return res.status(200).json(subscribers.entries())
}