const { BinaryTree, Node } = require("./BinaryTree.js")

 test('Calculate max edge length', () => { 
    let tree = new BinaryTree(new Node(5));
    tree.root.leftNode = new Node(3, new Node(2), new Node(5));
    tree.root.rightNode = new Node(7, new Node(1), new Node(0, new Node(2), new Node(8, null, new Node(5))));

    expect(tree.calculateMaxEdge()).toBe(4)

    tree.root.leftNode.leftNode.leftNode = new Node(2, new Node(3, new Node()));

    expect(tree.calculateMaxEdge()).toBe(5)
  })

  test('Calculate number of laefs', () => { 
    let tree = new BinaryTree(new Node(5));
    tree.root.leftNode = new Node(3, new Node(2), new Node(5));
    tree.root.rightNode = new Node(7, new Node(1), new Node(0, new Node(2), new Node(8, null, new Node(5))));

    expect(tree.calculateLeafs()).toBe(5);

    tree.root.leftNode = new Node();

    expect(tree.calculateLeafs()).toBe(4);
  })

  test('Equal trees are correctly compared to be equal', () => { 
    let tree1 = new BinaryTree(new Node(5));
    tree1.root.leftNode = new Node(3, new Node(2), new Node(5));
    tree1.root.rightNode = new Node(7, new Node(1), new Node(0, new Node(2), new Node(8, null, new Node(5))));

    let tree2 = new BinaryTree(new Node(5));
    tree2.root.leftNode = new Node(3, new Node(2), new Node(5));
    tree2.root.rightNode = new Node(7, new Node(1), new Node(0, new Node(2), new Node(8, null, new Node(5))));

    expect(tree1.isEqual(tree2)).toBe(true);

    tree2 = tree1

    expect(tree1.isEqual(tree2)).toBe(true);

    tree1 = new BinaryTree();
    tree2 = new BinaryTree();

    expect(tree1.isEqual(tree2)).toBe(true);
  })


  test('Different trees are correctly compared to be different', () => { 
    let tree1 = new BinaryTree(new Node(5));
    tree1.root.leftNode = new Node(3, new Node(2), new Node(5));
    tree1.root.rightNode = new Node(7, new Node(1), new Node(0, new Node(2), new Node(8, null, new Node(5))));

    let tree2 = new BinaryTree(new Node(5));
    tree2.root.leftNode = new Node(3, new Node(2), new Node(5));
    tree2.root.rightNode = new Node(7, new Node(1), new Node(0, new Node(2), new Node(8, null, new Node(5))));

    tree2.root.rightNode.rightNode.rightNode.rightNode.rightNode = new Node()

    expect(tree1.isEqual(tree2)).toBe(false);

    tree2.rightNode = null;
    

    expect(tree1.isEqual(tree2)).toBe(false);

    tree2 = new BinaryTree();

    expect(tree1.isEqual(tree2)).toBe(false);


  })