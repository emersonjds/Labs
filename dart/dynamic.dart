void main() {
// it's possible use a dynamic type, but it's cause a lot of use of memory
  dynamic data = 30;
  data = 3.1415;
  data = 'I have $data years old and pi value is $data';

  var age = 30;
  var pi = 3.1415;
  var text = 'I have $age years old and pi value is $pi';

  print(text);
}
