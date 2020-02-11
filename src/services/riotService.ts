import request from 'request-promise-native';
import User from '../models/User';
import TeamingError from '../models/TeamingError';

const appKey = 'RGAPI-f4a5b0f6-1133-4687-8999-8b349557e632';
const serverUrl = 'https://kr.api.riotgames.com';

type Option = { 
    uri: string,
    method: string,
    headers?: {},
    json: boolean,
};

export default class RiotService{

    getSummonerBySummonerName = async (summonerName: string): Promise<User | TeamingError> => {
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

        return await request(options).then((res): User | TeamingError => {
            const user: User = new User();

            user.summonerName = res.name;
            user.riotId = res.id;
            user.riotAccountId = res.accountId;
            user.puuid = res.puuid;
            user.level = res.summonerLevel;
            user.profileIcon = res.profileIcon;
            
            return user;
        }).catch(err => {
            console.log(err.error.status.message);
            const error: TeamingError = new TeamingError(err.error.status.message, err.error.status.status_code);

            return error;
        });  
    }
    
}
