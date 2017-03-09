import { Component, OnInit ,Output, Input,EventEmitter, OnChanges } from '@angular/core';
import {SharedService} from '../service/shared.service'
import * as myGlobals from '../globals'



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public ourEvents:any[] =[]
  public ourDepositEvents:any[]=[]
  public withdrawls:any[]=[]

  constructor(private ss: SharedService) {

    ss.accounts = myGlobals.web3.eth.accounts


    
  }

  // @Input('events')
  //     set updateourEvents(events:any) :any{
  //   this.ourEvents.push(events);
  // }


  // @Input('depositEvents')
  //     set updateourdepositEvents(depositEvents:any) :any{
  //   this.ourEvents.push(depositEvents);
  // }

          // $scope.$on('$destroy', function() {
        //     events.stopWatching();
        //     depositEvents.stopWatching();
        // });

  ngOnInit() {

  // this.ourEvents = []
  // this.ourDepositEvent=[]
  // this.withdrawls=[]

    var that =this

     myGlobals.SimpleWallet.deployed().then(function(myContract:any) {

        var events = myContract.allEvents({fromBlock: 0, toBlock: 'latest'});
        
        // events.watch(function(error :any, result:any) {

        
        
        events.watch(function(error:any, event:any){
        // console.log(events)
        that.ourEvents.push(event);
          if (!error)
            console.log(event);
        });

         var depositEvents = myContract.Deposit({fromBlock: 0, toBlock: 'latest'});

        var depositEvents = myContract.Deposit(null, {fromBlock: 0, toBlock: 'latest'}, function(error:any, result:any) {
          that.ourDepositEvents.push(result);
        });



 
        myContract.getAmountOfWithdrawls.call(myGlobals.web3.eth.accounts[0]).then(function(result:any) {
            var numberOfWithdrawls = result.toNumber();
            for(var i = 1; i <= numberOfWithdrawls; i++) {
                myContract.getWithdrawlForAddress.call(myGlobals.web3.eth.accounts[0], i).then(function(result_withdrawl:any) {
                    result_withdrawl[1] = myGlobals.web3.fromWei(result_withdrawl[1], "ether").toNumber();
                    that.withdrawls.push(result_withdrawl);
                });
            }

            return this;
        });

    });
  }

}
