//To provide all re-usable functions and methods related to whole application

import { global } from "./Global";

export class general extends global{
    //user defined methods
    async openApplication(){
        await this.page.goto(this.url);
        console.log("Application opened");
    }

    async login(){
        await this.page.locator(this.textbox_loginname).fill(this.userName);
        await this.page.locator(this.textbox_password).fill(this.password);
        await this.page.locator(this.button_login).click();
        console.log("login completed");

    }
    async logout(){
        await this.page.locator(this.link_logout).click();
        console.log("Logout completed");

    }

    async addNewEmployee(){
        const frame=this.page.frameLocator(this.empInfo_frame);
        await frame.locator(this.button_add).click();
        await frame.locator(this.textbox_firstname).fill(this.employeefirstname);
        await frame.locator(this.textbox_lastname).fill(this.employeelastname);
        await frame.locator(this.button_save).click();
        console.log("Employee Details added successfully");
    }
    async searchEmployeeInfo(){
    const frame=this.page.frameLocator(this.empInfo_frame);
    await frame.locator(this.dropdown_searchBy).selectOption(this.searchBy);
    await frame.locator(this.textbox_searchFor).fill(this.searchfor);
    await frame.locator(this.button_search).click();
    

}
async deleteEmployeeInfo(){
    const frame=this.page.frameLocator(this.empInfo_frame);
    await frame.locator(this.checkbox_info).check();
    console.log("Employee details checked successfully");
    await frame.locator(this.button_delete).click();
    console.log("Employee details deleted successfully");

}
async insertphoto(){
    const frame=this.page.frameLocator(this.empInfo_frame);
    await frame.locator(this.button_add).click();
    await frame.locator(this.textbox_firstname).fill(this.employeefirstname);
    await frame.locator(this.textbox_lastname).fill(this.employeelastname);
    await frame.locator(this.button_chooseFile).setInputFiles(this.chooseFile);
    await frame.locator(this.button_save).click();
    console.log("File uploaded successfully");
}
    async waitStatement(){
    await this.page.waitForTimeout(3000); // Wait for 3 seconds
}

}
