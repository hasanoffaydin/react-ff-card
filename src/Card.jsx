function Card(props)
{
    return(
        <div>
            <div className="card" style={{backgroundColor:props.cardColor,color:props.fontColor}}>
            <div className="card-logo">
            <img src="https://www.clipartmax.com/png/middle/285-2858689_6-months-interest-free-on-shutters-weekly-and-fortnightly-credit-card-logos.png" alt="Card Logo"/>
            </div>
            <div className="card-number">{props.cardNumber}</div>
            <div className="card-holder">{props.cardHolder}</div>
            <div className="card-expiry">{props.MM + "/"}{props.YY}</div>
            <div className="cvc"> {"Cvc \n" + props.cvc}</div>
            </div>
            <div className="rear-part" style={{backgroundColor:props.cardColor,color:props.fontColor}}>
                <div className="mini-part"></div>
                <h3>{props.cardHolder}</h3>
                <img src="https://i.pinimg.com/474x/12/b4/af/12b4af48b0911dedd3e8cc88c2ad21a6.jpg" className="logobank"/>
            </div>
      </div>
    )
}
export default Card