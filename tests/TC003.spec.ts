
import{test} from '@playwright/test';
import { general } from '../lib/General';

test('TC003-Delete Employee Details',async({page})=>{
    //test steps
    const obj=new general(page);
    await obj.openApplication();
    await obj.login();
    await obj.waitStatement();
    await obj.searchEmployeeInfo();
    await obj.waitStatement();
    await obj.deleteEmployeeInfo();
    await obj.waitStatement();
    await obj.logout();

});

