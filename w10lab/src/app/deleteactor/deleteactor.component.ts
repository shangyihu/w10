import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-deleteactor",
  templateUrl: "./deleteactor.component.html",
  styleUrls: ["./deleteactor.component.css"],
})
export class DeleteactorComponent implements OnInit {
  actorsDB: any[] = [];
  constructor(private dbService: DatabaseService, private router: Router) {}
  //Get all Actors
  onGetActors() {
    console.log("From on GetActors");
    return this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }
  //Delete Actor
  onDeleteActor(item: { title: string; }) {
    this.dbService.deleteActor(item.title).subscribe(result => {
      this.onGetActors();
      this.router.navigate(["/listactors"]);
    });
  }
  // This callback function will be invoked with the component get initialized by Angular.
  ngOnInit() {
    this.onGetActors();
  }
}