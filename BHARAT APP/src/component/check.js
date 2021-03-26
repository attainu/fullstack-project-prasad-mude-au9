
var val = {
    "Global Quote": {
        "01. symbol": "TCS.BSE",
        "02. open": "3085.2000",
        "03. high": "3127.5500",
        "04. low": "3061.8000",
        "05. price": "3120.3501",
        "06. volume": "210057",
        "07. latest trading day": "2021-01-08",
        "08. previous close": "3032.7000",
        "09. change": "87.6501",
        "10. change percent": "2.8902%"
    }
}

/*Object.keys(val).map((item)=>{
    console.log(val[item][`05. price`])
})*/

console.log(val[`Global Quote`][`05. price`][`10. change percent`])