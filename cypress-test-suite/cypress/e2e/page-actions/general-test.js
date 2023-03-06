const URL_HOME = 'http://sampleapp.tricentis.com/101/index.php';
const MENU_AUTOMOBILE = '#nav_automobile';
const MENU_TRUCK = '#nav_truck';
const MENU_MOTORCYCLE = '#nav_motorcycle';
const TAB_ENTER_INSURANT_DATA = '#enterinsurantdata';
const TAB_ENTER_PRODUCT_DATA = '#enterproductdata';
const TAB_SELECT_PRICE_OPTION = '#selectpriceoption';
//selectors for Vehicle Data
const DROPDOWN_MAKE = "#make";
const DROPDOWN_MODEL = '#model';
const FIELD_ENGINE_PERFORMANCE = '#engineperformance';
const FIELD_DATE_OF_MANUFACTURE= '#dateofmanufacture';
const DROPDOWN_NUMBER_OF_SEATS = '#numberofseats';
const DROPDOWN_NUMBER_OF_SEATS_MOTORCYCLE = '#numberofseatsmotorcycle';
const DROPDOWN_FUEL_TYPE = '#fuel';
const FIELD_PAYLOAD = '#payload';
const FIELD_TOTAL_WEIGHT = '#totalweight';
const FIELD_CYLINDER_CAPACITY = '#cylindercapacity';
const FIELD_LIST_PRICE = '#listprice';
const FIELD_LICENSE_PLATE_NUMBER = '#licenseplatenumber';
const FIELD_ANNUAL_MILEAGE = '#annualmileage';
const ERROR_DATE_OF_MANUFACTURE = '#insurance-form > div > section:nth-child(1) > div:nth-child(3) > span';
const ERROR_FUEL_TYPE = '#insurance-form > div > section:nth-child(1) > div:nth-child(5) > span';
const ERROR_NUMBER_OF_SEATS ='#insurance-form > div > section:nth-child(1) > div:nth-child(4) > span';
const ERROR_LIST_PRICE = '#insurance-form > div > section:nth-child(1) > div:nth-child(6) > span';
const ERROR_LICENSE_PLATE = '#insurance-form > div > section:nth-child(1) > div:nth-child(7) > span';
const ERROR_ANNUAL_MILEAGE = '#insurance-form > div > section:nth-child(1) > div:nth-child(8) > span';
//selectors for error message on truck
const ERROR_PAYLOAD = '#insurance-form > div > section:nth-child(1) > div:nth-child(6) > span';
const ERROR_TOTAL_WEIGHT = '#insurance-form > div > section:nth-child(1) > div:nth-child(7) > span'
const ERROR_CYLINDER_CAPACITY = '#insurance-form > div > section:nth-child(1) > div:nth-child(3) > span';
const ERROR_ENGINE_PERFORMANCE = '#insurance-form > div > section:nth-child(1) > div:nth-child(2) > span';
const ERROR_LIST_PRICE_TRUCK = '#insurance-form > div > section:nth-child(1) > div:nth-child(8) > span';
const ERROR_LICENSE_PLATE_TRUCK = '#insurance-form > div > section:nth-child(1) > div:nth-child(9) > span';
const ERROR_ANNUAL_MILEAGE_TRUCK = '#insurance-form > div > section:nth-child(1) > div:nth-child(10) > span';
//selectors on error message on motorcycle
const ERROR_MODEL = '#insurance-form > div > section:nth-child(1) > div:nth-child(2) > span';
const ERROR_MAKE = '#insurance-form > div > section:nth-child(1) > div:nth-child(1) > span';
const ERROR_ENGINE_PERFORMANCE_MOTOR = '#insurance-form > div > section:nth-child(1) > div:nth-child(4) > span';
const ERROR_DATE_OF_MANUFACTURE_MOTOR = '#insurance-form > div > section:nth-child(1) > div:nth-child(5) > span'
const ERROR_NUMBER_OF_SEATS_MOTOR = '#insurance-form > div > section:nth-child(1) > div:nth-child(6) > span'
const ERROR_LIST_PRICE_MOTOR = '#insurance-form > div > section:nth-child(1) > div:nth-child(7) > span'
const ERROR_ANNUAL_MILEAGE_MOTOR = '#insurance-form > div > section:nth-child(1) > div:nth-child(8) > span'

//selectors for Insurant Data
const FIELD_FIRST_NAME = '#firstname';
const FIELD_LAST_NAME = '#lastname';
const FIELD_STREET_ADDRESS = '#streetaddress';
const RADIO_GENDER = '#insurance-form > div > section:nth-child(2) > div:nth-child(4) > p';
const RADIO_GENDER_MALE = '#gendermale';
const RADIO_GENDER_FEMALE = '#genderfemale';
const DROPDOWN_COUNTRY = '#country';
const FIELD_ZIPCODE = '#zipcode';
const FIELD_CITY = '#city';
const FIELD_DATE_OF_BIRTH = '#birthdate';
const DROPDOWN_OCCUPATION = '#occupation';
const CHECKBOX_HOBBIES = '#insurance-form > div > section:nth-child(2) > div.field.idealforms-field.idealforms-field-checkbox > p';
const FIELD_WEBSITE = '#website';
const BUTTON_OPEN_FILE = '#picturecontainer';
const ERROR_FIRST_NAME = '#insurance-form > div > section:nth-child(2) > div:nth-child(1) > span';
const ERROR_LAST_NAME = '#insurance-form > div > section:nth-child(2) > div:nth-child(2) > span';
const ERROR_DATE_OF_BIRTH = '#insurance-form > div > section:nth-child(2) > div:nth-child(3) > span';
const ERROR_STREET_ADDRESS = '#insurance-form > div > section:nth-child(2) > div:nth-child(5) > span';
const ERROR_COUNTRY = '#insurance-form > div > section:nth-child(2) > div.field.idealforms-field.idealforms-field-select-one.invalid > span';
const ERROR_ZIPCODE = '#insurance-form > div > section:nth-child(2) > div:nth-child(7) > span';
const ERROR_OCCUPATION = '#insurance-form > div > section:nth-child(2) > div:nth-child(9) > span';
const ERROR_HOBBIES = '#insurance-form > div > section:nth-child(2) > div.field.idealforms-field.idealforms-field-checkbox.invalid > span';
const ERROR_WEBSITE = '#insurance-form > div > section:nth-child(2) > div:nth-child(11) > span';

//selectors for Product Data
const FIELD_START_DATE = '#startdate';
const DROPDOWN_INSURANCE_SUM = '#insurancesum';
const DROPDOWN_MERIT_RATING = '#meritrating';
const DROPDOWN_DAMAGE_INSURANCE = '#damageinsurance';
const CHECKBOX_OPTIONAL_PRODUCT = '#insurance-form > div > section:nth-child(3) > div.field.idealforms-field.idealforms-field-checkbox > p';
const DROPDOWN_COURTESY_CAR = "#courtesycar"
//selector for error in automobile
const ERROR_START_DATE = "#insurance-form > div > section:nth-child(3) > div.field.idealforms-field.idealforms-field-text.invalid > span";
const ERROR_INSURANCE_SUM = '#insurance-form > div > section:nth-child(3) > div:nth-child(2) > span';
const ERROR_MERIT_RATING = '#insurance-form > div > section:nth-child(3) > div:nth-child(3) > span';
const ERROR_DAMAGE_INSURANCE = '#insurance-form > div > section:nth-child(3) > div:nth-child(4) > span';
const ERROR_OPTIONAL_PRODUCT = '#insurance-form > div > section:nth-child(3) > div.field.idealforms-field.idealforms-field-checkbox > span';
const ERROR_COURTESY_CAR = '#insurance-form > div > section:nth-child(3) > div:nth-child(6) > span';
//selector for error in trucks
const ERROR_DAMAGE_INSURANCE_TRUCK = '#insurance-form > div > section:nth-child(3) > div:nth-child(3) > span';

//selector/s for Price Option
const RADIO_PRICE_OPTION ='#priceTable > tfoot > tr > th.group';
const BUTTON_NEXT = '#nextsendquote';
const BUTTON_VIEW_QUOTE = '#viewquote';
const SCREEN_LOADING = '#LoadingPDF';

//selectors for Send Quote
const FIELD_EMAIL = '#email';
const FIELD_PHONE = '#phone';
const FIELD_USERNAME = '#username';
const FIELD_PASSWORD = '#password';
const FIELD_CONFIRM_PASSWORD = '#confirmpassword';
const FIELD_COMMENTS = '#Comments';
const BUTTON_SEND_EMAIL ='#sendemail';
const SPIEL_EMAIL_SUCCESS = 'body > div.sweet-alert.showSweetAlert.visible > h2';
const ERROR_EMAIL = '#sendQuoteForm > div.field.idealforms-field.idealforms-field-email.invalid > span';
const ERROR_PHONE = '#sendQuoteForm > div:nth-child(2) > span';
const ERROR_PHONE_LENGTH = '#sendQuoteForm > div:nth-child(2) > span'
const ERROR_USERNAME = '#sendQuoteForm > div:nth-child(3) > span';
const ERROR_PASSWORD = '#sendQuoteForm > div.field.idealforms-field.idealforms-field-password.invalid > span';
const ERROR_CONFIRM_PASSWORD = '#sendQuoteForm > div:nth-child(5) > span';
const ERROR_COMMENTS ='#sendQuoteForm > div.field.idealforms-field.idealforms-field-textarea.invalid > span';

class GeneralTest {

    home(){
        cy.visit(URL_HOME)
    }

    goToAutomobilePage() {
        cy.get(MENU_AUTOMOBILE).click({force:true});
    }

    goToTruckPage() {
        cy.get(MENU_TRUCK).click({force:true});
    }

    goToMotorcyclePage() {
        cy.get(MENU_MOTORCYCLE).click({force:true});
    }

    clickEnterInsurantData() {
        //cy.wait(1000);
        cy.get(TAB_ENTER_INSURANT_DATA).scrollIntoView({force:true}).click({force:true});
    }

    inputMake(make) {
        if (make == undefined){
        cy.get(DROPDOWN_MAKE).select('Audi');
        }
        else {
            cy.get(DROPDOWN_MAKE).select(make);
        }
    }

    inputModel(model) {
        if (model == undefined){
        cy.get(DROPDOWN_MODEL).select(1);
        }
        else {
            cy.get(DROPDOWN_MODEL).select(model);
        }
    }
    
    inputNumberOfSeats(numberOfSeats) {
        if (numberOfSeats == undefined){
        cy.get(DROPDOWN_NUMBER_OF_SEATS).select('7');
        }
        else {
            cy.get(DROPDOWN_NUMBER_OF_SEATS).select(numberOfSeats);
        }
    }

    inputNumberOfSeatsMotorcycle(numberOfSeatsMotorcycle) {
        if (numberOfSeatsMotorcycle == undefined){
        cy.get(DROPDOWN_NUMBER_OF_SEATS_MOTORCYCLE).select('1');
        }
        else {
            cy.get(DROPDOWN_NUMBER_OF_SEATS_MOTORCYCLE).select(numberOfSeatsMotorcycle);
        }
    }

    inputFuelType(fuelType) {
        if (fuelType == undefined){
        cy.get(DROPDOWN_FUEL_TYPE).select('Petrol');
        }
        else {
            cy.get(DROPDOWN_FUEL_TYPE).select(fuelType);
        }
    }

    inputEnginePerformance(enginePerformance) {
        if (enginePerformance == undefined){
            cy.get(FIELD_ENGINE_PERFORMANCE).clear().type(123);
            }
            else {
                cy.get(FIELD_ENGINE_PERFORMANCE).clear().type(enginePerformance);
            }
    }

    inputDateOfManufacture(dateOfManufacture) {
        if (dateOfManufacture == undefined){
            cy.get(FIELD_DATE_OF_MANUFACTURE).clear().type('05/13/2020');
            }
            else {
                cy.get(FIELD_DATE_OF_MANUFACTURE).clear().type(dateOfManufacture);
            }
    }

    inputListPrice(listPrice) {
        if (listPrice == undefined){
        cy.get(FIELD_LIST_PRICE).clear().type('1000')
        }
        else {
            cy.get(FIELD_LIST_PRICE).clear().type(listPrice)
        }
    }

    inputCylinderCapacity(cylinderCapacity) {
        if (cylinderCapacity == undefined){
        cy.get(FIELD_CYLINDER_CAPACITY).clear().type('1000')
        }
        else {
            cy.get(FIELD_CYLINDER_CAPACITY).clear().type(cylinderCapacity)
        }
    }

    inputLicensePlate(licensePlate) {
        if (licensePlate == undefined){
        cy.get(FIELD_LICENSE_PLATE_NUMBER).clear().type('ABC123')
        }
        else {
            cy.get(FIELD_LICENSE_PLATE_NUMBER).clear().type(licensePlate)
        }
    }

    inputAnnualMilage(annualMilage) {
        if (annualMilage == undefined){
        cy.get(FIELD_ANNUAL_MILEAGE).clear().type('15000')
        }
        else {
            cy.get(FIELD_ANNUAL_MILEAGE).clear().type(annualMilage)
        }
    }

    inputPayload(payload) {
        if (payload == undefined){
        cy.get(FIELD_PAYLOAD).clear().type('150')
        }
        else {
            cy.get(FIELD_PAYLOAD).clear().type(payload)
        }
    }

    inputTotalWeight(totalWeight) {
        if (totalWeight == undefined){
        cy.get(FIELD_TOTAL_WEIGHT).clear().type('150')
        }
        else {
            cy.get(FIELD_TOTAL_WEIGHT).clear().type(totalWeight)
        }
    }

    clickEnterProductData() {
        cy.get(TAB_ENTER_PRODUCT_DATA).click({force:true});
    }

    clickSelectPriceOption() {
        cy.get(TAB_SELECT_PRICE_OPTION).click({force:true});
    }

    inputFirstName(firstName){
        if (firstName == undefined){
            cy.get(FIELD_FIRST_NAME).clear().type('ladis')
            }
            else {
                cy.get(FIELD_FIRST_NAME).clear().type(firstName)
            }
    }

    inputLastName(lastName){
        if (lastName == undefined){
            cy.get(FIELD_LAST_NAME).clear().type('wushroom')
            }
            else {
                cy.get(FIELD_LAST_NAME).clear().type(lastName)
            }
    }

    inputGender(gender) {
        if(gender == undefined){
            cy.get(RADIO_GENDER).within(() => {
                cy.get('input[type="radio"]').then($radios => {
                const randomIndex = Math.floor(Math.random() * $radios.length);
                cy.wrap($radios[randomIndex]).click({force:true});
                });
            });
        }
        /*if you want to use index as input
            cy.get(PCLASS_GENDER).within(() => {
                cy.get('input[type="radio"]').eq(index).click();
              });
        */
        else{
            cy.get(RADIO_GENDER).contains(gender).prev().click();
        }
    }

    inputDateOfBirth(dateOfBirth){
        if (dateOfBirth == undefined){
            cy.get(FIELD_DATE_OF_BIRTH).clear().type('05/13/1994');
            }
            else {
                cy.get(FIELD_DATE_OF_BIRTH).clear().type(dateOfBirth);
            }
    }

    inputStreetAddress(streetAddress){
        if (streetAddress == undefined){
            cy.get(FIELD_STREET_ADDRESS).clear().type('1234 Grove Street')
            }
            else {
                cy.get(FIELD_STREET_ADDRESS).clear().type(streetAddress)
            }
    }

    inputCountry(country) {
        if (country == undefined){
        cy.get(DROPDOWN_COUNTRY).then((dropdown) => {
            const options = dropdown.find('option').not(':first');
            const randomIndex = Cypress._.random(options.length -1);
            const optionValue = Cypress.$(options[randomIndex]).val();
            cy.get(DROPDOWN_COUNTRY).select(optionValue);
        });
        }
        else {
            cy.get(DROPDOWN_COUNTRY).select(country);
        }
    }

    inputZipcode(zipcode){
        if (zipcode == undefined){
            cy.get(FIELD_ZIPCODE).clear().type('1860')
            }
            else {
                cy.get(FIELD_ZIPCODE).clear().type(zipcode)
            }
    }

    inputCity(city){
        if (city == undefined){
            cy.get(FIELD_CITY).clear().type('city')
            }
            else {
                cy.get(FIELD_CITY).clear().type(city)
            }
    }

    inputOccupation(occupation) {
        if (occupation == undefined){
        cy.get(DROPDOWN_OCCUPATION).then((dropdown) => {
            const options = dropdown.find('option').not(':first');
            const randomIndex = Cypress._.random(options.length -1);
            const optionValue = Cypress.$(options[randomIndex]).val();
            cy.get(DROPDOWN_OCCUPATION).select(optionValue);
        });
        }
        else {
            cy.get(DROPDOWN_OCCUPATION).select(occupation);
        }
    }

    inputHobbies(hobbies) {
        if(hobbies == undefined){
            cy.get(CHECKBOX_HOBBIES).within(() => {
                cy.get('input[type="checkbox"]').then($radios => {
                const randomIndex = Math.floor(Math.random() * $radios.length);
                cy.wrap($radios[randomIndex]).click({force:true});
                });
            });
        }
        else{
            cy.get(CHECKBOX_HOBBIES).contains(hobbies).click();
        }
    }

    inputWebsite(website){
        if (website == undefined){
            cy.get(FIELD_WEBSITE).clear().type('https://test.com')
            }
            else {
                cy.get(FIELD_WEBSITE).clear().type(website)
            }
    }
    
    inputFile(){
        cy.get(BUTTON_OPEN_FILE).selectFile('cypress/fixtures/test-data-files/mofojones.png',{force: true});
        //'/test-data-files/mofojones.png' this is the path if you would use attachFile
    }

    inputStartDate(startDate){
        if (startDate == undefined){
            cy.get(FIELD_START_DATE).clear().type('01/01/2024');
            }
            else {
                cy.get(FIELD_START_DATE).clear().type(startDate);
            }
    }

    inputInsuranceSum(insuranceSum) {
        if (insuranceSum == undefined){
        cy.get(DROPDOWN_INSURANCE_SUM).then((dropdown) => {
            const options = dropdown.find('option').not(':first');
            const randomIndex = Cypress._.random(options.length -1);
            const optionValue = Cypress.$(options[randomIndex]).val();
            cy.get(DROPDOWN_INSURANCE_SUM).select(optionValue);
        });
        }
        else {
            cy.get(DROPDOWN_INSURANCE_SUM).select(insuranceSum);
        }
    }

    inputMeritRating(meritRating) {
        if (meritRating == undefined){
        cy.get(DROPDOWN_MERIT_RATING).then((dropdown) => {
            const options = dropdown.find('option').not(':first');
            const randomIndex = Cypress._.random(options.length -1);
            const optionValue = Cypress.$(options[randomIndex]).val();
            cy.get(DROPDOWN_MERIT_RATING).select(optionValue);
        });
        }
        else {
            cy.get(DROPDOWN_MERIT_RATING).select(meritRating);
        }
    }

    inputDamageInsurance(damageInsurance) {
        if (damageInsurance == undefined){
        cy.get(DROPDOWN_DAMAGE_INSURANCE).then((dropdown) => {
            const options = dropdown.find('option').not(':first');
            const randomIndex = Cypress._.random(options.length -1);
            const optionValue = Cypress.$(options[randomIndex]).val();
            cy.get(DROPDOWN_DAMAGE_INSURANCE).select(optionValue);
        });
        }
        else {
            cy.get(DROPDOWN_DAMAGE_INSURANCE).select(damageInsurance);
        }
    }

    inputOptionalProduct(optionalProduct) {
        if(optionalProduct == undefined){
            cy.get(CHECKBOX_OPTIONAL_PRODUCT).within(() => {
                cy.get('input[type="checkbox"]').then($radios => {
                const randomIndex = Math.floor(Math.random() * $radios.length);
                cy.wrap($radios[randomIndex]).click({force:true});
                });
            });
        }
        else{
            cy.get(CHECKBOX_OPTIONAL_PRODUCT).contains(optionalProduct).click();
        }
    }

    inputCourtesyCar(courtesyCar) {
        if (courtesyCar == undefined){
        cy.get(DROPDOWN_COURTESY_CAR).then((dropdown) => {
            const options = dropdown.find('option').not(':first');
            const randomIndex = Cypress._.random(options.length -1);
            const optionValue = Cypress.$(options[randomIndex]).val();
            cy.get(DROPDOWN_COURTESY_CAR).select(optionValue);
        });
        }
        else {
            cy.get(DROPDOWN_COURTESY_CAR).select(courtesyCar);
        }
    }

    inputPriceOption(priceOption) {
        if(priceOption == undefined){
            cy.get(RADIO_PRICE_OPTION).within(() => {
                cy.get('input[type="radio"]').then($radios => {
                const randomIndex = Math.floor(Math.random() * $radios.length);
                cy.wrap($radios[randomIndex]).click({force:true})
                cy.wrap($radios[randomIndex]).should('be.checked');
                });
            });
        }
        else{
            cy.get(RADIO_PRICE_OPTION).contains(priceOption).prev().click();
        }
    }

    clickNextPriceOption() {
        cy.get(BUTTON_NEXT).scrollIntoView({force:true}).click({force:true});
    }

    clickViewQuote() {
        cy.get(BUTTON_VIEW_QUOTE).scrollIntoView({force:true}).click({force:true});
    }

    inputEmail(email){
        if (email == undefined){
            cy.get(FIELD_EMAIL).clear().type('duroy@gmail.com');
            }
            else {
                cy.get(FIELD_EMAIL).clear().type(email);
            }
    }
    inputPhone(phone){
        if (phone == undefined){
            cy.get(FIELD_PHONE).clear().type('09123456789');
            }
            else {
                cy.get(FIELD_PHONE).clear().type(phone);
            }
    }

    inputUsername(username){
        if (username == undefined){
            cy.get(FIELD_USERNAME).clear().type('duroy');
            }
            else {
                cy.get(FIELD_USERNAME).clear().type(username);
            }
    }

    inputPassword(password){
        if (password == undefined){
            cy.get(FIELD_PASSWORD).clear().type('P@ssw0rd');
            }
            else {
                cy.get(FIELD_PASSWORD).clear().type(password);
            }
    }

    inputConfirmPassword(confirmPassword){
        if (confirmPassword == undefined){
            cy.get(FIELD_CONFIRM_PASSWORD).clear().type('P@ssw0rd');
            }
            else {
                cy.get(FIELD_CONFIRM_PASSWORD).clear().type(confirmPassword);
            }
    }

    inputComments(comments){
        if (comments == undefined){
            cy.get(FIELD_COMMENTS).clear().type('comments');
            }
            else {
                cy.get(FIELD_COMMENTS).clear().type(comments);
            }
    }

    clickSendEmail() {
        cy.get(BUTTON_SEND_EMAIL).click();
    }

    fillUpInvalidUpQuote(){
        this.inputEmail('a');
        cy.get(ERROR_EMAIL)
            .should('have.text', 'Must be at least a valid email format');
        this.inputPhone('a');
        cy.get(ERROR_PHONE)
            .should('have.text', 'Must be only digits');
        this.inputPhone('1234');
        cy.get(ERROR_PHONE)
            .should('have.text', 'Must be a number between 8 and 15 digits');
        this.inputPhone('12345678901234567');
        cy.get(ERROR_PHONE)
            .should('have.text', 'Must be a number between 8 and 15 digits');
        this.inputUsername('a');
        cy.get(ERROR_USERNAME)
            .should('have.text', 'Must be between 4 and 32 characters long and start with a letter. You may use letters, numbers, underscores, and one dot');
        this.inputPassword('a');
        cy.get(ERROR_PASSWORD)
            .should('have.text', 'Must be at least 6 characters long, and contain at least one number, one uppercase and one lowercase letter');
        this.inputConfirmPassword('a');
        cy.get(ERROR_CONFIRM_PASSWORD)
            .should('have.text', 'Must have the same value as the Password field');
        this.inputComments(`commentsfaksdjf;lkasdjfl;kasjdfl;kajsdlk;fjaslk;dfjal;ksdjf;lkasdjf
                            lkasdjfl;kasjd;lfkjasdl;kfjasl;kdfjalksdjflk;asdjfl;kasjdflkajsdl;k
                            fjasd;lkfjasd;lkfjasl;kdfjaslkdfjaslkdfj;asldjfal;ksdfjl;kasdjflkasd
                            jflkasjdflk;asjdlk;fjasdlk;fjaslkd;fja;lskdjflkasdjfl;kasdjflk;asjdfl
                            k;asjdfkl;ajsdl;kfjasdklfjasaa`);
        cy.get(ERROR_COMMENTS)
            .should('have.text', 'Must be under 300 characters');
    }

    fillUpQuote(){
        this.inputEmail();
        this.inputPhone();
        this.inputUsername();
        this.inputPassword();
        this.inputConfirmPassword();
        this.inputComments();
        this.clickSendEmail();
        cy.get(SCREEN_LOADING,{timeout: 15000}).should('not.exist');
        cy.get(SPIEL_EMAIL_SUCCESS)
            .should('have.text', 'Sending e-mail success!');
    }

    fillUpPriceOption(){
        this.inputPriceOption();
        this.clickViewQuote();
        this.clickNextPriceOption();
        cy.get(SCREEN_LOADING,{timeout: 15000}).should('not.exist'); 
    }


    fillUpProductData(vehicleType){
        if (vehicleType == 'automobile'){
            this.inputMeritRating();
            this.inputCourtesyCar();
        }
        this.inputStartDate();
        this.inputInsuranceSum();
        this.inputDamageInsurance();
        this.inputOptionalProduct();
    }

    fillUpInvalidProductData(vehicleType){
        if (vehicleType == 'automobile'){
            this.inputMeritRating();
            this.inputMeritRating('default');
            cy.get(ERROR_MERIT_RATING)
                .should('have.text', 'Select an option');
            this.inputCourtesyCar();
            this.inputCourtesyCar('default');
            cy.get(ERROR_COURTESY_CAR)
                .should('have.text', 'Select an option');
            this.inputDamageInsurance();
            this.inputDamageInsurance('default');
            cy.get(ERROR_DAMAGE_INSURANCE)    
        }
        if (vehicleType == 'truck' || vehicleType == 'motorcycle'){
            this.inputDamageInsurance();
            this.inputDamageInsurance('default');
            cy.get(ERROR_DAMAGE_INSURANCE_TRUCK)
                .should('have.text', 'Select an option');
        }
        this.inputStartDate('01/01/1999');
        cy.get(ERROR_START_DATE)
            .should('have.text', 'Must be more than one month in the future');
        this.inputInsuranceSum();
        this.inputInsuranceSum('default');
        cy.get(ERROR_INSURANCE_SUM)
            .should('have.text', 'Select an option');
        this.inputOptionalProduct('Euro Protection');
        this.inputOptionalProduct('Euro Protection');
        cy.get(ERROR_OPTIONAL_PRODUCT)
            .should('have.text', 'Select at least 1 options');
    }

    fillUpInsurantData(){
        this.clickEnterInsurantData();
        this.inputFirstName();
        this.inputLastName();
        this.inputGender();
        this.inputDateOfBirth();
        this.inputStreetAddress();
        this.inputCountry();
        this.inputZipcode();
        this.inputCity();
        this.inputOccupation();
        this.inputHobbies();
        this.inputWebsite();
        this.inputFile();
    }

    fillUpInvalidInsurantData(){
        this.clickEnterInsurantData();
        this.inputFirstName('@');
        cy.get(ERROR_FIRST_NAME)
            .should('have.text', 'Must be at least 2 characters long and must only contain letters');
        this.inputLastName('#');
        cy.get(ERROR_LAST_NAME)
            .should('have.text', 'Must be at least 2 characters long and must only contain letters');
        this.inputGender();
        this.inputDateOfBirth('01/01/2022');
        cy.get(ERROR_DATE_OF_BIRTH)
            .should('have.text', 'You must be between 18 and 70 years of age');
        this.inputStreetAddress('a');
        cy.get(ERROR_STREET_ADDRESS)
            .should('have.text', 'Must be at least 3 characters long');
        this.inputCountry(1);
        this.inputCountry('default');
        cy.get(ERROR_COUNTRY)
            .should('have.text', 'Select an option');
        this.inputZipcode('asdf');
        cy.get(ERROR_ZIPCODE)
            .should('have.text', 'Must be only digits');
        this.inputCity();
        this.inputOccupation(1);
        this.inputOccupation('default');
        cy.get(ERROR_OCCUPATION)
            .should('have.text', 'Select an option');
        this.inputHobbies('Speeding');
        this.inputHobbies('Speeding');
        cy.get(ERROR_HOBBIES)
            .should('have.text', 'Select at least 1 options');
        this.inputWebsite('abc');
        cy.get(ERROR_WEBSITE)
            .should('have.text', 'Must be a valid URL');
        this.inputFile();
    }

    fillUpValidVehicleData(vehicleType){
        if (vehicleType == 'truck'){
            this.inputPayload();
            this.inputTotalWeight();
        }
        if (vehicleType == 'truck' || vehicleType == 'automobile'){
            this.inputFuelType('Petrol');
            this.inputLicensePlate('ABC1125');
            this.inputNumberOfSeats('1');

        }
        if (vehicleType == 'motorcycle'){
            this.inputModel();
            this.inputCylinderCapacity();
            this.inputNumberOfSeatsMotorcycle(1);           
        }
        this.inputMake('Audi');
        this.inputEnginePerformance('100');
        this.inputDateOfManufacture(`01/01/2020`);
        this.inputListPrice('47000');
        this.inputAnnualMilage('4747');
    }

    fillUpInvalidVehicleData(vehicleType){
        if (vehicleType == 'truck'){
            this.inputPayload('abc');
            cy.get(ERROR_PAYLOAD)
            .should('have.text', 'Must be a number between 1 and 1000');
            this.inputTotalWeight('abc');
            cy.get(ERROR_TOTAL_WEIGHT)
            .should('have.text', 'Must be a number between 100 and 50000');
            this.inputListPrice('@');
            cy.get(ERROR_LIST_PRICE_TRUCK)
                .should('have.text', 'Must be a number between 500 and 100000');
            this.inputLicensePlate('!!@#@#@#@#@#@#@$@');
            cy.get(ERROR_LICENSE_PLATE_TRUCK)
                .should('have.text', 'Must be under 10 characters');
            this.inputAnnualMilage('#');
            cy.get(ERROR_ANNUAL_MILEAGE_TRUCK)
                .should('have.text', 'Must be a number between 100 and 100000');
            
        }
        if (vehicleType == 'truck' || vehicleType == 'automobile'){
            this.inputEnginePerformance('@');
            cy.get(ERROR_ENGINE_PERFORMANCE)
                .should('have.text', 'Must be a number between 1 and 2000');
            this.inputDateOfManufacture(`01/01/2024`);
            cy.get(ERROR_DATE_OF_MANUFACTURE)
                .should('have.text', 'Must be today or somewhere in the past');
            this.inputNumberOfSeats('1');
            this.inputNumberOfSeats('default');
            cy.get(ERROR_NUMBER_OF_SEATS)
                .should('have.text', 'Select an option');
            this.inputFuelType('Petrol')
            this.inputFuelType('default');
            cy.get(ERROR_FUEL_TYPE)
                .should('have.text', 'Select an option');
 

        }
        if (vehicleType == 'automobile'){
            this.inputListPrice('@');
            cy.get(ERROR_LIST_PRICE)
                .should('have.text', 'Must be a number between 500 and 100000');
            this.inputLicensePlate('!!@#@#@#@#@#@#@$@');
            cy.get(ERROR_LICENSE_PLATE)
                .should('have.text', 'Must be under 10 characters');
               this.inputAnnualMilage('#');
            cy.get(ERROR_ANNUAL_MILEAGE)
                .should('have.text', 'Must be a number between 100 and 100000'); 
        }
        if (vehicleType == 'motorcycle'){
            this.inputModel(1);
            this.inputModel('default');
            cy.get(ERROR_MODEL)
                .should('have.text', 'Select an option');
            this.inputCylinderCapacity('a');
            cy.get(ERROR_CYLINDER_CAPACITY)
                .should('have.text', 'Must be a number between 1 and 2000');
            this.inputEnginePerformance('@');
            cy.get(ERROR_ENGINE_PERFORMANCE_MOTOR)
                .should('have.text', 'Must be a number between 1 and 2000');    
            this.inputNumberOfSeatsMotorcycle(1);
            this.inputNumberOfSeatsMotorcycle('default');
            cy.get(ERROR_NUMBER_OF_SEATS_MOTOR)
                .should('have.text', 'Select an option');
            this.inputModel(1);
            this.inputModel('default');
            cy.get(ERROR_MODEL)
                .should('have.text', 'Select an option');
            this.inputDateOfManufacture(`01/01/2024`);
            cy.get(ERROR_DATE_OF_MANUFACTURE_MOTOR)
                .should('have.text', 'Must be today or somewhere in the past');
            this.inputListPrice('@');
            cy.get(ERROR_LIST_PRICE_MOTOR)
            .should('have.text', 'Must be a number between 500 and 100000'); 
            this.inputAnnualMilage('#');
            cy.get(ERROR_ANNUAL_MILEAGE_MOTOR)
                .should('have.text', 'Must be a number between 100 and 100000');   
                
        }
        this.inputMake('Audi');
        this.inputMake('default');
        cy.get(ERROR_MAKE)
            .should('have.text', 'Select an option');
    }
}

module.exports = GeneralTest;