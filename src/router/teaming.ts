import express, {Request, Response, NextFunction} from 'express';
import User from '../models/User';

const router = express.Router();

router.post('/register', (req: Request, res: Response, next: NextFunction)=>{
    
    res.send("success router");
})

router.post('/', (req: Request, res: Response, next: NextFunction)=>{

})

export = router;