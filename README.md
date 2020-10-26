# Healthy API

The purpose of the Healthy API is to provide health information to a user who submits data about themselves or others. For those trying to lose or gain weight, it's best to resubmit your data every 3 to 4 weeks to update your caloric intake based on needs. 

**The following data is required for the Healthy API:** 
    * height(inches)
    * weight(pounds)
    * age(years)
    * gender (male/female)
    * activity(1 - 5)

**Activity is based on a scale ranging from 1 to 5**. The following are used to determine which range a person falls in: 
    *1: Little to no exercise
    *2: Light exercise/sports 1-3 times a week
    *3: Moderate exercise/sports 3-5 times a week
    *4: Heavy exercise/sports 6-7 times a week
    *5: Very heavy exercise/sports, same as heavy but training 2 times a day or have a  person has a physical job


## Requests to the API

This API responds to a GET request to the address "alsdjfladj/calc_health_stats". Inorder to work properly the GET request must have the required data above as request query params like in the example below. 

*https://lajsglasjdflja/calc_health_stats?height=65&weight=154&age=23&gender=male&activity=4*


The response from the api will be a json object with the following data: 
```
{
    bmi: 'value is your body mass index', 
    bmr: 'value is your basal metabolic rate,
    bmi_health: 'value stating whether individual is under, over, normal, or obese in weight', 
    maint_cals: 'value is number calories needed to maintain current weight , 
    cals_lose_one: 'value is number calories needed to lose 1 pound per week', 
    cals_lose_two: 'value is number calories needed to lose 2 pound per week', 
    cals_gain_one: 'value is number calories needed to gain 1 pound per week', 
    cals_gain_two: 'value is number calories needed to gain 2 pound per week', 
}
```
## How data is calculated 

**Body Mass Index Formula:** 
    *703 * Weight(lbs) / Height^2(in^2)  (^2 meaning squared)

**Basal Metabolic Rate, Harris Benedict Formula**:
    *Male: 66 + (6.3 * Weight(lbs)) + (12.9 * Height(in)) - (6.8 * Age(years))
    *Female: 655 + (4.3 * Weight(lbs)) + (4.7 * Height(in)) - (4.7 * Age(years))

**Maintenance Calorie Intake varies based on activity level, the calculation is based on the 1-5 scale above for each calculation respectively:**
    Activity levels
    *1: BMR * 1.2
    *2: BMR * 1.375
    *3: BMR * 1.55
    *4: BMR * 1.725
    *5: BMR * 1.9

**Calorie Calculation for weight loss/gain**
    3500 calories equals about 1 pound of fat, therefore it's estimated you need to burn about 3500 calories to lose 1 pound. If a person cuts 500 to 1000 calories a day from their diet it's estimated they will lose about 1 to 2 pounds a week respectively. The same can be said for adding 500 to 1000 calories a day. 


