//constructor - выделяет память для объекта.
class AlarmClock {
   constructor() {
      this.alarmCollection = [];
      this.timerId = null;
   }
   //addClock - добавляет новый звонок в коллекцию существующих.
   addClock(time, action, id) {
      if (id === undefined) {
         throw new Error("Параметр ID не передан");
      } else if (this.alarmCollection.some(element => element.id === id)) {//Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.
         console.error("ID существует");
         return;
      }
      this.alarmCollection.push({ id, time, action })
   }
   //removeClock - удаляет определённый звонок.  
   removeClock(id) {
      if (this.alarmCollection.some(element => element.id === id)) {
         this.alarmCollection.splice(this.alarmCollection.findIndex(element => element.id === id), 1)//Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
         return true
      } else return false
   }
   //getCurrentFormattedTime - возвращает текущее время в строковом формате HH:MM
   getCurrentFormattedTime() {
      return new Date().toLocaleTimeString("ru-ru", {
         hour: "2-digit",
         minute: "2-digit",
      });
   }
   //start - запускает все звонки
   start() {
      let examination = checkClock.bind(this); //Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. 
      function checkClock(AlarmClock) {
         if (AlarmClock.time === this.getCurrentFormattedTime()) AlarmClock.func();
      }
      if (!this.timerId) this.timerID = setInterval(() => this.alarmCollection.forEach(element => examination(element)), 500);
   }
   //stop - останавливает выполнение всех звонков
   stop() {
      if (this.tierId === null) {
         return;
      }
      clearInterval(this.timerID);
      this.timerID = null;
   }
   //printAlarms - печатает все звонки
   printAlarms() {
      console.log("Будильник заведен:" + this.alarmCollection.length);
      this.alarmCollection.forEach((clok) => console.log(clok.time, clok.id));
   }
   //clearAlarms - удаляет все звонки
   clearAlarms() {
      this.stop();
      this.alarmCollection = [];
   }
}