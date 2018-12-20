class Node {
    constructor(data){
        this.right = null;
        this.left = null;
        this.data = data;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

// Insert method 
// if root is empty  set root property to new node and return it
    insert(data) {
        let node = new Node(data);
        if (!this.root){
            this.root = node;
            return this;
        }
        let current = this.root;
        while(current){
            // check for duplicates
            if(data === current.data){
                return;
            }
            // left node insertion 
            if (data < current.data){
                if (!current.left){
                    current.left = node;
                    break
                }
                current = current.left
            }
            // right node insertion
            if(data > current.data){
                if (!current.right){
                    current.right = node;
                    break
                }
                current = current.right;
            }
        }
    }

    find(data){
        if(!this.root) return null;
        let current = this.root;

        while(current){
            if(data === current.data) return current.data;

            if(current.right && data > current.data){
                current = current.right;
            } else{
                current = current.left;
            }
        }
        return false;
    }

    contains(data){
        const found = this.find(data);

        if(found){
            return true;
        }
        return false;
    }

    //breadth first search
    bfs() {
        let node = this.root;
        const queue = [node];
        const finalData = [];

        while(queue.length){
            node = queue.shift();
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            finalData.push(node.data)
        }
        return finalData;
    }

    // depth first pre order
    preOrder(){
        // final pre order list
        const finalData = [];

        const traverse = node => {
            // push the data
            finalData.push(node.data);
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
        }

        traverse(this.root);
        return finalData;
    }

    // depth first post order

    postOrder(){
        const finalData = [];

        const traverse = node => {
            if(node.left){
                traverse(node.left);
            }
            if(node.right){
                traverse(node.right);
            }
            finalData.push(node.data);
        }

        traverse(this.root);
        return finalData;
    }

    // in-order traversal
    inOrder(){
        const finalData = [];
       function traverse(node){
         if(node.left) traverse(node.left)
           finalData.push(node.data)
         if(node.right) traverse(node.right)
       }
       traverse(this.root)
       return finalData
     }


}

// should add  new node to the tree
    
    const tree = new BinarySearchTree()

    tree.insert(5)
    tree.insert(3)
    tree.insert(2)
    tree.insert(4)
    
    //  should  get 3 as the first node on the left
    console.log(tree.root.left.data);

// find a node
 
  const tree2 = new BinarySearchTree()

  tree2.insert(5)
  tree2.insert(3)
  tree2.insert(2)
  tree2.insert(4)
  
  // true
  console.log(tree2.find(2))

  // false
  console.log(tree2.find(22))

// Breadth-first search
 
    const tree3 = new BinarySearchTree()

    tree3.insert(10);
    tree3.insert(4);
    tree3.insert(12);
    tree3.insert(1);
    tree3.insert(5);
    tree3.insert(11);

    // should return
    //  [10,4,12,1,5,11]
    console.log(tree3.bfs());


// Depth-first search
 
    const tree4 = new BinarySearchTree()

    tree4.insert(10);
    tree4.insert(4);
    tree4.insert(12);
    tree4.insert(1);
    tree4.insert(5);
    tree4.insert(11);
    
    // should return
    //  [10,4,1,5,12,11]
    console.log(tree4.preOrder());

    // should return
    //  [1,5,4,11,12,10]
    console.log(tree4.postOrder());

    // should return
    //  [1,4,5,10,11,12]
    console.log(tree4.inOrder());
 