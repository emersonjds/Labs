void main() {
  for (var i = 1; i <= 10; i++) {
    print("Esta a tabuada do $i");
    for (var y = 1; y <= 10; y++) {
      // all parameters posted inside of braces are executed in sequence like a normal account
      print("$i * $y = ${i * y}");
    }
  }
}
