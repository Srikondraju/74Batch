//Actual Automation Test Scripts
import{test} from '@playwright/test';
import { general } from '../lib/General';

test("TC001-Login and Logout",async({page})=>{
    //Test steps
    const obj=new general(page);
    await obj.openApplication();
    await obj.login();
    await obj.logout();

});