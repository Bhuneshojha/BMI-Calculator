#! /usr/bin/env node
//   inquirer BMI Calculator using typescript
import inquirer from "inquirer";
const questions = [
    {type: 'number',name: 'weight',mesaage:'wight(kg):'},
    {type: 'number',name: 'height',mesaage:'height(m):'}
]
const calculateBMI = (weight: number, height:number): number => weight/(height*height);

const main = async() => {
    const {weight,height} = await inquirer.prompt(questions);
    console.log(`BMI: ${calculateBMI(weight,height).toFixed(3)}`)
};
main()