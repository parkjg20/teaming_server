interface UserInterface {
    userNo: number,
    teamingId: string,
    password: string,
    summonerName: string,
    riotId: string,
    riotAccountId: string,
    introduct: string,
    majorPosition: number,
    minorPosition: number,
    most1: string,
    most2: string,
    most3: string,
    lastLoginTime: string,
    regTime: string
};

class User implements UserInterface{
    public userNo!: number;
    public teamingId!: string;
    public password!: string;
    public summonerName!: string;
    public riotId!: string;
    public riotAccountId!: string;
    public introduct!: string;
    public majorPosition!: number;
    public minorPosition!: number;
    public most1!: string;
    public most2!: string;
    public most3!: string;
    public lastLoginTime!: string;
    public regTime!: string;

    constructor(body: UserInterface){
        if(body.userNo !== undefined || body.userNo !== null){
            this.userNo = body.userNo;
        }
        if(body.teamingId !== undefined || body.teamingId !== null){
            this.teamingId = body.teamingId;
        }
        
        console.log("success");
    }
}

export = User;
