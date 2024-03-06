export interface FoodItem {
	name: string;
	description: string;
}

const foodItems = [
	{
		category: "Chocolate",
		region: "Europe",
		items: [
			{ name: "Lindt", description: "Chocolate from Switzerland" },
			{ name: "Ferrero Rocher", description: "Chocolate from Italy" },
			{ name: "Godiva", description: "Chocolate from Belgium" },
			{ name: "Milka", description: "Chocolate from Germany" },
			{ name: "Cadbury", description: "Chocolate from the United Kingdom" }

		],
	},
	{
		category: "Chocolate",
		region: "North America",
		items: [
			{ name: "Dove", description: "Chocolate from the United States" },
		],
	},
	{
		category: "Coffee",
		region: "Pacific",
		items: [
			{ name: "Kauai", description: "Coffee from Hawaii" },
			{ name: "Lion Coffee", description: "Coffee from Hawaii" },
			{ name: "Kona Coffee", description: "Coffee from Hawaii" },
			{ name: "Hawaii Espresso", description: "Coffee from Hawaii" },
		],
	},
	{
		category: "Fruit",
		region: "Asia",
		items: [
			{ name: "Lychee", description: "Fruit from various regions of Asia" },
			{ name: "Coconut", description: "Fruit from various regions of Asia" },
			{ name: "Jackfruit", description: "Fruit from various regions of Asia" },
		],
	},
	{
		category: "Coffee",
		region: "Asia",
		items: [
			{ name: "Trung Nguyen", description: "Coffee from Vietnam" },
		],
	},
];

export default foodItems;