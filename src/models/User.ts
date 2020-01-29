class User{
    private _userNo: number | undefined;
    public get userNo(): number | undefined {
        return this._userNo;
    }
    public set userNo(value: number | undefined) {
        this._userNo = value;
    }

    private _teamingId: string | undefined;
    public get teamingId(): string | undefined {
        return this._teamingId;
    }
    public set teamingId(value: string | undefined) {
        this._teamingId = value;
    }

    private _password: string | undefined;
    public get password(): string | undefined {
        return this._password;
    }
    public set password(value: string | undefined) {
        this._password = value;
    }

    private _summonerName: string | undefined;
    public get summonerName(): string | undefined {
        return this._summonerName;
    }
    public set summonerName(value: string | undefined) {
        this._summonerName = value;
    }

    private _riotId: string | undefined;
    public get riotId(): string | undefined {
        return this._riotId;
    }
    public set riotId(value: string | undefined) {
        this._riotId = value;
    }

    private _riotAccountId: string | undefined;
    public get riotAccountId(): string | undefined {
        return this._riotAccountId;
    }
    public set riotAccountId(value: string | undefined) {
        this._riotAccountId = value;
    }

    private _introduct: string | undefined;
    public get introduct(): string | undefined {
        return this._introduct;
    }
    public set introduct(value: string | undefined) {
        this._introduct = value;
    }

    private _majorPosition: number | undefined;
    public get majorPosition(): number | undefined {
        return this._majorPosition;
    }
    public set majorPosition(value: number | undefined) {
        this._majorPosition = value;
    }

    private _minorPosition: number | undefined;
    public get minorPosition(): number | undefined {
        return this._minorPosition;
    }
    public set minorPosition(value: number | undefined) {
        this._minorPosition = value;
    }

    private _most1: string | undefined;
    public get most1(): string | undefined {
        return this._most1;
    }
    public set most1(value: string | undefined) {
        this._most1 = value;
    }

    private _most2: string | undefined;
    public get most2(): string | undefined {
        return this._most2;
    }
    public set most2(value: string | undefined) {
        this._most2 = value;
    }

    private _most3: string | undefined;
    public get most3(): string | undefined {
        return this._most3;
    }
    public set most3(value: string | undefined) {
        this._most3 = value;
    }

    private _lastLoginTime: string | undefined;
    public get lastLoginTime(): string | undefined {
        return this._lastLoginTime;
    }
    public set lastLoginTime(value: string | undefined) {
        this._lastLoginTime = value;
    }

    private _regTime: string | undefined;
    public get regTime(): string | undefined {
        return this._regTime;
    }
    public set regTime(value: string | undefined) {
        this._regTime = value;
    }

    
};

export = User;
