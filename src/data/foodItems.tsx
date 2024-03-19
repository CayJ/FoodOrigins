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
			{ name: "Hershey", description: "Chocolate from the United States" },
			{ name: "Mars Chocolate", description: "Chocolate from the United States" },
			{ name: "Mondelez International", description: "Chocolate from the United States" },
		],
	},
	{
		category: "Chocolate",
		region: "Asia",
		items: [
			{ name: "Meiji", description: "Chocolate from Japan" },
			{ name: "Morinaga", description: "Chocolate from Japan" },
			{ name: "Malagos Chocolate", description: "Chocolate from the Philippines" },
			{ name: "Royce", description: "Chocolate from Japan" },
			{ name: "Pod Chocolate", description: "Chocolate from Indonesia" },
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
		category: "Coffee",
		region: "Asia",
		items: [
			{ name: "Bru", description: "Coffee from India" },
			{ name: "Blue Tokai", description: "Coffee from India" },
			{ name: "Chestbrew Coffee", description: "Coffee from Vietnam" },
			{ name: "Simple Kaffa", description: "Coffee from Taiwan" },
			{ name: "Takamura Coffee", description: "Coffee from Japan" },
		],
	},
	{
		category: "Coffee",
		region: "Europe",
		items: [
			{ name: "Caffe Vergnano", description: "Coffee from Italy" },
			{ name: "Julius Meinl", description: "Coffee from Austria" },
			{ name: "The Barn Coffee", description: "Coffee from Germany" },
			{ name: "Lavazza", description: "Coffee from Italy" },
		],
	},
	{
		category: "Coffee",
		region: "Africa",
		items: [
			{ name: "Spring Valley Coffee", description: "Coffee from Kenya" },
			{ name: "Charriots Coffees", description: "Coffee from Uganda" },
			{ name: "Shecha Coffee", description: "Coffee from Ethiopia" },
			{ name: "Harrar Coffee", description: "Coffee from Ethiopia" },
		],
	},
	{
		category: "Fruit",
		region: "North America",
		items: [
			{ name: "Oranges", description: "Citrus fruit from around the continent" },
			{ name: "Bananas", description: "Fruit from various regions of the United States" },
			{ name: "Apples", description: "Fruit from various regions of the United States" },
			{ name: "Blackberries", description: "Fruit from various regions of the United States" },
			{ name: "Grapes", description: "Fruit from various regions of the United States" },
			{ name: "Strawberries", description: "Fruit from various regions of the United States" },
			{ name: "Lemons", description: "Fruit from various regions of the United States" },
			{ name: "Grapefruits", description: "Fruit from various regions of the United States" },
			{ name: "Cranberries", description: "Fruit from various regions of the United States" },
		],
	},
	{
		category: "Fruit",
		region: "Asia",
		items: [
			{ name: "Lychee", description: "Fruit from various regions of Asia" },
			{ name: "Coconut", description: "Fruit from various regions of Asia" },
			{ name: "Jackfruit", description: "Fruit from various regions of Asia" },
			{ name: "Durian", description: "Fruit from various regions of Asia" },
			{ name: "Dragon fruit", description: "Fruit from various regions of Asia" },
			{ name: "Mango", description: "Fruit from various regions of Asia" },
			{ name: "Guava", description: "Fruit from various regions of Asia" },

		],
	},
	{
		category: "Fruit",
		region: "Europe",
		items: [
			{ name: "Cherries", description: "Fruit from various regions of Europe" },
			{ name: "Apricots", description: "Fruit from various regions of Europe" },
			{ name: "Pears", description: "Fruit from various regions of Europe" },
			{ name: "Apples", description: "Fruit from various regions of Europe" },
			{ name: "Bananas", description: "Fruit from various regions of Europe" },
			{ name: "Strawberries", description: "Fruit from various regions of Europe" },
			{ name: "Plums", description: "Fruit from various regions of Europe" },
			{ name: "Tomatoes", description: "Fruit from various regions of Europe" },
			{ name: "Grapes", description: "Fruit from various regions of Europe" },

		],
	},
	{
		category: "Coffee",
		region: "Asia",
		items: [
			{ name: "Trung Nguyen", description: "Coffee from Vietnam" },
			{ name: "Kalsada Coffee", description: "Coffee from the Philippines" },
			{ name: "UCC Ueshima Coffee Co", description: "Coffee from Japan" },
			{ name: "Komeda Coffee", description: "Coffee from Japan" },
		],
	},
	{
		category: "Vegetable",
		region: "Europe",
		items: [
			{ name: "Carrot", description: "Vegetable from various regions of Europe" },
			{ name: "Turnip", description: "Vegetable from various regions of Europe" },
			{ name: "Parsnip", description: "Vegetable from various regions of Europe" },
			{ name: "Cabbage", description: "Vegetable from various regions of Europe" },
			{ name: "Horseradish", description: "Vegetable from various regions of Europe" },
		],
	},
	{
		category: "Vegetable",
		region: "North America",
		items: [
			{ name: "Corn", description: "Vegetable grown in the United States" },
			{ name: "Potatoes", description: "Vegetable grown in the United States" },
			{ name: "Lettuce", description: "Vegetable grown in the United States" },
			{ name: "Green Beans", description: "Vegetable grown in the United States" },
			{ name: "Sweet Potatoes", description: "Vegetable grown in the United States" },
			{ name: "Onions", description: "Vegetable grown in the United States" },
			{ name: "Green Peas", description: "Vegetable grown in the United States" },
		],
	},
	{
		category: "Vegetable",
		region: "Asia",
		items: [
			{ name: "Cucumber", description: "Vegetable from India" },
			{ name: "Eggplant", description: "Vegetable from India" },
			{ name: "Cabbage", description: "Vegetable from China" },
			{ name: "Chickpea", description: "Vegetable from India" },
			{ name: "Taro", description: "Vegetable from various regions of Asia" },
			{ name: "Lemongrass", description: "Vegetable from various regions of Asia" },
			{ name: "Sweet potatoes", description: "Vegetable from various regions of Asia" },
		],
	},
	{
		category: "Vegetable",
		region: "Pacific",
		items: [
			{ name: "Asparagus", description: "Vegetable grown in Hawaii" },
			{ name: "Squash", description: "Vegetable grown in Hawaii" },
			{ name: "Lettuce", description: "Vegetable grown in Hawaii" },
			{ name: "Onions", description: "Vegetable grown in Hawaii" },
			{ name: "Celery", description: "Vegetable grown in Hawaii" },
			{ name: "Bananas", description: "Vegetable grown in various regions of the Pacific" },
			{ name: "Plantain", description: "Vegetable grown in various regions of the Pacific" },
		],
	},
	{
		category: "Vegetable",
		region: "Africa",
		items: [
			{ name: "Yam", description: "Vegetable from various regions of Africa" },
			{ name: "Artichoke", description: "Vegetable from various regions of Africa" },
			{ name: "Okra", description: "Vegetable from various regions of Africa" },
			{ name: "Eggplant", description: "Vegetable from various regions of Africa" },
			{ name: "Millet", description: "Vegetable from various regions of Africa" },
			{ name: "Tomatoes", description: "Vegetable from various regions of Africa" },
			{ name: "Onions", description: "Vegetable from various regions of Africa" },
		],
	},
];

export default foodItems;