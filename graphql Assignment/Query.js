exports.Query={
    coins:(parent,args,{db})=>{
        return db.coins
     },
     chart:(parent, {  name },{db})=>{
          return  data=db.coins.find((coin)=> coin.name===name)
          
     },
     supportedExchanges:(parent, args,{db})=>{
        return   db.supportedExchanges 
   },
   getMarket:(parent, {coinId},{db})=>{
    return db.coins.find((coin)=>coin.id===coinId)
 },
 getTicket: (parent, { exchange, pair }, { db }) => {
   const data = db.coins.find((item) => {
      return   item.getMarket.find((market) => market.exchange === exchange && market.pair === pair);
    });
    
    if (!data) {
      throw new Error('Coin not found for the specified market');
    }

    const matchedMarket = data.getMarket.find((market) => market.exchange === exchange && market.pair === pair);

    if (!matchedMarket) {
      throw new Error('Market not found for the specified coin');
    }
    console.log(matchedMarket)

    return  matchedMarket
     
   },
   fiatCurrency:(parent,args,{db})=>{
      return db.fiatCurrency
   }
 } 
 
 
 