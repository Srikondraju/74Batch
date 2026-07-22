import{test} from'@playwright/test';
import { general } from '../lib/General';

test('TC004-File Upload',async({page})=>{
//test steps
const obj=new general(page);
await obj.openApplication();
await obj.login();
await obj.waitStatement();
await obj.insertphoto();
await obj.waitStatement();
});

