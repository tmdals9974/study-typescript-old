function logText<T>(text: T): T {
  console.log(text);
  return text;
}

logText(10); //return number
logText('hi'); //return string
logText<string>('hi'); //return string 명시적
logText(true); //return boolean