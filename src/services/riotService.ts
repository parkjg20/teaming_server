import request from 'request';
import User from '../models/User';

const appKey = 'RGAPI-f4a5b0f6-1133-4687-8999-8b349557e632';
const serverUrl = 'https://kr.api.riotgames.com';

type Option = { 
    uri: string,
    method: string,
    headers?: {},
    json: boolean,
};

export default class RiotService{

    getSummonerBySummonerName = async (summonerName: string) => {
        summonerName = encodeURIComponent(summonerName);
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
        
        const user = request(options, (err?, res?): User => {
            console.log("request is running");
            if (err) {
                console.log(err);
                throw new Error("error ");
            }
            else {
                console.log(res.body);
                const user: User = new User();
                user.summonerName = (res.body.name);
                user.riotId = (res.body.id);
                user.riotAccountId = (res.body.accountId);
                console.log("user", user);
                return user;
            }
        });

        console.log("user after request", user);

    }
    
}