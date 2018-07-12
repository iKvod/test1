import { Request, Response } from 'express';

//(/info, /latency, /logout). 
export let info = (req: Request, res: Response) => {
    res.json({
        message: 'Hi info',
    })
}

export let info = (req: Request, res: Response) => {
    res.json({
        message: 'Hi info',
    })
}

export let logout = (req: Request, res: Response) => {
    res.json({
        message: 'Hi info',
    })
}

export let latency = (req: Request, res: Response) => {
    res.json({
        message: 'Hi info',
    })
}
