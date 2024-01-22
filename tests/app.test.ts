import {
	Animal,
	Eagle,
	EagleRun,
	Rabbit,
	minimal,
	myEagle,
	myRabbit,
	penjumlahanBilangan,
	power,
	speedTes,
} from "../src/app";

describe("minimal function", () => {
	it("should return minimum number", () => {
		expect(minimal(1, 4)).toBe(1);
		expect(minimal(3, 2)).toBe(2);
		expect(minimal(3, 3)).toBe(3);
	});
});

describe("power func", () => {
	it("should return a^b", () => {
		expect(power(7, 3)).toBe(343);
		expect(power(3, 3)).toBe(27);
		expect(power(4, 0.5)).toBe(2);
	});
});

describe("penjumlahan bilangan func", () => {
	it("should return sum of array", () => {
		expect(penjumlahanBilangan([1, 2, 3], "ganjil")).toBe(4);
		expect(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "genap")).toBe(12);
		expect(penjumlahanBilangan([1, 2, 3, 4, 5], "ganjil")).toBe(9);
		expect(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "ganj")).toBe("error");
		expect(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "positif")).toBe("error");
	});
});

describe("Class Animal", () => {
	it("should create an instance of Animal", () => {
		const dog = new Animal("dog", 5, false);

		expect(dog).toBeInstanceOf(Animal);
		expect(dog.name).toBe("dog");
		expect(dog.age).toBe(5);
		expect(dog.isMamal).toBe(false);
	});

	it("should create instance of rabbit", () => {
		const rabbit = new Rabbit("rabbit", 5);

		expect(rabbit).toBeInstanceOf(Rabbit);
		expect(rabbit.name).toBe("rabbit");
		expect(rabbit.age).toBe(5);
		expect(rabbit.isMamal).toBe(true);
		expect(rabbit.eat()).toBe("rabbit yang berumur 5 sedang makan!");
	});

	it("should create instance of Eagle", () => {
		const eagle = new Eagle("eagle", 5, false);

		expect(eagle).toBeInstanceOf(Eagle);
		expect(eagle.name).toBe("eagle");
		expect(eagle.age).toBe(5);
		expect(eagle.isMamal).toBe(false);
		expect(eagle.fly()).toBe("eagle yang berumur 5 sedang terbang!");
		// expect(eagle.run(100)).toBe("eagle berlari dengan kecepatan 100 km"); // should be public
	});

	it("should create instance of EagleRun", () => {
		const eagleRun = new EagleRun("eagle", 5, false);

		expect(eagleRun).toBeInstanceOf(Eagle);
		expect(eagleRun.name).toBe("eagle");
		expect(eagleRun.age).toBe(5);
		expect(eagleRun.isMamal).toBe(false);
		expect(eagleRun.fly()).toBe("eagle yang berumur 5 sedang terbang!");
		expect(eagleRun.runEagle(100)).toBe(
			"eagle berlari dengan kecepatan 100 km"
		);
	});

	it("should return instance of Rabbit", () => {
		expect(myRabbit.name).toBe("Labi");
		expect(myRabbit.age).toBe(2);
		expect(myRabbit.isMamal).toBe(true);
		expect(myRabbit.eat()).toBe("Labi yang berumur 2 sedang makan!");
	});

	it("should return instance of Eagle", () => {
		expect(myEagle.name).toBe("Elo");
		expect(myEagle.age).toBe(4);
		expect(myEagle.isMamal).toBe(false);
		expect(myEagle.fly()).toBe("Elo yang berumur 4 sedang terbang!");
		// expect(myEagle.run(100)).not.toBe("Elo berlari dengan kecepatan 100 km"); // error
	});

	it("should return instance of EagleRun", () => {
		expect(speedTes.name).toBe("Labi");
		expect(speedTes.age).toBe(4);
		expect(speedTes.isMamal).toBe(false);
		expect(speedTes.runEagle(220)).toBe("Labi berlari dengan kecepatan 220 km");
	});
});
