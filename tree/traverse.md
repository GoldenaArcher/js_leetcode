# 树的遍历

包括前序、中序、后序、层序，前中后右两种写法，层序只用了 BFS。

## 前序

称之为前序是因为前序遍历时候，`rot` 在左子树和右子树之前：`[root, left, right]`，以下图为例：

![binary tree](https://img-blog.csdnimg.cn/c3741d7317264734806bc32c9d9d1b59.png)

前序遍历的顺序为：`[A, B, D, E, C, F]`，其遍历过成为：

1. 从根部开始，此时访问的结点为 A

   ![preorder2](https://img-blog.csdnimg.cn/81f75e41baa64522832bde39e2988fe0.png)

   输出的结果为：`[A]`

2. 从左子树开始访问，此时访问的结点为 B

   ![preorder3](https://img-blog.csdnimg.cn/a188b094d96f4cd7bf214a16dfd1cf65.png)

   输出的结果为：`[A, B]`

3. 重复步骤，继续访问结点 B 的左子树

   ![preorder4](https://img-blog.csdnimg.cn/89edf3ec333c4553912f75613d373e5d.png)

   输出的结果为：`[A, B, D]`

4. 没有更多的左子树可以访问，现在开始访问右子树

   ![preorder5](https://img-blog.csdnimg.cn/709dfe5e92084cdb8de13e3c21cce601.png)

   输出的结果为：`[A, B, D, E]`

5. 当前左子树访问完毕，开始访问右子树

   ![preorder6](https://img-blog.csdnimg.cn/3a59a8cd290543cda8ca3a8bed244412.png)

   输出的结果为：`[A, B, D, E, C]`

6. 重复该步骤，完成当前树的访问

### 前序实现

#### 前序递归

对于树的遍历来说，递归地实现方法是最简单的，只要按照：

1. 将当前值输出
2. 访问左子树
3. 访问右子树

这样的逻辑去实现即可：

```javascript
const preorderRecur = (root) => {
  if (!root) return [];
  return [root.val, ...preorder(root.left), ...preorder(root.right)];
};
```

#### 前序遍历

遍历可以使用 stack 的方法去实现，因为 stack 的数据结构是 FILO，所以就可以保证每次获取上一个的结点都是最近的树。

依旧以上面的图为例，下面简单的描述一下每次访问时 stack 中包含的节点：

1. [A]

   这时候只有根结点

2. [C, B]

   这时候栈中存在的是根结点的左右两个结点，注意后将左结点压入栈中，这样能够保证左结点可以最先跳出

3. [C, E, D]

   弹出一个最近的结点，并重复步骤将弹出结点的子节点压入 stack 中

4. 重复该步骤一直到栈为空

实现如下：

```javascript
const preorder = (root) => {
  const stack = [root],
    res = [];
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return res;
};
```

## 中序

称之为前序是因为前序遍历时候，`rot` 在左子树和右子树中间：`[left, root, right]`，依旧以上面的图为例

![binary tree](https://img-blog.csdnimg.cn/c3741d7317264734806bc32c9d9d1b59.png)

递归的实现依然比较简单：

```javascript
const inorderRecur = (root) => {
  if (!root) return [];

  return [...inorderRecur(root.left), root.val, ...inorderRecur(root.right)];
};
```

前序遍历的顺序为：`[D, B, E, A, F, C]`，迭代过程中会使用一个 stack 去保存结点。

1. []

   此时虽然访问到了 A，但是因为左子树还没有完成所有的遍历，现在不能够将当前结点输出

   ![inorder1](https://img-blog.csdnimg.cn/a1e86a341e7e479087f75275cbdc1198.png)

2. []

   这时候虽然访问到了 B，但是左子树依旧没有完成遍历，所以还不能够将当前值输出

   ![inorder2](https://img-blog.csdnimg.cn/4df769fb5ce149058d55921f2dae4a73.png)

3. [D]

   此时访问到了 D，因为这是最后一个左子树，因此可以将值输出

   ![inorder3](https://img-blog.csdnimg.cn/4899463612524c45806628e5dfb91d50.png)

4. [D, B, E]

   此时正在访问的就是 E，此时 E 也没有子节点，因此可以将 B 和 E 的值输出

   ![inorder4](https://img-blog.csdnimg.cn/74d55ddaa7f5411eaa316744bcba1575.png)

5. [D, B, E, A]

   此时访问的结点是 C，因为 C 是 A 的右子树，因此按序 A 也可以进行输出

   ![inorder5](https://img-blog.csdnimg.cn/3e602dc80a254341a08fb2f372a2abc7.png)

6. [D, B, E, A, F, C]

   现在访问的是最后一个结点 F，F 在 C 的左子树，因此需要优先输出

遍历的方法实现如下：

```javascript
const inorder = (root) => {
  let node = root;
  const stack = [],
    res = [];

  while (true) {
    if (node) stack.push(node);
    while (node?.left) {
      stack.push(node.left);
      node = node.left;
    }

    if (!stack.length) break;

    node = stack.pop();

    res.push(node.val);
    node = node?.right;
  }

  return res;
};
```

使用上面的代码过一遍一样的树：

1. ![inorder1](https://img-blog.csdnimg.cn/a1e86a341e7e479087f75275cbdc1198.png)

   stack 为：`[A]`

   此时还在第二个循环 `while (node?.left)` 中

2. ![inorder2](https://img-blog.csdnimg.cn/4df769fb5ce149058d55921f2dae4a73.png)

   stack 为：`[A, B]`

   此时还在第二个循环 `while (node?.left)` 中

3. ![inorder2](https://img-blog.csdnimg.cn/4899463612524c45806628e5dfb91d50.png)

   stack 为：`[A, B, D]`

   此时结束第二个循环，走入循环下面的逻辑。

   stack 中的最后一个值取出并进行输出，**最重要的一点是：**需要将 `node` 指向 `node` 的右子树

4. stack 为：`[A, B]`

   当前的值为 `D` 的右子树，也就是 `null`，因此不会进入 `while (node?.left)` 循环中

   随后依旧取出 stack 中的最后一个结点，输出，将 `node` 指向该结点的右子树，即 E

5. ![inorder4](https://img-blog.csdnimg.cn/74d55ddaa7f5411eaa316744bcba1575.png)

   stack 为：`[A]`

   当前值为 E，因为 E 没有左右子树，因此不会进入 `while (node?.left)` 循环中，并且最后会将 `node` 指向 null

6. 此时 stack 的长度依然为 1，node 指向 null，因此会执行 `node = stack.pop();` 这一行。

   A 的值会被输出，同时 node 指向 A 的右子树，也就是 C

7. ![inorder5](https://img-blog.csdnimg.cn/3e602dc80a254341a08fb2f372a2abc7.png)

   C 不是一个空置，所以会在 `while (true)` 中的第一行被压入 stack 中，此时的 stack 值为 `[C]`

   C 也有左子树，因此会进入循环体将所有的左子树压入 stack 中

   最终在结束 `while (node?.left)` 循环后，stack 的值为 `[C, F]`

8. 最后重复步骤，完成遍历

## 后序

递归的写法依旧比较简单：

```javascript
const postorderRecur = (root) => {
  if (!root) return [];

  return [
    ...postorderRecur(root.left),
    ...postorderRecur(root.right),
    root.val,
  ];
};
```

后序遍历的实现就是将 root 的值放在最后输出，也就是说只有将左子树和右子树全都遍历完成后，才将当前结点的值进行输出。

迭代的写法如下：

```javascript
const postorder = (root) => {
  let curr = root;
  const stack = [],
    res = [];

  do {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      let temp = stack[stack.length - 1].right;
      // only has left child tree
      if (temp === null) {
        temp = stack.pop();
        res.push(temp.val);

        while (stack.length && temp === stack[stack.length - 1].right) {
          temp = stack.pop();
          res.push(temp.val);
        }
      } else {
        curr = temp;
      }
    }
  } while (stack.length);

  return res;
};
```

以同一张图为例：

1. ![postorder](https://img-blog.csdnimg.cn/a1e86a341e7e479087f75275cbdc1198.png)

   此时访问的结点是 A，A 的值不为 null，所以 stack 的值为 `[A]`

2. ![inorder2](https://img-blog.csdnimg.cn/4df769fb5ce149058d55921f2dae4a73.png)

   此时访问的结点是 B，B 的值不为 null，所以 stack 的值为 `[A, B]`

3. ![inorder2](https://img-blog.csdnimg.cn/4899463612524c45806628e5dfb91d50.png)

   此时访问的结点是 D，D 的值不为 null，所以 stack 的值为 `[A, B, D]`

4. 此时访问的是 `D.left`，这是一个空值，会走到第一个 `else` 里去。

   `else` 中的 `temp` 指向的就是 `D.right`，D 并不存在右子树，这也代表了 D 的左右子树都已经访问完毕，因此将值输出即可

   此时 stack 中的值为 `[A, B]`

5. ![postorder2](https://img-blog.csdnimg.cn/b32d1cc212364b7e83adff66efe51ddf.png)

   这个循环中会将 `temp` 指向 `B` 的右子树，此时右子树存在，`curr` 的指向改为 E，再一次重复循环

   此时 stack 的值为 `[A, B, E]`

6. E 均不存在左右子树，可以进行输出

   此时 stack 的值为 `[A, B]`

   这里在 `if (temp === null)` 的循环体

   即：

   ```javascript
   // 在这里 temp 是 E
   // stack 是 [A, B]
   // E 是 B 的右树，这时候在这个循环体内进行迭代，一直回溯所有的右子树
   while (stack.length && temp === stack[stack.length - 1].right) {
     temp = stack.pop();
     res.push(temp.val);
   }
   ```

   `while` 循环结束时如下：

   ![postorder3](https://img-blog.csdnimg.cn/1f077adf44e641508f317e149482c554.png)

   这个循环跑完后，stack 的值为 `[A]`， curr 为 null

7. 新的循环中，curr 会指向 `A.right`，然后开始右子树的遍历

总体来说，后序遍历是最麻烦的遍历方式。

不过在迭代写法中的后序遍历，会不断地遍历所有的子树，因此空间复杂度为 $O(h)$，换言之，后序遍历也可以用来查找最深子树。

最后，把前序遍历的结果进行翻转之后，其实也能获得后序遍历的结果：

```javascript
var postorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    res.push(node.val);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return res.reverse();
};
```

## 层序

层序其实就是比较简单的 BFS 了。

```javascript
var levelOrder = function (root) {
  if (root === null) return [];

  const queue = [root];
  const res = [];

  while (queue.length > 0) {
    let size = queue.length;
    const currDegree = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      currDegree.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    res.push(currDegree);
  }

  return res;
};
```
