import express ,{Router} from 'express';  
import {getUmbrella,weatherStateToday,weatherStateTomorrow} from './actions'
const router=Router();

//test
const lat=33.5731;
const lon= -7.5898;

//Routes
router.get('/weather',(req,res)=>{
    getUmbrella(lat,lon).then(function (response) {
        var test=JSON.stringify({
            'today':weatherStateToday(response),
            'tomorrow':weatherStateTomorrow(response)
        })
        console.log(test)
        res.send(test) // now the data is accessable from here.
    }).catch(function (err) {
        console.log(err);
    });
    
})



export default router;