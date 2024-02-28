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
];

export default foodItems;