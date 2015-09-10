function foo() {
  this.baz = "baz";
  console.log(this.bar + " " + bar);
}

var bar = "bar";
baz = new foo();