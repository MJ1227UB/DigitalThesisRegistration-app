import { Component, OnInit } from '@angular/core';
import {Contract} from '../shared/contract.model';
import {ContractService} from '../shared/contract.service';
import {Router} from "@angular/router";
import {GroupService} from "../shared/group.service";

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  contracts: Contract[];

  ngOnInit() {
    this.contracts = this.contractService.getMockContract();
  }

  constructor(private contractService: ContractService, private router: Router, private groupService: GroupService) { }

  selectContract(contract: Contract) {
    // Converting the contract object into a hashed string value by using the base 64 encoding btoa. btoa is for encrypting.
    const hashedValueOfTheContractObject = btoa(JSON.stringify(contract));
    // This is where we change the url. We append the hashedValue to the end of the url.
    this.router.navigate(['contracts/editContract', hashedValueOfTheContractObject]);
  }

  newContractBtn() {
    // this.groupService.create().subscribe(g => this.router.navigate(['contracts/newContract', g.id]));
    this.router.navigateByUrl('contracts/newContract');
  }

}
