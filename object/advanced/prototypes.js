console.log("hello");

let f = function() {
	this.a = 1;
	this.b = 2;
}

let o = new f();

f.prototype.b = 3;
f.prototype.c = 4;

console.log("o.a: " + o.a);

console.log("o.b: " + o.b);

console.log("o.c: " + o.c);

console.log("o.d: " + o.d);