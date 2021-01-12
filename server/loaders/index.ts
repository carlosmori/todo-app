import bodyParser from "body-parser";
import cors from "cors";
import {routes} from "../routes";
const initApplication = async ({expressApp} : any) => {
    await expressApp.use(bodyParser.urlencoded({extended: false}));

    // * Parse application/json
    await expressApp.use(bodyParser.json());
    await expressApp.use(cors());
    await routes({expressApp});
    return expressApp;
}
export {initApplication};
