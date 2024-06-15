import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ('Verify that user is able to sign up having filled all fields (mandatory and optional)', ()=>{
    
})
Given(/^User has navigated to the trymima page$/, () => {
	return true;
});

When(/^User clicks the signup button$/, () => {
	return true;
});

When(/^User provides full name$/, () => {
	return true;
});

When(/^User provides business name$/, () => {
	return true;
});

When(/^User provides business email$/, () => {
	return true;
});

When(/^User provides phone number$/, () => {
	return true;
});

When(/^User provides business registration number$/, () => {
	return true;
});

When(/^User clicks the next button$/, () => {
	return true;
});

Then(/^User is presented with social details to complete$/, () => {
	return true;
});
