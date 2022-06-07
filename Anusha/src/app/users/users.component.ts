import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/_services/master.service';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged,pipe} from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersData: any;
  dataSource: any;
  pageIndex = 0;
  pageSize = 5;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  filter: any;
  search: any;
  tableLength: any;

  constructor(private service: MasterService, private router: Router) {
    // this.filter
    //   .pipe(debounceTime(1000), distinctUntilChanged())
    //   .subscribe((value: any) => {
    //     this.users(this.pageIndex, this.pageSize)
    //   });
  }
  displayedColumns: string[] = ['id', 'name', 'status'];
  ngOnInit(): void {
    this.users(this.pageIndex, this.pageSize);
  }

  users(page: any, records_per_page: any) {
    let tableOptions = {
      page: page ? parseInt(page) + 1 : 1,
      records_per_page: records_per_page ? parseInt(records_per_page) : 5,
    };
    // Object.keys(this.search).forEach(
    //   (k) => this.search[k] == '' && delete this.search[k]
    // );
    let submitData = {
      ...tableOptions,
      // ...this.search,
    };

    this.service.requestGetParams(submitData, "department/list").subscribe((res) => {
      this.usersData = res.data.rows
      this.dataSource = new MatTableDataSource(this.usersData);
      this.tableLength = res.data.count;
      console.log("this.usersData", res.data.count);

    })
  }

  pageChanged(event: { pageIndex: number; pageSize: number; }) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.users(this.pageIndex, this.pageSize);
  }

}
