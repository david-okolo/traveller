const Express = require('express');
const Research = require('../models/research');
const Passport = require('passport');

const router = Express.Router();

router.get('/getResearches', Passport.authenticate('jwt', {session: false}), (req, res, next)=>{
    Research.getResearch((err, researches)=>{
        if (!err) {
            if(researches){
                res.json({
                    success: true,
                    msg: "Successfully Retrieved",
                    researchList: researches
                })
            }else {
                res.json({
                    success: false,
                    msg: "none found"
                })
            }
        }else {
            res.json({
                success: false,
                msg: "Error Occured"
            })
        }
    })
})

router.post('/addResearch', Passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let newResearch = new Research({
        countryName: req.body.countryName,
        visaTypes: req.body.visaTypes,
        visaRequirements: req.body.visaRequirements,
        travelRoutes: req.body.travelRoutes,
        flights: req.body.flights,
        averageFlightPrice: req.body.averageFlightPrice,
        address: req.body.address,
        applicationLink: req.body.applicationLink
    })

    Research.getResearchByName(req.body.countryName, (err, data) => {
        if(err) {
            res.json({
                success: false,
                msg: "Failed to connect"
            });
        }

        if(data){
            res.json({
                success: false,
                msg: "Country Data already exists!"
            });
        }else{
            Research.addResearch(newResearch, (err, research) => {
                if (!err){
                    res.json({
                        success: true,
                        msg: "Successfully Added"
                    })
                }else {
                    res.json({
                        success: false,
                        msg: "Error Occurred"
                    })
                }
            })
        }
    })
})

router.post('/updateResearch', Passport.authenticate('jwt', {session: false}), (req, res, next) => {

    let researchUpdate = {
        countryName: req.body.countryName,
        visaTypes: req.body.visaTypes,
        visaRequirements: req.body.visaRequirements,
        travelRoutes: req.body.travelRoutes,
        flights: req.body.flights,
        averageFlightPrice: req.body.averageFlightPrice,
        address: req.body.address,
        applicationLink: req.body.applicationLink
    }

    let queryId = req.body._id;


    Research.updateResearchById(queryId, researchUpdate, (err, status)=>{
        if (!err) {
            if(status.nModified >= 1){
                res.json({
                    success: true,
                    msg: "Successfully Updated",
                });
            }else {
                res.json({
                    success: false,
                    msg: 'No record was modified'
                });
            }
        }else {
            res.json({
                success: false,
                msg: 'An error occurred'
            });
        }
    })
})

router.post('/deleteResearch', Passport.authenticate('jwt', {session: false}), (req, res, next) => {

    let researchId = req.body.id;

    if (researchId != ""){
        Research.deleteResearchById(researchId, (err, research) => {
            if (!err) {
                if(research){
                    res.json({
                        success: true,
                        msg: 'Successfully Deleted'
                    })
                }else{
                    res.json({
                        success: false,
                        msg: 'No document found'
                    })
                }
            }else{
                res.json({
                    success: false,
                    msg: 'An error occurred'
                })
            }
        })
    }else {
        res.json({
            success: false,
            msg: 'No Document was passed'
        })
    }
})

module.exports = router;