// Implement a trie with insert, search, and startsWith methods.

// Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true

///// VERSION 1: FUNCTION
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = { "*": "*" };
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this.root;

  for (let letter of word) {
    if (!current[letter]) {
      current[letter] = {};
    }
    current = current[letter];
  }
  current["*"] = "*";
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let current = this.root;

  for (let letter of word) {
    if (!current[letter]) {
      return false;
    }
    current = current[letter];
  }
  return current["*"] ? true : false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;

  for (let letter of prefix) {
    if (!current[letter]) {
      return false;
    }
    current = current[letter];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// /**
//  * Your Trie object will be instantiated and called as such:
//  * var obj = new Trie()
//  * obj.insert(word)
//  * var param_2 = obj.search(word)
//  * var param_3 = obj.startsWith(prefix)
//  */

///// VERSION 2: CLASSES

// class Trie {
//   constructor() {
//     this.root = {};
//   }

//   insert(word) {
//     let node = this.root;

//     for (let char of word) {
//       //   if (node[char] == null) node[char] = {};
//       if (!node[char]) node[char] = {};
//       node = node[char];
//     }

//     node.isEnd = true;
//   }

//   traverse(word) {
//     let node = this.root;

//     for (let char of word) {
//       node = node[char];

//       if (!node) return null;
//     }

//     return node;
//   }

//   search(word) {
//     let node = this.traverse(word);

//     return node != null && node.isEnd === true;
//   }

//   startsWith(prefix) {
//     return this.traverse(prefix) !== null;
//   }
// }

// TEST IT OUT
trie = new Trie();

trie.insert("apple");

// the same
// console.log(trie.root["a"]["p"]["p"]);
// console.log(trie.traverse("app")); // l { e { isEnd : true }}
// console.log(trie.traverse("ape")); // null

console.log(trie.search("apple")); // true
console.log(trie.search("appleyay")); // false
console.log(trie.search("a")); // false
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("a")); // true
