const BOT_TOKEN = "7102705599:AAF3mO6jObqN5V5YF0i0OMM-BMha_t_aUBQ";

var ingredients = [
    {
        name: "Starlight Blossom",
        image: "Ingredient_1.png",
    },
    {
        name: "Moonbeam Fern",
        image: "Ingredient_2.png",
    },
    {
        name: "Sunfire Lotus",
        image: "Ingredient_3.png",
    },
    {
        name: "Shadowvine",
        image: "Ingredient_4.png",
    },
    {
        name: "Celestial Ivy",
        image: "Ingredient_5.png",
    },
    {
        name: "Thunderleaf",
        image: "Ingredient_6.png",
    },
    {
        name: "Frostbloom",
        image: "Ingredient_7.png",
    },
    {
        name: "Embergrass",
        image: "Ingredient_8.png",
    },
    {
        name: "Spiritroot",
        image: "Ingredient_9.png",
    },
    {
        name: "Starfall Petal",
        image: "Ingredient_10.png",
    },
    {
        name: "Voidbloom",
        image: "Ingredient_11.png",
    },
    {
        name: "Dreamshade",
        image: "Ingredient_12.png",
    },
    {
        name: "Phoenix Ember",
        image: "Ingredient_13.png",
    },
    {
        name: "Starflare Orchid",
        image: "Ingredient_14.png",
    },
    {
        name: "Stormblossom",
        image: "Ingredient_15.png",
    },
    {
        name: "Silverleaf",
        image: "Ingredient_16.png",
    },
    {
        name: "Bloodthorn",
        image: "Ingredient_17.png",
    },
    {
        name: "Evergreen Whisper",
        image: "Ingredient_18.png",
    },
    {
        name: "Witchwood Vine",
        image: "Ingredient_19.png",
    },
    {
        name: "Faeflower",
        image: "Ingredient_20.png",
    },
    {
        name: "Dragonvine",
        image: "Ingredient_21.png",
    },
    {
        name: "Serpentleaf",
        image: "Ingredient_22.png",
    },
    {
        name: "Whispering Willow",
        image: "Ingredient_23.png",
    },
    {
        name: "Bloodmoon Lily",
        image: "Ingredient_24.png",
    },
    {
        name: "Soulroot",
        image: "Ingredient_25.png",
    },
    {
        name: "Dreamthistle",
        image: "Ingredient_26.png",
    },
    {
        name: "Moonshadow Moss",
        image: "Ingredient_27.png",
    },
    {
        name: "Starfrost Berry",
        image: "Ingredient_28.png",
    },
    {
        name: "Spiritbark",
        image: "Ingredient_29.png",
    },
    {
        name: "Twilight Rose",
        image: "Ingredient_30.png",
    },
    {
        name: "Voidroot",
        image: "Ingredient_31.png",
    },
    {
        name: "Emberfern",
        image: "Ingredient_32.png",
    },
    {
        name: "Nightshade Blossom",
        image: "Ingredient_33.png",
    },
    {
        name: "Stardust Lily",
        image: "Ingredient_34.png",
    },
    {
        name: "Frostfire Blossom",
        image: "Ingredient_35.png",
    },
    {
        name: "Radiant Sunflower",
        image: "Ingredient_36.png",
    },
    {
        name: "Shimmerleaf",
        image: "Ingredient_37.png",
    },
    {
        name: "Bloodfire Rose",
        image: "Ingredient_38.png",
    },
    {
        name: "Starlight Fern",
        image: "Ingredient_39.png",
    },
    {
        name: "Astral Oak",
        image: "Ingredient_40.png",
    },
];

var recipes = [
    {
        name: "Moonlight Elixir",
        image: "Recipe_1.png",
        ingredients: [
            "Moonbeam Fern",
            "Starlight Blossom",
            "Celestial Ivy",
            "Frostbloom",
            "Spiritroot",
        ],
    },
    {
        name: "Shadowfire Brew",
        image: "Recipe_2.png",
        ingredients: [
            "Shadowvine",
            "Embergrass",
            "Voidbloom",
            "Dreamshade",
            "Phoenix Ember",
        ],
    },
    {
        name: "Starfall Salad",
        image: "Recipe_3.png",
        ingredients: [
            "Starfall Petal",
            "Evergreen Whisper",
            "Dragonvine",
            "Serpentleaf",
            "Whispering Willow",
        ],
    },
    {
        name: "Bloodmoon Infusion",
        image: "Recipe_4.png",
        ingredients: [
            "Bloodmoon Lily",
            "Bloodthorn",
            "Soulroot",
            "Dreamthistle",
            "Moonshadow Moss",
        ],
    },
    {
        name: "Frostfire Tea",
        image: "Recipe_5.png",
        ingredients: [
            "Frostfire Blossom",
            "Radiant Sunflower",
            "Shimmerleaf",
            "Frostbloom",
            "Spiritbark",
        ],
    },
    {
        name: "Twilight Tonic",
        image: "Recipe_6.png",
        ingredients: [
            "Twilight Rose",
            "Voidroot",
            "Emberfern",
            "Nightshade Blossom",
            "Stardust Lily",
        ],
    },
    {
        name: "Sunfire Elixir",
        image: "Recipe_7.png",
        ingredients: [
            "Sunfire Lotus",
            "Embergrass",
            "Starfrost Berry",
            "Radiant Sunflower",
            "Phoenix Ember",
        ],
    },
    {
        name: "Whisperwind Potion",
        image: "Recipe_8.png",
        ingredients: [
            "Evergreen Whisper",
            "Faeflower",
            "Stardust Lily",
            "Spiritroot",
            "Shadowvine",
        ],
    },
    {
        name: "Celestial Brew",
        image: "Recipe_9.png",
        ingredients: [
            "Celestial Ivy",
            "Starflare Orchid",
            "Moonbeam Fern",
            "Thunderleaf",
            "Sunfire Lotus",
        ],
    },
    {
        name: "Astral Essence",
        image: "Recipe_10.png",
        ingredients: [
            "Astral Oak",
            "Starlight Fern",
            "Sunfire Lotus",
            "Radiant Sunflower",
            "Celestial Ivy",
        ],
    },
];

var levels = [
    0, 500, 1500, 3000, 5000, 7500, 10500, 14000, 18000, 22500, 27500,
];

var levelName = [
    "Novice",
    "Novice",
    "Novice",
    "Novice",
    "Novice",
    "Novice",
    "Novice",
    "Novice",
    "Novice",
    "Novice",
    "Novice",
];

const baseUrl = window.location.origin; // Gets the current origin (scheme + hostname + port)
class GameController {
    rootElement;
    clickTabCount;
    balance = 0;
    inventory = [];
    currentRecipe;
    lastCraftTime;
    isCrafted;
    currentUser;
    randomIngredient;
    intervalFuntion;
    time;
    leftTime;

    constructor(data, rootElement) {
        this.rootElement = rootElement;
        this.time = 30;
        this.leftTime = -1;
        this.clickTabCount = 100;
        this.inventory = data.inventory;
        this.currentRecipe = data.currentRecipe;
        this.lastCraftTime = data.lastCraftTime;
        this.isCollected = data.isCollected;
        this.currentUser = data.currentUser;
        this.balance = data.balance;
        this.levelPoint = data.levelPoint;

        this.initGame();
    }

    initGame() {
        this.leftTimeToPlay();
        this.rootElement
            .find(".game-user-profile-body-username")
            .text(this.currentUser.username);
        let userLevel = this.calculateUserLevel(this.levelPoint);
        this.rootElement
            .find(".game-user-profile-body-level-description-level")
            .text(userLevel.level);
        this.rootElement
            .find(".game-user-profile-body-level-description-name")
            .text(levelName[userLevel.level - 1]);
        this.rootElement
            .find(".game-user-profile-body-level-percent")
            .css("width", `${userLevel.currentPercent}%`);

        this.rootElement.find(".game-user-balance-text").text(this.balance);

        let currentRecipe = recipes.find(
            (e) => e.name == this.currentRecipe.name
        );
        currentRecipe.ingredients.forEach((ingredient, index) => {
            let currentIngredient = ingredients.find(
                (e) => e.name == ingredient
            );
            this.rootElement
                .find(".game-ingredient-item")
                .eq(index)
                .find(".game-ingredient-item-image img")
                .attr("src", "images/" + currentIngredient.image);
            this.rootElement
                .find(".game-ingredient-item")
                .eq(index)
                .find(".game-ingredient-item-title")
                .text(ingredient);
            this.rootElement
                .find(".game-ingredient-item")
                .eq(index)
                .find(".game-ingredient-item-level-percent")
                .css(
                    "width",
                    `${this.currentRecipe.ingredientsClicks[index]}%`
                );
        });

        this.randomIngredient = this.getRandomIngredients();
        this.randomIngredient.forEach((ingredient, index) => {
            this.rootElement
                .find(".game-tap-element")
                .eq(index)
                .attr("ingredient", ingredient.name);
            this.rootElement
                .find(".game-tap-element")
                .eq(index)
                .find("img")
                .attr("src", "images/" + ingredient.image);
        });

        fetchUserProfilePhotoUrl(BOT_TOKEN, this.currentUser.t_user_id)
            .then((url) => {
                if (url) {
                    this.rootElement
                        .find(".game-user-profile-avatar img")
                        .attr("src", url);
                }
            })
            .catch((error) => {
                console.error("Error:", error.message);
            });
        if (this.leftTime < 0) {
            if (this.isCollected) {
                if (this.checkAvailableCraft()) this.showCraftButton();
                else
                    this.intervalFuntion = setInterval(() => {
                        this.showRefreshTimer();
                    }, 1000);
            } else {
                this.showCollectButton();
            }
        } else {
            this.intervalFuntion = setInterval(() => {
                this.showTimeToPlay(this.leftTime);
            }, 1000);
        }

        this.addEventListeners();
    }
    leftTimeToPlay() {
        const last_crafted_time = new Date(this.lastCraftTime);
        const futureDate = new Date(
            last_crafted_time.getTime() + 4 * 60 * 60 * 1000
        );
        const currentTime = new Date();

        this.leftTime = (futureDate - currentTime) / 1000;
    }
    addEventListeners() {
        this.rootElement.find(".game-tap-element").off("click");
        this.rootElement.find(".game-tap-element").on("click", (element) => {
            this.handleTapIngredient(
                $(element.currentTarget).attr("ingredient")
            );
            $(element.currentTarget).addClass("active");
            setTimeout(() => {
                $(element.currentTarget).removeClass("active");
            }, 100);
        });

        this.rootElement.find(".game-tap-craft-button").off("click");
        this.rootElement
            .find(".game-tap-craft-button")
            .on("click", (element) => {
                this.handleCraftButton();
                $(element.currentTarget).addClass("active");
                setTimeout(() => {
                    $(element.currentTarget).removeClass("active");
                }, 100);
            });

        this.rootElement.find(".game-tap-collect-button").off("click");
        this.rootElement
            .find(".game-tap-collect-button")
            .on("click", (element) => {
                this.handleCollectButton();
                $(element.currentTarget).addClass("active");
                setTimeout(() => {
                    $(element.currentTarget).removeClass("active");
                }, 100);
            });

        this.rootElement.find(".game-user-inventory").off("click");
        this.rootElement.find(".game-user-inventory").on("click", (element) => {
            this.showInventory();
        });

        this.rootElement.find("#InventoryTab .backBtn").off("click");
        this.rootElement.find("#InventoryTab .backBtn").on("click", (element) => {
            console.log("Back button clicked");
            this.showHome();
        });
    }

    handleTapIngredient(ingredient) {
        if(this.leftTime < 0){
            let currentRecipe = recipes.find(
                (e) => e.name == this.currentRecipe.name
            );
            let currentIngredientIndex = currentRecipe.ingredients.findIndex(
                (e) => e == ingredient
            );
            if (currentIngredientIndex !== -1) {
                if (
                    this.currentRecipe.ingredientsClicks[currentIngredientIndex] <
                    this.clickTabCount
                ) {
                    this.currentRecipe.ingredientsClicks[currentIngredientIndex]++;
                    this.balance++;
                    this.levelPoint++;
                    const endpoint = "/api/game-controll";
                    const url = `${baseUrl}${endpoint}`;
    
                    const data = {
                        user_id: this.currentUser.id,
                        balance: this.balance,
                        level_point: this.levelPoint,
                        current_recipe: this.currentRecipe.name,
                        is_collected: 1,
                        ingredients_clicks:
                            this.currentRecipe.ingredientsClicks.join(","),
                        last_crafted_time: this.lastCraftTime,
                    };
                    $.ajax({
                        url: url,
                        type: "post",
                        data: data,
                        success: function (resp) {},
                    });
    
                    if (
                        this.currentRecipe.ingredientsClicks[
                            currentIngredientIndex
                        ] == this.clickTabCount
                    ) {
                        console.log("one is full!");
                        let isShowCraftButton = this.checkAvailableCraft();
                        if (isShowCraftButton) {
                            this.stopIntervalFuntion();
                            this.showCraftButton();
                        } else if (this.checkRefreshValidate())
                            this.refreshTabIngredients();
                    }
                } else {
                    console.log("clicked full ingredient");
                }
            } else {
                console.log("clicked wrong ingredient");
            }
    
            this.updateView();
        }
    }
    handleCraftButton() {
        let now = new Date();

        let year = now.getFullYear();
        let month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
        let day = String(now.getDate()).padStart(2, "0");
        let hours = String(now.getHours()).padStart(2, "0");
        let minutes = String(now.getMinutes()).padStart(2, "0");
        let seconds = String(now.getSeconds()).padStart(2, "0");

        // Format the date and time
        let formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        const data = {
            user_id: this.currentUser.id,
            balance: this.balance,
            level_point: this.levelPoint,
            is_collected: 0,
            current_recipe: this.currentRecipe.name,
            ingredients_clicks: "0,0,0,0,0",
            last_crafted_time: formattedDateTime,
        };
        const endpoint = "/api/game-controll";
        const url = `${baseUrl}${endpoint}`;
        $.ajax({
            url: url,
            type: "post",
            data: data,
            success: function (resp) {},
        });
        this.isCollected = 0;
        this.currentRecipe.ingredientsClicks = [0, 0, 0, 0, 0];
        this.lastCraftTime = formattedDateTime;
        this.initGame();
    }
    handleCollectButton() {
        let currentRecipe = "";
        let completedRecipe = this.currentRecipe.name;
        const completedRecipeIndex = recipes.findIndex(
            (e) => e.name == this.currentRecipe.name
        );

        if (completedRecipeIndex < recipes.length - 1)
            currentRecipe = recipes[completedRecipeIndex + 1].name;
        else currentRecipe = recipes[0].name;

        const data = {
            user_id: this.currentUser.id,
            balance: this.balance,
            level_point: this.levelPoint,
            is_collected: 1,
            current_recipe: currentRecipe,
            ingredients_clicks: "0,0,0,0,0",
            last_crafted_time: this.lastCraftTime,
            completedRecipe: completedRecipe,
        };
        this.currentRecipe.name = currentRecipe;
        this.isCollected = 1;
        this.inventory[completedRecipe]++;
        const endpoint = "/api/game-controll";
        const url = `${baseUrl}${endpoint}`;
        $.ajax({
            url: url,
            type: "post",
            data: data,
            success: function (resp) {},
        });
        
        this.initGame();
    }
    showInventory() {
        recipes.forEach((inventory, index) => {
            console.log(inventory.image);
            this.rootElement
                .find(".invenvtoryElement")
                .eq(index)
                .find(".inventoryImg img")
                .attr("src", "images/" + inventory.image);
            this.rootElement
                .find(".invenvtoryElement")
                .eq(index)
                .find(".inventoryInfo")
                .find(".invenvtoryTitle")
                .text(inventory.name);
            this.rootElement
                .find(".invenvtoryElement")
                .eq(index)
                .find(".inventoryInfo")
                .find(".invenvtoryNumber")
                .text("×"+this.inventory[inventory.name]);
        });
        this.rootElement.find("#GameTab").css("display", "none");
        this.rootElement.find("#InventoryTab").css("display", "block");
    }
    showHome() {
        this.rootElement.find("#InventoryTab").css("display", "none");
        this.rootElement.find("#GameTab").css("display", "block");
    }
    checkRefreshValidate() {
        let notClickable = true;
        let currentRecipe = recipes.find(
            (e) => e.name == this.currentRecipe.name
        );
        console.log(this.randomIngredient);
        this.randomIngredient.forEach((ingredient) => {
            let currentIngredientIndex = currentRecipe.ingredients.findIndex(
                (e) => e == ingredient.name
            );
            if (currentIngredientIndex !== -1) {
                if (
                    this.currentRecipe.ingredientsClicks[
                        currentIngredientIndex
                    ] != this.clickTabCount
                )
                    notClickable = false;
            }
        });
        return !notClickable;
    }
    checkAvailableCraft() {
        let isValid = true;
        let currentRecipe = recipes.find(
            (e) => e.name == this.currentRecipe.name
        );
        currentRecipe.ingredients.forEach((ingredient, index) => {
            if (
                this.currentRecipe.ingredientsClicks[index] < this.clickTabCount
            )
                isValid = false;
        });
        return isValid;
    }
    showCraftButton() {
        this.rootElement.find(".game-tap-description .refreshTimer").css("display", "none");
        this.rootElement.find(".game-tap-description .waitingTimer").css("display", "none");
        this.rootElement.find(".game-tap-description .game-tap-collect-button").css("display", "none");
        this.rootElement.find(".game-tap-description .game-tap-craft-button").css("display", "block");
    }
    showCollectButton() {
        this.rootElement.find(".game-tap-description .refreshTimer").css("display", "none");
        this.rootElement.find(".game-tap-description .waitingTimer").css("display", "none");
        this.rootElement.find(".game-tap-description .game-tap-craft-button").css("display", "none");
        this.rootElement.find(".game-tap-description .game-tap-collect-button").css("display", "block");
    }
    showRefreshTimer() {
        this.rootElement.find(".game-tap-description .refreshTimer").css("display", "block");
        this.rootElement.find(".game-tap-description .waitingTimer").css("display", "none");
        this.rootElement.find(".game-tap-description .game-tap-craft-button").css("display", "none");
        this.rootElement.find(".game-tap-description .game-tap-collect-button").css("display", "none");
        if (this.time >= 10)
            this.rootElement
                .find(".game-tap-description")
                .find(".refreshTimer")
                .text("00:" + this.time);
        else
            this.rootElement
                .find(".game-tap-description")
                .find(".refreshTimer")
                .text("00:0" + this.time);
        this.time--;
        if (this.time < 0) {
            this.refreshTabIngredients();
        }
    }
    showTimeToPlay(seconds) {
        seconds = Number(seconds);
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);

        const hDisplay = h > 0 ? String(h).padStart(2, "0") : "00";
        const mDisplay = m > 0 ? String(m).padStart(2, "0") : "00";
        const sDisplay = s > 0 ? String(s).padStart(2, "0") : "00";

        this.rootElement.find(".game-tap-description .refreshTimer").css("display", "none");
        this.rootElement.find(".game-tap-description .waitingTimer").css("display", "block");
        this.rootElement.find(".game-tap-description .game-tap-craft-button").css("display", "none");
        this.rootElement.find(".game-tap-description .game-tap-collect-button").css("display", "none");
    
        this.rootElement
            .find(".game-tap-description")
            .find(".waitingTimer")
            .text(hDisplay + ":" + mDisplay + ":" + sDisplay);

        this.leftTime--;
        if (this.leftTime < 0) {
            this.stopIntervalFuntion();
            this.initGame();
        }
    }
    refreshTabIngredients() {
        this.randomIngredient = this.getRandomIngredients();

        this.randomIngredient.forEach((ingredient, index) => {
            this.rootElement
                .find(".game-tap-element")
                .eq(index)
                .attr("ingredient", ingredient.name);
            this.rootElement
                .find(".game-tap-element")
                .eq(index)
                .find("img")
                .attr("src", "images/" + ingredient.image);
        });
        this.time = 30;
    }
    stopIntervalFuntion() {
        clearInterval(this.intervalFuntion);
    }

    updateView() {
        let userLevel = this.calculateUserLevel(this.levelPoint);
        this.rootElement
            .find(".game-user-profile-body-level-description-level")
            .text(userLevel.level);
        this.rootElement
            .find(".game-user-profile-body-level-description-name")
            .text(levelName[userLevel.level - 1]);
        this.rootElement
            .find(".game-user-profile-body-level-percent")
            .css("width", `${userLevel.currentPercent}%`);

        this.rootElement.find(".game-user-balance-text").text(this.balance);

        let currentRecipe = recipes.find(
            (e) => e.name == this.currentRecipe.name
        );
        currentRecipe.ingredients.forEach((ingredient, index) => {
            let currentIngredient = ingredients.find(
                (e) => e.name == ingredient
            );
            this.rootElement
                .find(".game-ingredient-item")
                .eq(index)
                .find(".game-ingredient-item-level-percent")
                .css(
                    "width",
                    `${this.currentRecipe.ingredientsClicks[index]}%`
                );
        });
    }

    calculateUserLevel(levelPoint) {
        let result = {
            level: 0,
            currentPercent: 0,
        };
        for (let index = 0; index < levels.length; index++) {
            const level = levels[index];
            if (level > levelPoint) {
                result.level = index;
                result.currentPercent =
                    ((levelPoint - levels[index - 1]) * 100) /
                    (levels[index] - levels[index - 1]);
                return result;
            }
        }
    }

    getRandomIngredients() {
        let currentRecipe = recipes.find(
            (e) => e.name == this.currentRecipe.name
        );
        let filteredArray = currentRecipe.ingredients.map((ingredient) => {
            return ingredients.find((e) => e.name == ingredient);
        });
        filteredArray = filteredArray.filter((e, index) => {
            return this.currentRecipe.ingredientsClicks[index] != 100;
        });
        let selectedFromFiltered = [];
        if (filteredArray.length > 0) {
            const randomIndex = Math.floor(
                Math.random() * filteredArray.length
            );
            selectedFromFiltered.push(filteredArray[randomIndex]);
        }
        let selectedFromOriginal = [];
        let selectedNames = new Set(
            selectedFromFiltered.map((item) => item.name)
        );
        while (selectedFromOriginal.length < 8 - selectedFromFiltered.length) {
            const randomIndex = Math.floor(Math.random() * ingredients.length);
            const randomItem = ingredients[randomIndex];
            if (!selectedNames.has(randomItem.name)) {
                selectedFromOriginal.push(randomItem);
                selectedNames.add(randomItem.name);
            }
        }

        let randomizedSelection =
            selectedFromFiltered.concat(selectedFromOriginal);

        randomizedSelection.sort(() => Math.random() - 0.5);

        return randomizedSelection;
    }
}

window.GameController = GameController;

async function getUserProfilePhotos(botToken, userId) {
    const url = `https://api.telegram.org/bot${botToken}/getUserProfilePhotos?user_id=${userId}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.ok) {
            return data.result;
        } else {
            throw new Error(
                "Error fetching profile photos: " + data.description
            );
        }
    } catch (error) {
        console.error("Fetch Error:", error.message);
        return null;
    }
}

async function getFile(botToken, fileId) {
    const url = `https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.ok) {
            const filePath = data.result.file_path;
            const fileUrl = `https://api.telegram.org/file/bot${botToken}/${filePath}`;
            return fileUrl;
        } else {
            throw new Error("Error fetching file: " + data.description);
        }
    } catch (error) {
        console.error("Fetch Error:", error.message);
        return null;
    }
}

async function fetchUserProfilePhotoUrl(botToken, userId) {
    const photos = await getUserProfilePhotos(botToken, userId);
    if (photos && photos.total_count > 0) {
        const photo = photos.photos[0][0]; // Get the smallest size of the first photo
        const fileUrl = await getFile(botToken, photo.file_id);
        return fileUrl;
    } else {
        console.log("No profile photos found for this user.");
        return null;
    }
}
