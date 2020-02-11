class TeamingError{

    constructor(errorMessage: string , errorCode: string){
        this.errorMessage = errorMessage;
        this.errorCode = errorCode;
    }

    private _errorMessage: string | undefined;
    public get errorMessage(): string | undefined {
        return this._errorMessage;
    }
    public set errorMessage(value: string | undefined) {
        this._errorMessage = value;
    }

    private _errorCode: string | undefined;
    public get errorCode(): string | undefined {
        return this._errorCode;
    }
    public set errorCode(value: string | undefined) {
        this._errorCode = value;
    }

}

export = TeamingError;