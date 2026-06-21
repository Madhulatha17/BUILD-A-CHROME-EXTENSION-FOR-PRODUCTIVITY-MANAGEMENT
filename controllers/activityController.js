const Activity =
require("../models/Activity");

exports.saveActivity =
async(req,res)=>{

 try{

  const activity =
  new Activity(req.body);

  await activity.save();

  res.json(activity);

 }catch(err){

  res.status(500).json(err);

 }

};

exports.getReport =
async(req,res)=>{

 const data =
 await Activity.find();

 const totalTime =
 data.reduce(
 (a,b)=>a+b.duration,
 0
 );

 res.json({
  totalSites:data.length,
  totalTime
 });

};
