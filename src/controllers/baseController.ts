import { Request, Response, NextFunction } from 'express';
import Item from '../models/baseModel'; 

 const saveItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { item } = req.body;

        const newItem = await Item.create({ item });

      
        res.status(201).json({
            success: true,
            data: newItem
        });

    } catch (error) {
        next(error); 
    }
};

 const getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
       
        const items = await Item.find();

        res.status(200).json({
            success: true,
            count: items.length,
            data: items
        });

    } catch (error) {
        next(error); 
    }
};

export  {getItems,saveItem};