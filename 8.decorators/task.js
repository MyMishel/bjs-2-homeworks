//Задание 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find(item => item.hash === hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }

    let result = func.call(this, ...args);
    cache.push({ hash, result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

// Задание 2
function debounceDecoratorNew(func) {
  let timerID = null;
  let repeatCall = false;

  function wrapper(...rest) {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      repeatCall = false;
      return func.call(...rest);
    });
    if (!repeatCall) {
      repeatCall = true;
      func.call(...rest);
    }
  }
  return wrapper;
}

//Задание 3
function debounceDecorator2(func) {
  let timer = null;
  let timerState = false;
  wrapper.cout = 0;

  function wrapper(...rest) {
    ++wrapper.cout;
    if (!timerState) {
      func.call(this, ...rest);
    };
    timerState = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(this, ...rest);
      timerState = false;
    });
  }
  return wrapper;
}