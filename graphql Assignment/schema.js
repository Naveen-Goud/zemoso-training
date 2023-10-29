const { gql } = require("apollo-server");

exports.typeDefs = gql`
type Query{
    coins:[Coin]!
    chart(name:String):Coin 
    supportedExchanges:[Exchanges]
    getMarket(coinId:String):Coin
    getTicket(exchange:String,pair:String):getMarket
    fiatCurrency:[FiatCurrency]
}

input coinName{
    name:String
}
type Coin {
      id:  String,
      icon:   String,
      name:    String,
      symbol:   String,
      rank: Int ,
      price: Float,
      priceBtc: Float,
      volume: Float,
      marketCap: Float,
      availableSupply: Float,
      totalSupply: Float,
      priceChange1h:Float,
      priceChange1d: Float,
      priceChange1w:Float,
      websiteUrl:   String,
      redditUrl:  String,
      twitterUrl:  String,
      exp: [ String],
      chart:[ [Float]],
      getMarket:[getMarket]
}

type getMarket{
    price: Float,
    exchange: String,
    pair: String,
    volume: Int,
    }

type Exchanges{
    currency:String 
}

type FiatCurrency { 
        name: String ,
        rate: Float ,
        symbol: String ,
        imageUrl: String
}

   type News{
      id:  String,
      feedDate: Int,
      source: String,
      title: String,
      icon: String,
      imgURL: String,
      description: String,
      link: String ,
      sourceLink: String,
      reactionsCount:  Int, 
      shareURL: String,
      relatedCoins: [
        publish
      ],
      content: Boolean,
      coins: [ 
                coinKeyWords: String,
                coinPercent: Float,
                coinTitleKeyWords:String,
                coinNameKeyWords: String,
                coinIdKeyWords: String
         ]
    }
`;
