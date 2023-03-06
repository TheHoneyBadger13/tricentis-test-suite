
const GeneralTest = require('../page-actions/general-test.js');
    
    describe('Automobile, Trucks, and Motorcycle Page Checking', function() {
        const generalTest = new GeneralTest();

        context('Automobile tab checking', function () {
            beforeEach(function() {
                generalTest.home();
                generalTest.goToAutomobilePage();
            });

            it('Scenario 1', function(){
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                generalTest.fillUpValidVehicleData('automobile');
                generalTest.fillUpInsurantData()
                generalTest.clickEnterProductData();
                generalTest.fillUpProductData('automobile');
                generalTest.clickSelectPriceOption();
                generalTest.fillUpPriceOption();
                generalTest.fillUpInvalidUpQuote();
                generalTest.fillUpQuote();
            });
            //additional scenario if you want to input invalid data and check for error message for each tab, then entering the valid ones
            it('check of invalid data for all tabs, then proceeding with valid ones', function(){
                Cypress.on('uncaught:exception', (err, runnable) => {
                    return false
                })
                generalTest.fillUpInvalidVehicleData('automobile');
                generalTest.fillUpValidVehicleData('automobile');
                generalTest.fillUpInvalidInsurantData();
                generalTest.fillUpInsurantData();
                generalTest.clickEnterProductData();
                generalTest.fillUpInvalidProductData('automobile');
                generalTest.fillUpProductData('automobile');
                generalTest.clickSelectPriceOption();
                generalTest.fillUpPriceOption();
                generalTest.fillUpInvalidUpQuote();
                generalTest.fillUpQuote();
            });
        });

        context('Truck tab checking', function () {
            beforeEach(function() {
                generalTest.home();
                generalTest.goToTruckPage();
            });
            it('Scenario 2', function(){
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                generalTest.fillUpValidVehicleData('truck');
                generalTest.fillUpInsurantData()
                generalTest.clickEnterProductData();
                generalTest.fillUpProductData('truck');
                generalTest.clickSelectPriceOption();
                generalTest.fillUpPriceOption();
                generalTest.fillUpInvalidUpQuote();
                generalTest.fillUpQuote();
            });
            //additional scenario if you want to input invalid data and check for error message for each tab, then entering the valid ones
            it('check of invalid data for all tabs, then proceeding with valid ones', function(){
                Cypress.on('uncaught:exception', (err, runnable) => {
                    return false
                })
                generalTest.fillUpInvalidVehicleData('truck');
                generalTest.fillUpValidVehicleData('truck');
                generalTest.fillUpInvalidInsurantData();
                generalTest.fillUpInsurantData();
                generalTest.clickEnterProductData();
                generalTest.fillUpInvalidProductData('truck');
                generalTest.fillUpProductData('truck');
                generalTest.clickSelectPriceOption();
                generalTest.fillUpPriceOption();
                generalTest.fillUpInvalidUpQuote();
                generalTest.fillUpQuote();
            });
        });

        context('Motorcycle tab checking', function () {

            beforeEach(function() {
                generalTest.home();
                generalTest.goToMotorcyclePage();
            });

            it('Scenario 3', function(){
                Cypress.on('uncaught:exception', (err, runnable) => {
                    return false
                })
                generalTest.fillUpInvalidVehicleData('motorcycle');
                generalTest.fillUpValidVehicleData('motorcycle');
                generalTest.fillUpInvalidInsurantData();
                generalTest.fillUpInsurantData();
                generalTest.clickEnterProductData();
                generalTest.fillUpInvalidProductData('motorcycle');
                generalTest.fillUpProductData('motorcycle');
                generalTest.clickSelectPriceOption();
                generalTest.fillUpPriceOption();
                generalTest.fillUpInvalidUpQuote();
                generalTest.fillUpQuote();
            });
        });
    });