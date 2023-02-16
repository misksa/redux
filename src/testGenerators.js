// Генератор -  функция, которая помечена звездочкой она возвращает нам данные поэтапно
function* generatorFunction() {
	for(let i = 0; i < 5; i++) {
		// за место return используем yield
		yield i
	}
}

const iter =  generatorFunction()

console.log(iter)

// если на этом этапе запустить то вернется объект со значением 0 и полем done false что означает что цикл не завершился
console.log(iter.next())
// 1 : false
console.log(iter.next())
// 2 : false
console.log(iter.next())
// 3 : false
console.log(iter.next())
// 4 : false
console.log(iter.next())
// undefined и поле done true, означает что цикл зваершился
console.log(iter.next())