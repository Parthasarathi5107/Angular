import { Component, OnInit } from '@angular/core';

interface task{
  taskName:string,
  priority:number,
  status:string
}

@Component({
  selector: 'app-taskcomponent',
  templateUrl: './taskcomponent.component.html',
  styleUrls: ['./taskcomponent.component.css']
})
export class TaskcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myTaskList:task[]=[];
  userinput = {} as task;
  
  
  addOrUpdate(name:string,priority:string){
    let isFound:boolean = false;
      
      for(let i = 0;i<this.myTaskList.length;i++)
      {
        if(this.myTaskList[i].taskName == name)
        {
          isFound = true;
          this.myTaskList[i].priority = parseInt(priority);
          break;
        }
      }
  
      if(!isFound)
      {
        let pri:number = parseInt(priority);
        let tempTask:task={
          taskName:name,
          priority:pri,
          status:"pending"
        };
        this.myTaskList.push(tempTask);
      }
  
    }
  
  getAllTasks():task[]{
    return this.myTaskList;
  }
  
    doChangeStatus(status:string, name:string){
     this.myTaskList.forEach(task=>{
       if(task.taskName.localeCompare(name)==0){
         task.status=status;
       }
     })
    }
  }
  


  

