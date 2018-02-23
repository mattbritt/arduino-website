/* Main example sketch:
 * --------------------------
 */ 
#include <LiquidCrystal.h>
int led = 13;

IRreceiver receiver(12);    // Create an IR receiver on pin 12
LiquidCrystal lcd(7, 6, 5, 4, 3, 2);

void setup() {
  pinMode(led, OUTPUT);
  lcd.begin(16,2);
}

int count = 0;
void loop() {
  if (receiver.available()){        // If data is available
    digitalWrite(led, HIGH);        // Blink the receive led
    IRdata data = receiver.read();  // Read the received command from the IR buffer
    if (!data.repeat) {             // If it's not a repeat command: print command and address to the lcd
      lcd.clear();
      lcd.print("Button: ");
      lcd.print(data.command);
      lcd.setCursor(0,1);
      lcd.print("Address: ");
      lcd.print(data.address);
      count = 1;
    } else {
      count++;  // count the number of repeats 
      lcd.setCursor(11,0);
      lcd.print("x ");
      lcd.print(count);
    }
  } else {
    digitalWrite(led, LOW);
  }
  delay(100);               // wait for a while
}