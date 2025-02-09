import { Request, Response } from 'express';
import { Router } from 'express';

function index(req: Request, res : Response, next : any){
    res.render("index");
}

export default { index };