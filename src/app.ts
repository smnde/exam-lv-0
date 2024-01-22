// 1.
export function minimal(a: number, b: number): number {
	// return a < b ? a : b;

	if (a < b) return a;
	else if (a > b) return b;
	else return a;
}

// 2.
export function power(a: number, b: number): number {
	return Math.pow(a, b);
}

// 3.
export function penjumlahanBilangan(a: number[], b: string): number | string {
	if (b === "ganjil") {
		const hasil: number = a
			.filter((num: number) => num % 2 !== 0)
			.reduce((acc, curr) => acc + curr, 0);

		return hasil;
	} else if (b === "genap") {
		const hasil: number = a
			.filter((num: number) => num % 2 === 0)
			.reduce((acc, curr) => acc + curr, 0);

		return hasil;
	} else {
		return "error";
	}
}

// 4.
class Animal {
	name: string;
	age: number;
	isMamal: boolean;

	constructor(name: string, age: number, isMamal: boolean) {
		this.name = name;
		this.age = age;
		this.isMamal = isMamal;
	}
}

// 5.
class Rabbit extends Animal {
	constructor(name: string, age: number, isMamal: boolean = true) {
		super(name, age, isMamal);
	}

	eat(): string {
		return `${this.name} yang berumur ${this.age} sedang makan!`;
	}
}

// 6.
class Eagle extends Animal {
	speed: number;

	constructor(
		name: string,
		age: number,
		isMamal: boolean,
		speed: number = 220
	) {
		super(name, age, isMamal);
		this.speed = speed;
	}

	fly(): string {
		return `${this.name} yang berumur ${this.age} sedang terbang!`;
	}

	protected run(speed: number) {
		return `${this.name} berlari dengan kecepatan ${speed} km`;
	}
}

// 7.
class EagleRun extends Eagle {
	constructor(
		name: string,
		age: number,
		isMamal: boolean = false,
		speed: number = 220
	) {
		super(name, age, isMamal, speed);
	}

	fly(): string {
		return `${this.name} yang berumur ${this.age} sedang terbang!`;
	}

	runEagle(speed: number): string {
		return `${this.name} berlari dengan kecepatan ${speed} km`;
	}
}

// 8.
const myRabbit: Rabbit = new Rabbit("Labi", 2);
myRabbit.eat();

// 9.
const myEagle: Eagle = new Eagle("Elo", 4, false, 100);
myEagle.fly();
// myEagle.run(100); // pasti error

// 10.
const speedTes: EagleRun = new EagleRun("Labi", 4, false, 220);

export { Animal, Rabbit, Eagle, EagleRun, myRabbit, myEagle, speedTes };
