import assert, { notStrictEqual, strictEqual } from "node:assert";
import { beforeEach, describe, it } from "node:test";
import SinglyLinkedList from "./singly-linked-list";

describe(' basic tests for the JavaScript linked list', function() {
  var list: SinglyLinkedList | null = null;
  
  beforeEach(function() {
    list = new SinglyLinkedList();
  });
  
  it('should start out with an empty list', function() {
    strictEqual(list?.head, null);
    strictEqual(list?.tail, null);
  });
  
  it('should be able to add a single item to the list', function() {
    list?.push('blurp');

    notStrictEqual(list?.head, null);
    notStrictEqual(list?.tail, null);
    strictEqual(list?.head?.value, 'blurp');
    strictEqual(list?.tail?.value, 'blurp');
  });

  it('should have a null next item at the start of the list after adding a single item', function() {
    list?.push('blarp');
    strictEqual(list?.head?.value, 'blarp')
    strictEqual(list?.tail?.value, 'blarp')
    strictEqual(list?.head?.next, null);
    strictEqual(list?.tail?.next, null);
  });
  
  it('should have a null next item at the end of the list after adding a single item', function() {
    list?.push('blorp');
    strictEqual(list?.head?.value, 'blorp')
    strictEqual(list?.tail?.value, 'blorp')
    strictEqual(list?.tail?.next, null);
  });
  
  it('should be able to add multiple items to the list', function() {
    list?.push('blurp');
    list?.push('blarp');
    list?.push('blorp');
    notStrictEqual(list?.head, null);
    notStrictEqual(list?.tail, null);
    strictEqual(list?.head?.value,'blurp');
    strictEqual(list?.tail?.value,'blorp');
  });
  
  it('should has a null next item at the end of the list after adding multiple items', function() {
    list?.push('blurp');
    list?.push('blarp');
    list?.push('blorp');
    strictEqual(list?.tail?.value,'blorp');
    strictEqual(list?.tail?.next, null);
  });
  
  it('should have a first item that points to the second item when you add multiple items', function() {
    list?.push('blurp');
    list?.push('blarp'); // 2nd item we're testing for
    list?.push('blorp');
    notStrictEqual(list?.head?.next, null);
    strictEqual(list?.head?.next?.value,'blarp');
  });

  it('should have a next-to-last item that points to the last item when you add multiple items', function() {
    list?.push('blurp');
    list?.push('blarp');
    list?.push('blorp'); // 3rd item we're testing for
    notStrictEqual(list?.head?.next, null);
    strictEqual(list?.head?.next?.next?.value,'blorp'); // no direct accessor so next next next?...
  });
});

describe('delete tests for the JavaScript linked list', function() {
  var list: SinglyLinkedList | null = null;
  
  beforeEach(function() {
    list = new SinglyLinkedList();
    list?.push('ONE');
    list?.push('TWO');
    list?.push('THREE');
  });

  it('should be able to delete an item in the middle of the list', function() {
    list?.remove(1); // delete 2nd item
    notStrictEqual(list?.head?.next, null);
    strictEqual(list?.head?.value,'ONE');
    strictEqual(list?.head?.next?.value,'THREE'); // first item goes right to the third now
    strictEqual(list?.tail?.value,'THREE');
  });

  it('should be able to delete an item at the start of the list', function() {
    list?.remove(0); // delete 1st item
    notStrictEqual(list?.head?.next, null);
    strictEqual(list?.head?.value,'TWO'); // starts with 2 now
    strictEqual(list?.head?.next?.value,'THREE'); 
    strictEqual(list?.tail?.value,'THREE');
  });
  
  it('should be able to delete an item at the end of the list', function() {
    list?.remove(2); // delete 3rd item
    notStrictEqual(list?.head?.next, null);
    strictEqual(list?.head?.value,'ONE'); 
    strictEqual(list?.head?.next?.value,'TWO'); 
    strictEqual(list?.tail?.value,'TWO');
  });
  
  it('should not delete anything if we give it something bogus', function() {
    list?.remove(3); // ain't gots none
    notStrictEqual(list?.head?.next, null);
    strictEqual(list?.head?.value,'ONE'); // everything still there
    strictEqual(list?.head?.next?.value,'TWO'); 
    strictEqual(list?.head?.next?.next?.value,'THREE');
    strictEqual(list?.tail?.value,'THREE');
  });
});

describe('insert after tests for the JavaScript linked list', function() {
  var list: SinglyLinkedList | null = null;
  
  beforeEach(function() {
    list = new SinglyLinkedList();
    list?.push('ONE');
    list?.push('TWO');
    list?.push('THREE');
  });

  it('should insert a new item as first item in the list', function() {
    list?.insert(0, 'FROG BUTT');
    strictEqual(list?.head?.value,'FROG BUTT');
    strictEqual(list?.head?.next?.value,'ONE');
    strictEqual(list?.head?.next?.next?.value,'TWO');
    strictEqual(list?.head?.next?.next?.next?.value,'THREE');
  });

  it('should insert a new item as last item in the list', function() {
    list?.insert(3, 'UGLY WIG');
    strictEqual(list?.tail?.value,'UGLY WIG');
    strictEqual(list?.head?.value,'ONE');
    strictEqual(list?.head?.next?.value,'TWO');
    strictEqual(list?.head?.next?.next?.value,'THREE');
    strictEqual(list?.head?.next?.next?.next?.value,'UGLY WIG');
  });

  it('should insert a new item in the middle of the list', function() {
    list?.insert(1, 'JORTS');
    strictEqual(list?.head?.value,'ONE');
    strictEqual(list?.head?.next?.value,'JORTS');
    strictEqual(list?.head?.next?.next?.value,'TWO');
    strictEqual(list?.head?.next?.next?.next?.value,'THREE');
    strictEqual(list?.tail?.value,'THREE');
  });

  it('should not insert an item if you ask it to insert it after the end', function() {
    list?.insert(4, 'HOT PICKLES');
    strictEqual(list?.head?.value,'ONE');
    strictEqual(list?.head?.next?.value,'TWO')
    strictEqual(list?.head?.next?.next?.value,'THREE');
    strictEqual(list?.tail?.value,'THREE');
  });
});

describe('index tests for the JavaScript linked list', function() {
  var list: SinglyLinkedList | null = null;
  
  beforeEach(function() {
    list = new SinglyLinkedList();
    list?.push('ONE');
    list?.push('TWO');
    list?.push('THREE');
    list?.push('FOUR');
    list?.push('FIVE');
    list?.push('SIX');
  });
  
  it('should return undefined when given an index of -1', function() {
    var indexedItem = list?.get(-1);
    strictEqual(indexedItem, undefined);
  });

  it('should return the first item in the list when given an index of 0', function() {
    var indexedItem = list?.get(0);
    strictEqual(indexedItem,list?.head);
  });

  it('should return the third item in the list when given an index of 2', function() {
    var indexedItem = list?.get(2);
    notStrictEqual(indexedItem, undefined);
    strictEqual(indexedItem?.value,'THREE');
  });

  it('should return the last item in the list when given an index of 5', function() {
    var indexedItem = list?.get(5);
    notStrictEqual(indexedItem, undefined);
    strictEqual(indexedItem?.value,'SIX');
  });
  
  it('should return undefined when given an index larger than the number of items in the list', function() {
    var indexedItem = list?.get(27);
    strictEqual(indexedItem, undefined);
  });
  
});