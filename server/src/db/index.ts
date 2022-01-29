import mongose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

export const initDB = () => {
    const link: string = process.env.DB_LINK as string;
    mongose.connect(link).then(con => console.log('DB connection successful!'));
}