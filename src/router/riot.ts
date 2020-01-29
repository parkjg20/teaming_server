import express, {Request, Response, NextFunction, response} from 'express';
import RiotService from '../services/riotService';

const router = express.Router();



router.post('/getSummoner', (req: Request, res: Response, next: NextFunction)=>{
    console.log("riot.getSummoner");
    const summonerName: string = req.body.summonerName;
    const riotService = new RiotService();
    riotService.getSummonerBySummonerName(summonerName);

    

    res.send();
});



export = router;