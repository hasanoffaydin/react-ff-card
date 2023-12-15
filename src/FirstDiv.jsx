import { useState } from "react"

function FirstDiv({onReturn})
{
    const [cardHolder,setcardHolder] = useState("")
    const [cardNumber,setcardNumber] = useState("")
    const [MM,setMM] = useState("")
    const [YY,setYY] = useState("")
    const [cvc,setcvc] = useState("")
    const [cardColor,setcardColor] = useState("")
    const [fontColor,setfontColor] = useState("")

        return (
            <div className="umumiDiv"> 
                <h1>Create Bank Card</h1>
                <form onSubmit={(e) => {
                     e.preventDefault();
                onReturn(cardHolder,cardNumber,MM,YY,cvc,cardColor,fontColor);
        }}>
                    <label htmlFor="cardholder"> CARDHOLDER NAME </label> <br></br>
                    <input id="cardholder" type="text" placeholder="e.g Jane Appleseed" onChange={(event) => {
            setcardHolder(event.target.value);
          }}/><br></br>
                    <label htmlFor="cardnumber">CARD NUMBER</label><br></br>
                    <input id="cardnumber" type="text" placeholder="e.g 1234 5678 9123 0000" onChange={(event) => {
            setcardNumber(event.target.value);
          }}/> <br></br>
                    <label htmlFor="data"> EXP. DATE (MM/YY) </label> <br></br>
                    <input id="data" type="text" placeholder="MM" onChange={(event) => {
            setMM(event.target.value);
          }}/> 
                    <input id="data" type="text" placeholder="YY" onChange={(event) => {
            setYY(event.target.value);
          }}/> <br></br>
                    <label htmlFor="CVC"> CVC </label> <br></br>
                    <input id="CVC" type="text" placeholder="e.g 123" onChange={(event) => {
            setcvc(event.target.value);
          }}/> <br></br>
                    <label htmlFor="cardcolor"> Card Color/Font Color </label> <br></br>
                    <input id="cardcolor" type="text" placeholder="e.g Card Color" onChange={(event) => {
            setcardColor(event.target.value);
          }}/> 
                    <input id="fontcolor" type="text" placeholder="e.g Font Color" onChange={(event) => {
            setfontColor(event.target.value);
          }}/> <br></br>
                    <button> Confirm </button>
                    <input type="reset" value={"Sifirla"} className="sifirla"/>
                </form>
            </div>
        )
}
export default FirstDiv
