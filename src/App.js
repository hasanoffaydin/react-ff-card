import './App.css';
import Card from './Card';
import FirstDiv from './FirstDiv';
import { useState } from "react"
import Data from './Data'
import TableComponent from './Data';
function App() {
    const [cardHolder,setcardHolder] = useState("")
    const [cardNumber,setcardNumber] = useState("")
    const [MM,setMM] = useState("")
    const [YY,setYY] = useState("")
    const [cvc,setcvc] = useState("")
    const [cardColor,setcardColor] = useState("")
    const [fontColor,setfontColor] = useState("")
  return (
    <div className="App">
      <FirstDiv onReturn={(cardHolder,cardNumber,MM,YY,cvc,cardColor,fontColor) => {
        setcardHolder(cardHolder)
        setcardNumber(cardNumber)
        setMM(MM)
        setYY(YY)
        setcvc(cvc)
        setcardColor(cardColor)
        setfontColor(fontColor)
      }}/> 
      <Card cardNumber = {cardNumber} cardHolder = {cardHolder} MM = {MM} YY = {YY} cvc = {cvc} cardColor ={cardColor} fontColor = {fontColor}/>
      <Data cardNumber = {cardNumber} cardHolder = {cardHolder} MM = {MM} YY = {YY} cvc = {cvc} cardColor = {cardColor} fontColor = {fontColor}/>
    </div>
  );
}

export default App;
