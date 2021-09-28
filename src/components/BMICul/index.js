import React , {useState} from 'react';
import {BmiContainer,BmiWrapper,BMIForm,Icon,FormLabel,FormInput,BMIButton,FormH1,Form} from "./BMICulElements";
import GaugeChart from 'react-gauge-chart';

const BMICul = () => {

  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [bmi, setBmi] = useState("BMICul");
  const [trying, setTrying] = useState("0");
  
  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = Math.floor( +mass / (+height) ** 2);
    if (bmi < 18.5){
    return setBmi("Your BMI is " + bmi + ", so you are UNDERWEIGHT.")|| setTrying(bmi);
    }if(bmi >18.5 && bmi <= 24.9) {
        return setBmi("Your BMI is " + bmi + ", so you have a NORMAL WEIGHT.")|| setTrying(bmi);
    }if (bmi >25 && bmi <= 29.9){
        return setBmi("Your BMI is " + bmi + ", so you are OVERWEIGHT.") || setTrying(bmi);
    }
    if (bmi >30 && bmi <= 35){
        return setBmi("Your BMI is " + bmi + ", so you are OBESE.") || setTrying(bmi);
    }else{ 
      return setBmi("Your BMI is " + bmi + ", so you are EXTREMELY OBESE." ) || setTrying(bmi); 
    }
  };

  const gageCalc = trying => {
    var result = 0;
    if (trying >= 16 && trying <= 18.5) {
      result = getPercentage(trying, 16, 18.5, 0);
    } else if (trying > 18.5 && trying < 25) {
      result = getPercentage(trying, 18.5, 25, 0.33);
    } else if (trying >= 25 && trying <= 40) {
      result = getPercentage(trying, 25, 40, 0.70);
    }
    return result;
  };

  function getPercentage(trying, lowerBound, upperBound, segmentAdjustment) {
    return (
      (trying - lowerBound) / (upperBound - lowerBound) / 3 + segmentAdjustment
    );
  }
  

    return (
        <>
            <BmiContainer >
            <BmiWrapper>
                <Icon to="/">RamziWebsite</Icon>
                    <BMIForm>
                    <Form onSubmit={calculate} >
                        <GaugeChart id="gauge-chart2" 
                         nrOfLevels={13}
                          percent={gageCalc(trying)} 
                          needleColor="red"
                          formatTextValue={()=>{
                              return trying;
                          }}
                          
                          />
                        <FormH1>{bmi}</FormH1>
                        <FormLabel>height in meters</FormLabel>
                        <FormInput value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height" />
                        <FormLabel>mass in kg</FormLabel>
                        <FormInput value={mass} onChange={(e) => setMass(e.target.value)}placeholder="Mass" />
                        <BMIButton type="submit">Calculate</BMIButton>
                    </Form>
                </BMIForm>
            </BmiWrapper>
            </BmiContainer>
        </>
    )
}

export default BMICul;
