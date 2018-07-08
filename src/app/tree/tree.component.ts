import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TreeNode } from './tree-node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input() treeData: TreeNode[];
  
  constructor() { }

  ngOnInit() {
  }

  toggleChild(node) {
    node.showChildren = !node.showChildren;
  }
 

}
