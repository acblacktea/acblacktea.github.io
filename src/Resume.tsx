import React from "react";
import './Resume.scss';

interface labelProps {
   name: string;
} 

let prevIndex = -1
function Label(props: labelProps) {
    let colors: string[] = [
      "linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%)",
      "linear-gradient(to right, #603813 0%, #b29f94  51%, #603813  100%)",
      "linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%)",
      "linear-gradient(to right, #e52d27 0%, #b31217  51%, #e52d27  100%)",
      "linear-gradient(to right, #DA22FF 0%, #9733EE  51%, #DA22FF  100%)",
      "linear-gradient(to right, #DA22FF 0%, #9733EE  51%, #DA22FF  100%)",
      "linear-gradient(to right, #003973 0%, #E5E5BE  51%, #003973  100%)",
      "linear-gradient(to right, #CC95C0 0%, #DBD4B4  51%, #CC95C0  100%)",
      "linear-gradient(to right, #EDE574 0%, #E1F5C4  51%, #EDE574  100%)",
      "linear-gradient(to right, #3CA55C 0%, #B5AC49  51%, #3CA55C  100%)"
    ]

    let index = Math.floor(Math.random() * colors.length);
    while(index == prevIndex) {
      index = Math.floor(Math.random() * colors.length);
    }

    prevIndex = index

    console.log(index, colors[index])
    return (
      <div className="label" style={{"backgroundImage": colors[index]}}>{props.name}</div>
    );
}

function SubTitle() {
    return (
      <div className="Subtitle">{"What I touched"}</div>
    )
}

function Resume() {
  return (
    <div className="total">
      <div className="Experience">
        {"Tiktok singapore (backend engineer) - 2022/8 ~ Now"}
        <SubTitle></SubTitle>
        <div className="labelGroup">
          <Label name="go"/>
          <Label name="mircoservice"/>
          <Label name="mysql"/>
          <Label name="redis"/>
          <Label name="data"/>
        </div>
      </div>
      <div className="Experience">
        {"Grab Beijing (backend engineer) - 2021/10 ~ 2022/7"}
        <SubTitle></SubTitle>
        <div className="labelGroup">
          <Label name="go"/>
          <Label name="microservice"/>
          <Label name="mysql"/>
          <Label name="redis"/>
          <Label name="kafka"/>
          <Label name="advertise"/> 
        </div>
      </div>
      <div className="Experience">
        {"Microsoft Beijing (backend&frontend engineer)- 2018/7 ~ 2021/10"}
        <SubTitle></SubTitle>
        <div className="labelGroup">
          <Label name="c++/c#"/>
          <Label name="typescript"/>
          <Label name="spark"/>
          <Label name="nlp"/>
        </div>
      </div>
      <div className="Experience">
        {"Deepglint Hefei (deep learning engineer intern)- 2018/4 ~ 2018/7"}
        <SubTitle></SubTitle>
        <div className="labelGroup">
          <Label name="python"/>
          <Label name="deeplearning(CV)"/>
        </div>
      </div>
      <div className="Experience">
        {"Baidu beijing (algorithm engineer intern) - 2017/4 ~ 2017/9"}
        <SubTitle></SubTitle>
        <div className="labelGroup">
          <Label name="c++/python"/> 
          <Label name="machine learning"/>
        </div>
      </div>
      <div className="Experience">
        {"Anuhui univeristy - 2014 ~ 2018"}
        <SubTitle></SubTitle>
        <div className="labelGroup">
          <Label name="sleep/play compute games"/> 
          <Label name="c++"/> 
          <Label name="acm-icpc contest"/>
          <Label name="machine learning"/> 
        </div>
      </div>
      <div className="Experience">
        {"Amateur life"}
        <SubTitle></SubTitle>
        <div className="labelGroup">
          <Label name="sleep"/> 
          <Label name="sporting"/> 
          <Label name="financial/crypto"/>
        </div>
      </div>
      <div style={{"marginBottom":"200px"}}></div>
    </div>
  ) 
}  

export default Resume;