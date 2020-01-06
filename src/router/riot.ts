import express, {Request, Response, NextFunction, response} from 'express';
import request from 'request';

const appKey = 'RGAPI-f4a5b0f6-1133-4687-8999-8b349557e632';
const serverUrl = 'https://kr.api.riotgames.com';
const router = express.Router();

type Option = { 
    uri: string,
    method: string,
    headers?: {},
    json: boolean,
};


router.post('/getSummoner', (req: Request, res: Response, next: NextFunction)=>{
    console.log("riot.getSummoner");
    const summonerName:string = encodeURIComponent(req.body.summonerName);
    let options: Option = {
        uri: `${serverUrl}/lol/summoner/v4/summoners/by-name/${summonerName}`,
        method: "get",
        headers: {
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
            'X-Riot-Token': appKey,
            'Content-Type': 'application/json',
        },
        json: true,
      };
    
    request(options, (err, res, body)=>{
        if(!err){
            console.log(body);
        }else{
            console.log(err);
        }
        
    });

    res.send();
});



export = router;