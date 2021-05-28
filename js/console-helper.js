// Adds a background color to console.log();  

const prettyLog = (label, val, asTable = false, shouldWarn = false) => {
	console.log(
		"%c" + label,
		"background-color: #245057; padding: 0.2rem 1.5rem;"
	);
	if (shouldWarn) {
		console.warn(val);
	} else if (asTable) {
		console.table(val);
	} else {
		console.log(val);
	}
};

const users = {
	ryuji: {
		id: "ABC123",
		email: "ryuji@example.com",
	},
	makoto: {
		id: "DEF456",
		email: "makoto@example.com",
	},
	yusuke: {
		id: "GHI789",
		email: "yusuke@example.com",
	},
	akechi: {
		id: "JKL000",
		email: "akechi@example.com",
	},
};

const isAdmin = false;
var loveOfMyLife;
const itemsInWishList = 2;
const itemsInCart = 0;

console.clear();
prettyLog("IsAdmin", isAdmin);
prettyLog("Items in wish list", itemsInWishList, false, itemsInWishList === 0);
prettyLog("Love of my life", loveOfMyLife);
prettyLog("Users", users, true);
prettyLog("Items in cart", itemsInCart, false, itemsInCart === 0);
