int counter = 0;


void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
 if (Serial.available() > 0) {
    // read the incoming byte:
    int incomingByte = Serial.read();

    // say what you got:
   
    if(incomingByte == 99){
//     Serial.print("I received: ");
    counter ++;
    Serial.println(counter);
    }
  }
}
