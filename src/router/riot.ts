import express, {Request, Response, NextFunction, response} from 'express';
import RiotService from '../services/riotService';
import User from '../models/User';
import TeamingError from '../models/TeamingError';
import { request } from 'http';

const router = express.Router();



router.post('/getSummoner', async (req: Request, res: Response, next: NextFunction)=>{
    console.log("riot.getSummoner");
    const summonerName: string = req.body.summonerName;
    const riotService = new RiotService();
   
    const result = await riotService.getSummonerBySummonerName(summonerName);
    const date: Date = new Date(Date.now());
    if(result instanceof User){
        console.log( date+" success to find user, name = "+ summonerName);
    }else if(result instanceof TeamingError){
        console.log( date+" error occured while find user, name = "+ summonerName);
    }
    res.send(result);
});



export = router;