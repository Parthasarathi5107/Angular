import { Component, OnInit } from '@angular/core';

interface StockDetails
{

     companyName: String 
     costPrice : number 
     volume : number 
    vwap : number 
  holding : boolean
}

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.css']
})
export class MaincomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isAccepted=false;
  isColored = false;
  stockName:string="";

  stock:StockDetails[]=[

  {
    companyName:"Infosys",
    costPrice : 1400,
    volume : 5,
    vwap : 1390,
    holding:false, 
    },
    {
    companyName:"HCL",
    costPrice : 950,
    volume : 7,
    vwap : 960,
    holding:false,
      }
    ]

    boughtStocks:StockDetails[] = [];

    getAllStocks():StockDetails[]{
        return this.stock;
      }

  getCostFromUser(cost:string,name:string){
    let userCost:number=parseInt(cost);
    this.stock.forEach(stock=>{
      let buyCost:number = stock.costPrice - (0.01*stock.costPrice);
      if(stock.companyName.localeCompare(name) == 0 && (userCost<=stock.costPrice && userCost>= buyCost)){
        this.isAccepted = true;
        this.stockName=name;
      }
    })
  }

  doBuyStock(){
    this.stock.forEach(stock=>{
      if(stock.companyName.localeCompare(this.stockName) == 0){
        stock.holding=true;
        this.boughtStocks.push(stock);
      }
    });
}

getHoldingStock()
{
  return this.boughtStocks;
}
}
