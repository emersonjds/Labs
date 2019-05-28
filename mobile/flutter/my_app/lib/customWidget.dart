import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hello Widget'),
        ),
        body: Center(
          child: Container(
            child: Center(
              child: Text('Hellow Container'),
            ),
          ),
        ),
      )));
}

class CustomWidget extends StatelessWidget {
  final name = 'Emerson';
  @override
  Widget build(BuildContext context) {
    assert(debugCheckHasMaterial(context));

    return Material(
      color: Colors.transparent,
      child: Container(
        height: 400.0,
        child: InkWell(
          highlightColor: color[50],
          splashColor: color[100],
          onTap: () {
            print('I was tapped');
          },
          child: Padding(
            padding: EdgeInsets.all(16.0),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.only(right: 16.0),
                  child: iconLocation != null
                      ? Icons(Icons.cake)
                      : Icons(Icons.access_time),
                ), Center(child: Text( name, textAlign: TextAlign.center)
              ],
            ),
          ),
        ),
      ),
    );
  }

  int buildBorderRadius22(int borderRadius2) => borderRadius2;
}
