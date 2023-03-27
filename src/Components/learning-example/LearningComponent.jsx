import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import { FifthComponent } from './FirstComponent';
import LearningJavaScriptComponent from './LearningJavaScriptComponent';


export default function LearningComponent() {
    return (
      <div className="LearningComponent">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
        <FifthComponent></FifthComponent>
        <LearningJavaScriptComponent></LearningJavaScriptComponent>
      </div>
    );
  }