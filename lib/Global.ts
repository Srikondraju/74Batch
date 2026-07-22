//To Provide Test Data & objects / elements related to whole application
import {Page} from '@playwright/test';

export class global{
    constructor(public page:Page){

    }
    //********Test Data ************ */
    public url                  :string ="https://sureshitacademy.in/hrms/login.php";
    public userName             :string ="sureshit";
    public password             :string ="sureshit";
    public employeefirstname    :string="Veera";
    public employeelastname     :string="king";
    public searchBy             :string="Emp. ID"
    public searchfor            :string="8078";
    public chooseFile           :string="C:/Users/Sai Sriram/Desktop/Playwright With AI Course/HRMS/Desert.jpg"

    //******** Objects / Elements ************ */

    public textbox_loginname    :string="//input[@name='txtUserName']";
    public textbox_password     :string="//input[@name='txtPassword']";
    public button_login         :string="//input[@name='Submit']";
    public link_logout          :string="//a[text()='Logout']";
    public empInfo_frame        :string="//iframe[@id='rightMenu']";
    public button_add           :string="//input[@value='Add']";
    public textbox_firstname    :string="//input[@name='txtEmpFirstName']";
    public textbox_lastname     :string="//input[@name='txtEmpLastName']";
    public button_save          :string="//input[@value='Save']";
    public dropdown_searchBy    :string="//select[@id='loc_code']";
    public textbox_searchFor    :string="//input[@id='loc_name']";
    public button_search        :string="//input[@value='Search']";
    public checkbox_info        :string="//input[@name='chkLocID[]']";
    public button_delete        :string="//input[@value='Delete']";
    public button_chooseFile    :string="//input[@id='photofile']";

}
