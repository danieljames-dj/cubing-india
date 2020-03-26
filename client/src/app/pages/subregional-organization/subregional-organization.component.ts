import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subregional-organization',
  templateUrl: './subregional-organization.component.html',
  styleUrls: ['./subregional-organization.component.css']
})
export class SubregionalOrganizationComponent implements OnInit {

  displayedColumns: string[] = ['name', 'regions', 'contact'];
  subregional_organizations = [
    {
      name: "Speed Cubing Bangalore",
      regions: "Karnataka",
      contact: "speedcubingbangalore@gmail.com"
    },
    {
      name: "Capital Cubing",
      regions: "Delhi",
      contact: "capitalcubing@gmail.com"
    },
    {
      name: "Chennai Cubing Club",
      regions: "Tamil Nadu",
      contact: "chennaicubingclub@gmail.com"
    },
    {
      name: "Cubing Kerala",
      regions: "Kerala",
      contact: "keralaspeedcubing@gmail.com"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
